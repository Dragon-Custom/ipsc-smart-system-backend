import { extendType, inputObjectType, nonNull } from "nexus";
import { LogLevel } from "../../context";

const LOG_CAT = "Scorelist";

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
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Creating scorelist with data: ${JSON.stringify(args.scorelist)}`, LOG_CAT);
				return await ctx.prisma.scorelist.create({
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
				ctx.log(LogLevel.INFO, `Deleting scorelist with id: ${args.id}`, LOG_CAT);
				return ctx.prisma.scorelist.delete({
					where: {
						id: args.id,
					},
					...ctx.select,
				});
			},
		});
		t.field("addRoundsToScorelist", {
			type: "Scorelist",
			args: {
				id: nonNull("Int"),
				rounds: "Int",
			},
			resolve: (src, args, ctx) => {
				ctx.log(LogLevel.INFO, `Adding ${args.rounds ?? 1} rounds to scorelist with id: ${args.id}`, LOG_CAT);
				return ctx.prisma.scorelist.update({
					where: {
						id: args.id,
					},
					data: {
						rounds: {
							increment: args.rounds ?? 1,
						},
					},
					...ctx.select,
				});
			},
		});
	},
});