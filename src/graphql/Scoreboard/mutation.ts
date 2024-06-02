import { extendType, nonNull } from "nexus";
import { LogLevel } from "../../context";

const LOG_CAT = "Scoreboard";

export const ScoreboardMutation = extendType({
	type: "Mutation",
	definition(t) {
		t.field("createScoreboard", {
			type: "Scoreboard",
			args: {
				name: nonNull("String"),
			},
			resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Creating scoreboard with name ${args.name}`, LOG_CAT);
				return ctx.prisma.scoreboard.create({
					data: {
						name: args.name,
					},
					...ctx.select,
				});
			},
		});
		t.field("updateScoreboard", {
			type: "Scoreboard",
			args: {
				id: nonNull("Int"),
				name: nonNull("String"),
			},
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Updating scoreboard with id ${args.id} and name ${args.name}`, LOG_CAT);
				try {
					return await ctx.prisma.scoreboard.update({
						where: {
							id: args.id,
						},
						data: {
							name: args.name,
						},
						...ctx.select,
					});
				} catch (error) {
					ctx.log(LogLevel.ERROR, `Error while updating scoreboard: ${error}`, LOG_CAT);
					return null;
				}
			},
		});
		t.field("deleteScoreboard", {
			type: "Scoreboard",
			args: {
				id: nonNull("Int"),
			},
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Deleting scoreboard with id ${args.id}`, LOG_CAT);
				try {
					return await ctx.prisma.scoreboard.delete({
						where: {
							id: args.id,
						},
						...ctx.select,
					});
				} catch (error) {
					ctx.log(LogLevel.ERROR, `Error while deleting scoreboard: ${error}`, LOG_CAT);
					return null;
				}
			},
		});
	},
});