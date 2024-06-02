import { extendType, inputObjectType, nonNull } from "nexus";
import { LogLevel } from "../../context";
const LOG_CAT = "Stage";

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
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Querying stage with id ${args.id}`, LOG_CAT);
				const result = await ctx.prisma.stage.findUnique({
					where: {
						id: args.id,
					},
					...ctx.select,
				});
				ctx.log(LogLevel.TRACE, `Result: ${JSON.stringify(result)}`, LOG_CAT);
				return result;
			},
		});
		t.nonNull.list.field("stages", {
			type: "Stage",
			args: {
				filter: "StageFilterInput",
			},
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Querying stages with filter ${JSON.stringify(args.filter)}`, LOG_CAT);
				const result = await ctx.prisma.stage.findMany({
					...ctx.select,
				});
				ctx.log(LogLevel.TRACE, `Result: ${JSON.stringify(result)}`, LOG_CAT);
				return result;
			},
		});
	},
});