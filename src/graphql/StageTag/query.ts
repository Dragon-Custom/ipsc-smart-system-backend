import { Prisma } from "@prisma/client";
import { extendType, inputObjectType, nonNull } from "nexus";
import { LogLevel } from "../../context";

const LOG_CAT = "Stage Tag";

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
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Querying stage tags with filter ${JSON.stringify(args.filter)}`, LOG_CAT);
				let where: Prisma.StageTagWhereInput = {}; 
				if (args.filter?.id) {
					where = {
						...where,
						id: {
							in: args.filter.id as number[],
						},
					};
				}
				const result = await ctx.prisma.stageTag.findMany({
					where,
					...ctx.select,
				});
				ctx.log(LogLevel.TRACE, `Result: ${JSON.stringify(result)}`, LOG_CAT);
				return result;
			},
		});
		t.field("stageTag", {
			type: "StageTag",
			args: {
				id: nonNull("Int"),
			},
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Querying stage tag with id ${args.id}`, LOG_CAT);
				const result = await ctx.prisma.stageTag.findUnique({
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