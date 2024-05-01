import { extendType, nonNull } from "nexus";

export const ScoreQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("score", {
			type: "Score",
			args: {
				id: nonNull("Int"),
			},
			resolve: (src, args, ctx) => {
				return ctx.prisma.score.findUnique({
					where: {
						id: args.id,
					},
					...ctx.select,
				});
			},
		});
	},
});