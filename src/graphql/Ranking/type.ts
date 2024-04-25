import { extendType, intArg, nonNull } from "nexus";

export const RankingQuery = extendType({
	type: "Query",
	definition(t) {
		t.int("getUniqueShooterRanking", {
			args: {
				shooterId: nonNull(intArg()),
			},
			async resolve(src, args, ctx) {
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
				return parseInt(shooter.rank as unknown as string);
			},
		});
	},
});