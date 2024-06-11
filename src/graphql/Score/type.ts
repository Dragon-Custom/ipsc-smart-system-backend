import { enumType, objectType } from "nexus";

export const ScoreStateEnum = enumType({
	name: "ScoreState",
	members: ["DidNotScore", "DidNotFinish", "DQ", "Scored"],
});

export const ScoreObject = objectType({
	name: "Score",
	definition(t) {
		t.implements("Node");
		t.dateTime("createAt");
		t.nullable.field("shooter", {
			type: "Shooter",
		});
		t.int("shooterId");
		t.int("alphas");
		t.int("charlies");
		t.int("deltas");
		t.int("misses");
		t.int("noshoots");
		t.int("poppers");
		t.float("time");
		t.nullable.list.field("proErrors", {
			type: "ProErrorStore",
		});
		t.int("proErrorCount");
		t.nullable.field("scorelist", {
			type: "Scorelist",
		});
		t.int("scorelistId");
		t.int("score");
		t.float("hitFactor");
		t.nullable.field("dqReason", {
			type: "DqObject",
		});
		t.nullable.int("dqObjectId");
		t.int("round");
		t.float("accuracy");
		t.field("state", {
			type: "ScoreState",
		});

		t.nullable.float("roundPercentage", {
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
		t.nullable.float("overallPercentage", {
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