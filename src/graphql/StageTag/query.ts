import { Prisma } from "@prisma/client";
import { extendType, inputObjectType, nonNull } from "nexus";

export const StageTagsFilterInput = inputObjectType({
	name: "StageTagsFilterInput",
	definition(t) {
		t.nullable.list.int("id");
	},
});

export const StageTagQuery = extendType({
	type: "Query",
	definition(t) {
		t.list.field("stageTags", {
			type: "StageTag",
			args: {
				filter: "StageTagsFilterInput",
			},
			resolve(src, args, ctx) {
				let where: Prisma.StageTagWhereInput = {}; 
				if (args.filter?.id) {
					where = {
						...where,
						id: {
							in: args.filter.id as number[],
						},
					};
				}
				return ctx.prisma.stageTag.findMany({
					where,
					...ctx.select,
				});
			},
		});
		t.field("stageTag", {
			type: "StageTag",
			args: {
				id: nonNull("Int"),
			},
			resolve(src, args, ctx) {
				return ctx.prisma.stageTag.findUnique({
					where: {
						id: args.id,
					},
					...ctx.select,
				});
			},
		});
	},
}); 