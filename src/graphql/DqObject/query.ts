import { Prisma } from "@prisma/client";
import { extendType, inputObjectType, nonNull } from "nexus";
import { LogLevel } from "../../context";

const LOG_CAT = "Dq Object";

export const DqObjectsFilterInput = inputObjectType({
	name: "DqObjectsFilterInput",
	definition(t) {
		t.nullable.list.int("id");
		t.nullable.list.string("index");
		t.nullable.list.string("category");
	},
});

export const DQObjectQuery = extendType({
	type: "Query",
	definition(t) {
		t.nullable.field("dqObject", {
			type: "DqObject",
			args: {
				id: nonNull("Int"),
			},
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Querying dqObject with id ${args.id}` ,LOG_CAT);
				const result = await ctx.prisma.dqObject.findUnique({
					where: {
						id: args.id,
					},
					...ctx.select,
				});
				ctx.log(LogLevel.TRACE, `Result: ${JSON.stringify(result)}`, LOG_CAT);
				return result;
			},
		});
		t.list.field("dqObjects", {
			type: "DqObject",
			args: {
				filter: "DqObjectsFilterInput",
			},
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Querying dqObjects with filter ${JSON.stringify(args.filter)}` ,LOG_CAT);
				let where: Prisma.DqObjectWhereInput = {}; 
				if (args.filter?.category) {
					where = {
						...where,
						category: {
							in: args.filter.category as string[],
						},
					};
				}
				if (args.filter?.id) {
					where = {
						...where,
						id: {
							in: args.filter.id as number[],
						},
					};
				}
				if (args.filter?.index) {
					where = {
						...where,
						index: {
							in: args.filter.index as string[],
						},
					};
				}
				const result = await ctx.prisma.dqObject.findMany({
					where: {
						...where,
					},
					...ctx.select,
				});
				ctx.log(LogLevel.TRACE, `Result: ${JSON.stringify(result)}`, LOG_CAT);
				return result;
			},
		});
	},
});