import { extendType, nonNull } from "nexus";

export const StageQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("stage", {
			type: "Stage",
			args: {
				id: nonNull("Int"),
			},
			resolve(src, args, ctx) {
				return ctx.prisma.stage.findUnique({
					where: {
						id: args.id,
					},
					...ctx.select,
				});
			},
		});
	},
});