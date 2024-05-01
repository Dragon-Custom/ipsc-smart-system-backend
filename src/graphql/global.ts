import { interfaceType } from "nexus";
import { subscribe } from "../context";
import moment from "moment";

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

subscribe("Score", [
	"create",
	"createMany",
	"update",
	"updateMany",
	"delete",
	"deleteMany",
], async (prisma, model, action, params) => {
	const scoreId = params.args.where.id;
	const shooterId = (await prisma.score.findUnique({
		where: {
			id: scoreId,
		},
		select: {
			shooterId: true,
		},
	}))?.shooterId;
	if (!shooterId) return;
	const statis = await prisma.score.aggregate({
		where: {
			shooterId: shooterId,
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
	//ver2. s = sum of score, t = sum of  time, k = s/t, a = avg acc, h= avg hit factor, f rating(k) = af^2+fh
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-expect-error
	const factor = statis._sum.score / statis._sum.time;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-expect-error
	const rating = (statis._avg.accuracy * 0.01 * factor * factor) + (factor * statis._avg.hitFactor);

	const previousRating = await prisma.rating.findFirst({
		where: {
			shooterId: shooterId,
		},
		orderBy: {
			createAt: "desc",
		},
	});
	const timeDelta = moment(moment.now()).diff(moment(previousRating?.createAt), "minutes");
	const ratingDelta = Math.abs(rating - (previousRating?.rating ?? 0));
	console.log(`timeDelta: ${timeDelta}, scoreDelta: ${ratingDelta}, rating: ${rating}, factor: ${factor}`);
	if (ratingDelta <= parseInt(process.env.RERANKING_RATING_DELTA_THREADHOLD ?? "1") && timeDelta <= parseInt(process.env.RERANKING_TIME_DELTA_THREADHOLD ?? "10")) 
		return;
	console.log(`Update rating for shooterId: ${shooterId}`);
	await prisma.rating.create({
		data: {
			rating: rating,
			shooter: {
				connect: {
					id: shooterId,
				},
			},
		},
	});
	
});