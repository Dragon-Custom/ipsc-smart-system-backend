import { extendType, nonNull } from "nexus";
import { LogLevel } from "../../context";

const LOG_CAT = "Scorelist";

export const ScorelistQuery = extendType({
	type: "Query",
	definition(t) {
		t.list.field("scorelists", {
			type: "Scorelist",
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, "Qureying scorelists", LOG_CAT);
				const result = await ctx.prisma.scorelist.findMany({
					...ctx.select,
				});
				ctx.log(LogLevel.TRACE, `Result: ${JSON.stringify(result)}`, LOG_CAT);
				return result;
			},
		});
		t.field("scorelist", {
			type: "Scorelist",
			args: {
				id: nonNull("Int"),
			},
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Qureying scorelist with id ${args.id}`, LOG_CAT);
				const result = await ctx.prisma.scorelist.findUnique({
					where: { id: args.id },
					...ctx.select,
				});
				ctx.log(LogLevel.TRACE, `Result: ${JSON.stringify(result)}`, LOG_CAT);
				return result;
			},
		});
	},
});