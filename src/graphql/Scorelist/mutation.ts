import { extendType, inputObjectType, nonNull } from "nexus";

export const CreateScorelistInputType = inputObjectType({
	name: "CreateScorelistInput",
	definition(t) {
		t.nonNull.int("scoreboardId");
		t.nonNull.int("stageId");
	},
});

export const ScorelistMutation = extendType({
	type: "Mutation",
	definition(t) {
		t.field("createScorelist", {
			type: "Scorelist",
			args: {
				scorelist: nonNull("CreateScorelistInput"),
			},
			resolve: (src, args, ctx) => {
				return ctx.prisma.scorelist.create({
					data: {
						scoreboard: {
							connect: {
								id: args.scorelist.scoreboardId,
							},
						},
						stage: {
							connect: {
								id: args.scorelist.stageId,
							},
						},
					},
					...ctx.select,
				});
			},
		});
		t.field("deleteScorelist", {
			type: "Scorelist",
			args: {
				id: nonNull("Int"),
			},
			resolve: (src, args, ctx) => {
				return ctx.prisma.scorelist.delete({
					where: {
						id: args.id,
					},
					...ctx.select,
				});
			},
		});
	},
});