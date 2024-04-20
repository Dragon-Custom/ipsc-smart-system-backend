import { extendType, intArg, nonNull } from "nexus";

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

export const ScoreMutation = extendType({
	type: "Mutation",
	definition(t) {
		t.boolean("swapId", {
			args: {
				id1: nonNull(intArg()),
				id2: nonNull(intArg()),
			},
			async resolve(src, args, ctx) {
				const biggestId =  (await ctx.prisma.score.findFirstOrThrow({
					orderBy: {
						id: "desc",
					},
					select: {
						id: true,
					},
				})).id;
				await ctx.prisma.score.update({
					where: {
						id: args.id1,
					},
					data: {
						id: {
							set: biggestId + 1,
						},
					},
				});
				await ctx.prisma.score.update({
					where: {
						id: args.id2,
					},
					data: {
						id: {
							set: args.id1,
						},
					},
				});
				await ctx.prisma.score.update({
					where: {
						id: biggestId + 1,
					},
					data: {
						id: {
							set: args.id2,
						},
					},
				});
				return true;
			},
		});
	},
});