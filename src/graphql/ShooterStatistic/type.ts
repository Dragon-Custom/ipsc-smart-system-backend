import { objectType } from "nexus";

export const ShooterStatistic = objectType({
	name: "ShooterStatistic",
	nonNullDefaults: {
		input: true,
		output: true,
	},
	definition(t) {
		t.int("shooterId");
		t.float("averageHitFactor", {
			async resolve(src, args, ctx) {
				return (await ctx.prisma.score.aggregate({
					_avg: {
						hitFactor: true,
					},
					where: {
						shooterId: src.shooterId,
					},
				}))._avg.hitFactor || 0;
			},
		});
		t.float("averageAccuracy", {
			async resolve(src, args, ctx) {
				return ( await ctx.prisma.score.aggregate({
					_avg: {
						accuracy: true,
					},
					where: {
						shooterId: src.shooterId,
					},
				}))._avg.accuracy || 0;
			},
		});
		t.float("runCount", {
			async resolve(src, args, ctx) {
				return await ctx.prisma.score.count({
					where: {
						shooterId: src.shooterId,
					},
				});
			},
		});
		t.float("finishedCount", {
			async resolve(src, args, ctx) {
				return await ctx.prisma.score.count({
					where: {
						state: "Scored",
						shooterId: src.shooterId,
					},
				});
			},
		});
		t.float("proErrorCount", {
			async resolve(src, args, ctx) {
				return(await ctx.prisma.score.aggregate({
					_sum: {
						proErrorCount: true,
					},
					where: {
						shooterId: src.shooterId,
					},
				}))._sum.proErrorCount || 0;
			},
		});
		t.float("dnfCount", {
			async resolve(src, args, ctx) {
				return await ctx.prisma.score.count({
					where: {
						state: "DidNotFinish",
						shooterId: src.shooterId,
					},
				});
			},
		});
		t.float("dqCount", {
			async resolve(src, args, ctx) {
				return await ctx.prisma.score.count({
					where: {
						state: "DQ",
						shooterId: src.shooterId,
					},
				});
			},
		});
		t.float("highestHitFactor", {
			async resolve(src, args, ctx) {
				return(await ctx.prisma.score.aggregate({
					_max: {
						hitFactor: true,
					},
					where: {
						shooterId: src.shooterId,
					},
				}))._max.hitFactor || 0;
			},
		});
		t.float("highestAccuracy", {
			async resolve(src, args, ctx) {
				return(await ctx.prisma.score.aggregate({
					_max: {
						accuracy: true,
					},
					where: {
						shooterId: src.shooterId,
					},
				}))._max.accuracy || 0;
			},
		});
		t.float("alphaCount", {
			async resolve(src, args, ctx) {
				return (await ctx.prisma.score.aggregate({
					_sum: {
						alphas: true,
					},
					where: {
						shooterId: src.shooterId,
					},
				}))._sum.alphas || 0;
			},
		});
		t.float("charlieCount", {
			async resolve(src, args, ctx) {
				return (await ctx.prisma.score.aggregate({
					_sum: {
						charlies: true,
					},
					where: {
						shooterId: src.shooterId,
					},
				}))._sum.charlies || 0;
			},
		});
		t.float("deltaCount", {
			async resolve(src, args, ctx) {
				return (await ctx.prisma.score.aggregate({
					_sum: {
						deltas: true,
					},
					where: {
						shooterId: src.shooterId,
					},
				}))._sum.deltas || 0;
			},
		});
		t.float("missCount", {
			async resolve(src, args, ctx) {
				return (await ctx.prisma.score.aggregate({
					_sum: {
						misses: true,
					},
					where: {
						shooterId: src.shooterId,
					},
				}))._sum.misses || 0;
			},
		});
		t.float("noShootCount", {
			async resolve(src, args, ctx) {
				return (await ctx.prisma.score.aggregate({
					_sum: {
						noshoots: true,
					},
					where: {
						shooterId: src.shooterId,
					},
				}))._sum.noshoots || 0;
			},
		});
	},
});