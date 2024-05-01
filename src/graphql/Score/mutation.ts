import { Prisma, ScoreState } from "@prisma/client";
import { extendType, inputObjectType, nonNull } from "nexus";

export const UpdateScoreProErrorInputType = inputObjectType({
	name: "UpdateScoreProErrorInput",
	definition(t) {
		t.nonNull.int("proErrorId");
		t.nonNull.int("count");
	},
});
export const UpdateScoreInputType = inputObjectType({
	name: "UpdateScoreInput",
	definition(t) {
		t.int("alphas");
		t.int("charlies");
		t.int("deltas");
		t.int("misses");
		t.int("noshoots");
		t.int("poppers");
		t.float("time");
		t.int("round");
		t.list.nonNull.field("proErrors", {
			type: "UpdateScoreProErrorInput",
			default: [],
		});
	},
});

export const ScoreMutation = extendType({
	type: "Mutation",
	definition(t) {
		t.field("createEmptyScore", {
			type: "Score",
			args: {
				shooterId: nonNull("Int"),
				scorelistId: nonNull("Int"),
				round: nonNull("Int"),
			},
			resolve(src, args, ctx) {
				return ctx.prisma.score.create({
					data: {
						shooter: {
							connect: {
								id: args.shooterId,
							},
						},
						scorelist: {
							connect: {
								id: args.scorelistId,
							},
						},
						round: args.round,
					},
					...ctx.select,
				});
			},
		});
		t.nullable.field("updateScore", {
			type: "Score",
			args: {
				id: nonNull("Int"),
				score: "UpdateScoreInput",
			},
			async resolve(src, args, ctx) {
				const data: Prisma.ScoreUpdateArgs["data"] = {};
				if (args.score?.alphas) data.alphas = args.score.alphas;
				if (args.score?.charlies) data.charlies = args.score.charlies;
				if (args.score?.deltas) data.deltas = args.score.deltas;
				if (args.score?.misses) data.misses = args.score.misses;
				if (args.score?.noshoots) data.noshoots = args.score.noshoots;
				if (args.score?.poppers) data.poppers = args.score.poppers;
				if (args.score?.time) data.time = args.score.time;
				if (args.score?.round) data.round = args.score.round;
				if (args.score?.proErrors) {
					data.proErrors = {
						deleteMany: {
							scoreId: args.id,
						},
						createMany: {
							data: args.score.proErrors?.map((proError) => ({
								proErrorObjectId: proError.proErrorId,
								count: proError.count,
							})),
						},
					};
					let proErrorCount = 0;
					for (const proError of args.score.proErrors) {
						proErrorCount += proError.count;
					}
					data.proErrorCount = proErrorCount;
				}
				data.state = "Scored";

				const maxScore = await ctx.prisma.score.findUnique({
					where: {
						id: args.id,
					},
					select: {
						scorelist: {
							include: {
								stage: true,
							},
						},
					},
				}); 
				if (!maxScore)
					return null;
				return await ctx.prisma.$transaction(async (prisma) => {
					const tempScore = await prisma.score.update({
						where: {
							id: args.id,
						},
						data,
					});
					return await prisma.score.update({
						where: {
							id: args.id,
						},
						data: { 
							accuracy: {
								set: (tempScore.score / maxScore.scorelist.stage.maxScore) * 100,
							},
						},
						...ctx.select,
					});
				});
			},
		});
		t.nullable.field("setScoreDNF", {
			type: "Score",
			args: {
				id: nonNull("Int"),
			},
			async resolve(src, args, ctx) {
				try {
					return await ctx.prisma.score.update({
						where: {
							id: args.id,
						},
						data: {
							state: {
								set: ScoreState.DidNotFinish,
							},
						},
						...ctx.select,
					});
				} catch (error) {
					console.log(error);
					return null;
				}
			},
		});
		t.nullable.field("setScoreDQ", {
			type: "Score",
			args: {
				id: nonNull("Int"),
				dqReasonId: nonNull("Int"),
			},
			async resolve(src, args, ctx) {
				try {
					return await ctx.prisma.score.update({
						where: {
							id: args.id,
						},
						data: {
							state: {
								set: ScoreState.DQ,
							},
							dqReason: {
								connect: {
									id: args.dqReasonId,
								},
							},
						},
						...ctx.select,
					});
				} catch (error) {
					console.log(error);
					return null;
				}
			},
		});
		t.nullable.field("deleteScore", {
			type: "Score",
			args: {
				id: nonNull("Int"),
			},
			async resolve(src, args, ctx) {
				try {
					return await ctx.prisma.score.delete({
						where: {
							id: args.id,
						},
						...ctx.select,
					});
				} catch (error) {
					console.log(error);
					return null;
				}
			},
		});
	},
});