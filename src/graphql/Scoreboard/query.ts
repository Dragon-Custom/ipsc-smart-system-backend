import { extendType, nonNull } from "nexus";

export const ScoreboardQuery = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("scoreboards", {
			type: "Scoreboard",
			resolve(src, args, ctx)  {
				return ctx.prisma.scoreboard.findMany({
					...ctx.select,
				});
			},
		});
		t.nullable.field("scoreboard", {
			type: "Scoreboard",
			args: {
				id: nonNull("Int"),
			},
			resolve(src, args, ctx)  {
				return ctx.prisma.scoreboard.findUnique({
					where: {
						id: args.id,
					},
					...ctx.select,
				});
			},
		});
	},
});