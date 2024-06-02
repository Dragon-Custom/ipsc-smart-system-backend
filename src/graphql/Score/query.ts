import { extendType, nonNull } from "nexus";
import { LogLevel } from "../../context";

const LOG_CAT = "Score";

export const ScoreQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("score", {
			type: "Score",
			args: {
				id: nonNull("Int"),
			},
			async resolve(src, args, ctx)  {
				ctx.log(LogLevel.INFO, `Qureying score with id ${args.id}`, LOG_CAT);
				const result = await ctx.prisma.score.findUnique({
					where: {
						id: args.id,
					},
					...ctx.select,
				});
				ctx.log(LogLevel.TRACE, `Result: ${JSON.stringify(result)}`, LOG_CAT);
				return result;
			},
		});
	},
});