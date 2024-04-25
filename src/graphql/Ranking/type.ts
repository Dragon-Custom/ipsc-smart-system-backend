import moment from "moment";
import { extendType, intArg, nonNull } from "nexus";

export const RankingQuery = extendType({
	type: "Query",
	definition(t) {
		t.int("getUniqueShooterRanking", {
			args: {
				shooterId: nonNull(intArg()),
			},
			async resolve(src, args, ctx) {
				const cachedRanking = await ctx.prisma.ranking.findFirst({
					where: {
						shooterId: args.shooterId,
					},
					orderBy: {
						updatedAt: "desc",
					},
				});
				const currentMoment = moment(moment.now());
				const updatetMoment = moment(new Date(cachedRanking?.updatedAt ?? Date.now()));
				console.log(`Diff: ${currentMoment.diff(updatetMoment)} vs ${parseFloat(process.env.RERANKING_THREADHOLD ?? "1")* 60 * 1000}`);
				if (currentMoment.diff(updatetMoment) > parseFloat(process.env.RERANKING_THREADHOLD ?? "1") * 60 * 1000 || currentMoment.diff(updatetMoment) == 0) {
					console.log("Revailid");
					const result: { shooterId: number, rank: bigint }[] = await ctx.prisma.$queryRaw`
						SELECT
							"shooterId",
							RANK () OVER (ORDER BY SUM("hitFactor") DESC) AS RANK
						FROM "Score"
						GROUP BY "shooterId";
					`;
					const shooter = result.find(v => v.shooterId == args.shooterId);
					if (!shooter)
						return -1;
					const ranking = parseInt(shooter.rank as unknown as string);
					await ctx.prisma.ranking.create({
						data: {
							rank: ranking,
							shooter: {
								connect: {
									id: args.shooterId,
								},
							},
						},
					});
					return ranking;
				} else {
					return cachedRanking?.rank ?? 0;
				}
			},
		});
	},
});