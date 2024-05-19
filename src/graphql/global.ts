import { interfaceType } from "nexus";
import { prisma } from "../context";
import { sqltag } from "@prisma/client/runtime/library";

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
	console.log("previousSum", previousSum, "currentSum", checksum);
	if (previousSum == checksum) {
		previousSum = checksum;
		console.log("No change in scores, skip re-ranking");
		return;
	}
	previousSum = checksum;



	try {
		console.log("Re-ranking scores");
		// #region rating
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
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-expect-error
			const factor = statis._sum.score / statis._sum.time;
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-expect-error
			const rating = (statis._avg.accuracy * 0.01 * factor * factor) + (factor * statis._avg.hitFactor);
			console.log(`Update rating for shooterId: ${v.id}`);
			await prisma.rating.create({
				data: {
					rating: rating ?? 0,
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
		const ratings = await prisma.rating.findMany({
			orderBy: [
				{
					createAt: "desc",
				},
				{
					rating: "desc",
				},
			],
			distinct: "shooterId",
		});
		const currentRankingTick = (await prisma.ranking.findFirst({
			orderBy: {
				createAt: "desc",
			},
		}))?.tick ?? 0;
		for (const r in ratings) {
			await prisma.ranking.create({
				data: {
					rank: ratings.length -parseInt(r),
					shooter: {
						connect: {
							id: ratings[r].shooterId,
						},
					},
					tick: currentRankingTick + 1,
				},
			});
		}
		// #endregion
	} catch (error) {
		console.error(error);
	}
}, 1000 * 60 * (parseFloat(process.env.RERANKING_INTERVAL ?? "5")));