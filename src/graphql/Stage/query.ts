import { extendType, inputObjectType, nonNull } from "nexus";

export const StageFilterInputType = inputObjectType({
	name: "StageFilterInput",
	definition(t) {
		t.nullable.list.int("id");
		t.nullable.list.field("stageType", {
			type: "StageType",
		});
		t.nullable.list.field("tagsName", {
			type: "String",
		});
	},
});

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
		t.nonNull.list.field("stages", {
			type: "Stage",
			args: {
				filter: "StageFilterInput",
			},
			resolve(src, args, ctx) {
				return ctx.prisma.stage.findMany({
					...ctx.select,
				});
			},
		});
	},
});