import { extendType } from "nexus";

export const ScoreExtend = extendType({
	type: "Score",
	definition(t) {
		t.float("roundPrecentage", {
			async resolve(src, arg, ctx) {
				const Highest = await ctx.prisma.score.findFirstOrThrow({
					orderBy: {
						hitFactor: "desc",
					},
					where: {
						round: src.round,
						scorelistId: src.scorelistId,
					},
					select: {
						hitFactor: true,
					},
				});
				const high = Highest.hitFactor;
				if (high.toNumber() == 0)
					return 0;
				return (1 - (Highest.hitFactor.abs().toNumber() - src.hitFactor) / Highest.hitFactor.abs().toNumber()) * 100;
			},
		});
		t.float("scorelistOverallPrecentage", {
			async resolve(src, arg, ctx) {
				const Highest = await ctx.prisma.score.findFirstOrThrow({
					orderBy: {
						hitFactor: "desc",
					},
					where: {
						scorelistId: src.scorelistId,
					},
					select: {
						hitFactor: true,
					},
				});
				const high = Highest.hitFactor;
				if (high.toNumber() == 0)
					return 0;
				return (1 - (Highest.hitFactor.toNumber() - src.hitFactor) / Highest.hitFactor.toNumber()) * 100;
			},
		});
	},
});