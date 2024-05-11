import { extendType, nonNull } from "nexus";

export const ScorelistQuery = extendType({
	type: "Query",
	definition(t) {
		t.list.field("scorelists", {
			type: "Scorelist",
			resolve(src, args, ctx) {
				return ctx.prisma.scorelist.findMany({
					...ctx.select,
				});
			},
		});
		t.field("scorelist", {
			type: "Scorelist",
			args: {
				id: nonNull("Int"),
			},
			resolve(src, args, ctx) {
				return ctx.prisma.scorelist.findUnique({
					where: { id: args.id },
					...ctx.select,
				});
			},
		});
	},
});