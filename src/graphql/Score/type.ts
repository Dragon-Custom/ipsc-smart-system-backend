import { extendType } from "nexus";

export const ScoreExtend = extendType({
	type: "Score",
	definition(t) {
		t.float("precentage", {
			async resolve(src, arg, ctx) {
				const Highest = await ctx.prisma.score.findFirstOrThrow({
					orderBy: {
						hitFactor: "desc",
					},
					select: {
						hitFactor: true,
					},
				});
				console.log(Highest.hitFactor);
				return (1 - (Highest.hitFactor.toNumber() - src.hitFactor) / Highest.hitFactor.toNumber()) * 100;
			},
		});
	},
});