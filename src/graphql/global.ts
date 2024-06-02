import { interfaceType } from "nexus";
import { LogLevel, prisma } from "../context";
import { sqltag } from "@prisma/client/runtime/library";
import { updateElo } from "./Elo";
import { log } from "../context";

const LOG_CAT = "Rating Ranking ELO Updater";

export const NodeObject = interfaceType({
	name: "Node",
	resolveType(root) { //idk what the fuck are this thing doing
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-expect-error
		return root.__typename;
	},
	definition(t) {
		t.nonNull.int("id");
	},
});

let previousSum = "";

setInterval(async () => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-expect-error
	const checksum: string = (await prisma.$queryRaw(sqltag`
	SELECT
    	md5(CAST((array_agg(f.* order by id))AS text))
	FROM
    	public."Score" f;
	`))[0].md5;
	log(LogLevel.DEBUG, `Previous checksum: ${previousSum}, Current checksum: ${checksum}`, LOG_CAT);
	if (previousSum == checksum) {
		previousSum = checksum;
		log(LogLevel.DEBUG, "No changes detected, skipping re-ranking", LOG_CAT);
		return;
	}
	previousSum = checksum;


	log(LogLevel.INFO, "Checksum changed, start re-ranking", LOG_CAT);
	// #region rating
	log(LogLevel.DEBUG, "Start re-rating", LOG_CAT);
	const shooterIds = (await prisma.shooter.findMany({
		select: {
			id: true,
		},
	}));
	const currentRatingTick = (await prisma.rating.findFirst({
		orderBy: {
			createAt: "desc",
		},
		select: {
			tick: true,
		},
	}))?.tick ?? 0;
	for (const v of shooterIds) {
		const statis = await prisma.score.aggregate({
			where: {
				shooterId: v.id,
			},
			_avg: {
				accuracy: true,
				hitFactor: true,
			},
			_sum: {
				score: true,
				time: true,
			},
			_count: {
				_all: true,
			},
		});
		//R = (avg_acc)*(avg_hitfactor)*(sum_score/sum_time)
		//ver2. s = sum of score, t = sum of  time, k = s/t, a = avg acc, h= avg hit factor, f rating(k) = ak^2+hk
		const factor = (statis._sum.score ?? 1) / (statis._sum.time ?? 1);
		let rating = ((statis._avg.accuracy ?? 0) * 0.01 * factor * factor) + (factor * (statis._avg.hitFactor ?? 0));
		if (isNaN(rating))
			rating = 0;
		log(LogLevel.DEBUG, `Update rating for shooterId: ${v.id}, rating: ${rating}`, LOG_CAT);
		await prisma.rating.create({
			data: {
				rating: rating,
				shooter: {
					connect: {
						id: v.id,
					},
				},
				tick: currentRatingTick + 1,
			},
		});
	}
	// #endregion
	// #region ranking
	log(LogLevel.DEBUG, "Start re-ranking", LOG_CAT);
	const ratings = await prisma.elo.findMany({
		orderBy: [
			{
				createAt: "desc",
			},
			{
				elo: "desc",
			},
		],
		distinct: "shooterId",
	});
	const currentRankingTick = (await prisma.ranking.findFirst({
		orderBy: {
			createAt: "desc",
		},
	}))?.tick ?? 0;
	const sortedRating = ratings.sort((a, b) => b.elo - a.elo);
	for (const r in sortedRating) {
		log(LogLevel.DEBUG, `Update ranking for shooterId: ${sortedRating[r].shooterId}, rank: ${parseInt(r) + 1}`, LOG_CAT);
		await prisma.ranking.create({
			data: {
				rank: parseInt(r) + 1,
				shooter: {
					connect: {
						id: sortedRating[r].shooterId,
					},
				},
				tick: currentRankingTick + 1,
			},
		});
	}
	// #endregion
	await updateElo();

}, 1000 * 60 * (parseFloat(process.env.RERANKING_INTERVAL ?? "5")));