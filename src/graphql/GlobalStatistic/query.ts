import { extendType, inputObjectType } from "nexus";
import { Prisma } from "@prisma/client";


export const GlobalSwatisticQueryFilterInputType = inputObjectType({
	name: "GlobalStatisticFilterInputType",
	definition(t) {
		t.list.int("scoreboardId");
		t.list.int("scorelistId");
		t.list.int("stageId");
	},
});

export const GlobalStatisticQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("globalStatistic", {
			type: "GlobalStatistic",
			args: {
				filter: GlobalStatisticQueryFilterInputType,
			},
			resolve: async (src, args, ctx) => {
				let searchQuery: Prisma.ScoreWhereInput = {};
				
				if (args.filter?.scoreboardId) {
					searchQuery = {
						...searchQuery,
						scorelist: {
							scoreboardId: {
								in: args.filter.scoreboardId as number[],
							},
						},
					};
				}
				if (args.filter?.scorelistId) {
					searchQuery = {
						...searchQuery,
						scorelistId: {
							in: args.filter.scorelistId as number[],
						},
					};
				}
				if (args.filter?.stageId) {
					searchQuery = {
						...searchQuery,
						scorelist: {
							stageId: {
								in: args.filter.stageId as number[],
							},
						},
					};
				}
				
				const scores = await ctx.prisma.score.findMany({
					where: searchQuery,
					include: {
						scorelist: true,
					},
				});

				const shooterUniqueId: number[] = [];
				scores.forEach((score) => {
					if (!shooterUniqueId.includes(score.shooterId)) {
						shooterUniqueId.push(score.shooterId);
					}
				});
				const shooterTotal = shooterUniqueId.length;

				const stageUniqueId: number[] = [];
				scores.forEach((score) => {
					if (!stageUniqueId.includes(score.scorelist.stageId)) {
						stageUniqueId.push(score.scorelist.stageId);
					}
				});
				const stageTotal = stageUniqueId.length;



				const agg = await ctx.prisma.score.aggregate({
					where: searchQuery,
					_avg: {
						hitFactor: true,
						accuracy: true,
					},
					_sum: {
						alphas: true,
						charlies: true,
						deltas: true,
						noshoots: true,
						misses: true,
						poppers: true,
						proErrorCount: true,
					},
				});


				return {
					shootersTotal: shooterTotal,
					runsTotal: scores.length,
					stagesTotal: stageTotal,
					finishedTotal: scores.filter((score) => score.state == "Scored").length,
					dqTotal: scores.filter((score) => score.state == "DQ").length,
					dnfTotal: scores.filter((score) => score.state == "DidNotFinish").length,	
					averageHitFactor: agg._avg.hitFactor,
					averageAccuracy: agg._avg.accuracy,
					alphaZoneTotal: agg._sum.alphas,
					charlieZoneTotal: agg._sum.charlies,
					deltaZoneTotal: agg._sum.deltas,
					noShootTotal: agg._sum.noshoots,
					missTotal: agg._sum.misses,
					popperTotal: agg._sum.poppers,
					proErrorTotal: agg._sum.proErrorCount,
				};
			},
		});
	},
});