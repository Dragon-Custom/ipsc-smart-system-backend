import { extendType, nonNull } from "nexus";
import { LogLevel } from "../../context";

const LOG_CAT = "Scoreboard";

export const ScoreboardQuery = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("scoreboards", {
			type: "Scoreboard",
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, "Qureying scoreboards", LOG_CAT);
				const scoreboards = await ctx.prisma.scoreboard.findMany({
					...ctx.select,
				});
				ctx.log(LogLevel.TRACE, `Result: ${JSON.stringify(scoreboards)}`, LOG_CAT);
				return scoreboards;
			},
		});
		t.nullable.field("scoreboard", {
			type: "Scoreboard",
			args: {
				id: nonNull("Int"),
			},
			async resolve(src, args, ctx)  {
				ctx.log(LogLevel.INFO, `Qureying scoreboard by id ${args.id}`, LOG_CAT);
				const scoreboard = await ctx.prisma.scoreboard.findUnique({
					where: {
						id: args.id,
					},
					...ctx.select,
				});
				ctx.log(LogLevel.TRACE, `Result: ${JSON.stringify(scoreboard)}`, LOG_CAT);
				return scoreboard;
			},
		});
	},
});