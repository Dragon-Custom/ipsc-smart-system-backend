import moment from "moment";
import { extendType, intArg, nonNull } from "nexus";

//R = (avg_acc) * (avg_hitfactor) + (sum_score / sum_time)
export const RatingQuery = extendType({
	type: "Query",
	definition(t) {
		t.float("getUniqueShooterRating", {
			args: {
				shooterId: nonNull(intArg()),
			},
			async resolve(src, args, ctx) {
				const cachedRating = await ctx.prisma.rating.findFirst({
					where: {
						shooterId: args.shooterId,
					},
					orderBy: {
						updatedAt: "desc",
					},
				});
				const currentMoment = moment(moment.now());
				const updatetMoment = moment(new Date(cachedRating?.updatedAt ?? Date.now()));
				console.log(`Diff: ${currentMoment.diff(updatetMoment)} vs ${parseFloat(process.env.RERANKING_THREADHOLD ?? "1")* 60 * 1000}`);
				if (currentMoment.diff(updatetMoment) > parseFloat(process.env.RERANKING_THREADHOLD ?? "1") * 60 * 1000  || currentMoment.diff(updatetMoment) == 0) {
					console.log("Revailid");
					const shooterInfo = await ctx.prisma.score.aggregate({
						where: {
							shooterId: args.shooterId,
						},
						_avg: {
							accuracy: true,
							hitFactor: true,
						},
						_sum: {
							score: true,
							time: true,
						},
					});
					let rating = ((shooterInfo._avg.accuracy ?? 0) * (shooterInfo._avg.hitFactor ?? 0) + ((shooterInfo._sum.score ?? 0) / (shooterInfo._sum.time ?? 0))) ?? 0;
					if (isNaN(rating))
						rating = 0;
					await ctx.prisma.rating.create({
						data: {
							rating: rating,
							shooter: {
								connect: {
									id: args.shooterId,
								},
							},
						},
					});
					return rating;
				} else {
					return cachedRating?.rating ?? 0;
				}
			},
		});
	},
});