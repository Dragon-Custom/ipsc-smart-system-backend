import { enumType, objectType } from "nexus";

export const ScoreStateEnum = enumType({
	name: "ScoreState",
	members: ["DidNotScore", "DidNotFinish", "DQ", "Scored"],
});

export const ScoreObject = objectType({
	name: "Score",
	definition(t) {
		t.implements("Node");
		t.nonNull.dateTime("createAt");
		t.nonNull.field("shooter", {
			type: "Shooter",
		});
		t.nonNull.int("shooterId");
		t.nonNull.int("alphas");
		t.nonNull.int("charlies");
		t.nonNull.int("deltas");
		t.nonNull.int("misses");
		t.nonNull.int("noshoots");
		t.nonNull.int("poppers");
		t.nonNull.float("time");
		t.nullable.list.field("proErrors", {
			type: "ProErrorStore",
		});
		t.nonNull.int("proErrorCount");
		t.nonNull.field("scorelist", {
			type: "Scorelist",
		});
		t.nonNull.int("scorelistId");
		t.nonNull.int("score");
		t.nonNull.float("hitFactor");
		t.nullable.field("dqReason", {
			type: "DqObject",
		});
		t.nullable.int("dqObjectId");
		t.nonNull.int("round");
		t.nonNull.float("accuracy");
		t.nonNull.field("state", {
			type: "ScoreState",
		});

		t.nonNull.float("roundPercentage", {
			async resolve(src, args, ctx) {
				const score  = (await ctx.prisma.score.findUnique({
					where: {
						id: src.id,
					},
					select: {
						round: true,
						scorelistId: true,
						hitFactor: true,
					},
				}));
				if (!score)
					return 0;
				const maxScore = await ctx.prisma.score.findFirst({
					where: {
						round: score.round,
						scorelistId: score.scorelistId,
					},
					orderBy: {
						hitFactor: "desc",
					},
					select: {
						hitFactor: true,
					},
				});
				if (!maxScore)
					return 0;
				const percentage = (score.hitFactor / maxScore.hitFactor) * 100;
				if (isNaN(percentage) ||  !isFinite(percentage))
					return 0;
				return percentage;
			},
		});
		t.nonNull.float("overallPercentage", {
			async resolve(src, args, ctx) {
				const score  = (await ctx.prisma.score.findUnique({
					where: {
						id: src.id,
					},
					select: {
						scorelistId: true,
						hitFactor: true,
					},
				}));
				if (!score)
					return 0;
				const maxScore = await ctx.prisma.score.findFirst({
					where: {
						scorelistId: score.scorelistId,
					},
					orderBy: {
						hitFactor: "desc",
					},
					select: {
						hitFactor: true,
					},
				});
				if (!maxScore)
					return 0;
				const percentage = (score.hitFactor / maxScore.hitFactor) * 100;
				if (isNaN(percentage) ||  !isFinite(percentage))
					return 0;
				return percentage;
			},
		});
	},
});