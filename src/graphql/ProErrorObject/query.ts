import { Prisma } from "@prisma/client";
import { extendType, inputObjectType, nonNull } from "nexus";
import { LogLevel } from "../../context";

const LOG_CAT = "Pro Error Object";

export const ProErrorObjectsFilterInputType = inputObjectType({
	name: "ProErrorObjectsFilterInput",
	definition(t) {
		t.nullable.list.int("id");
		t.nullable.list.string("index");
	},
});

export const ProErrorObjectQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("proErrorObject", {
			type: "ProErrorObject",
			args: {
				id: nonNull("Int"),
			},
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Qureying proErrorObject with id ${args.id}`, LOG_CAT);
				const result = await ctx.prisma.proErrorObject.findUnique({
					where: {
						id: args.id,
					},
					...ctx.select,
				});
				ctx.log(LogLevel.TRACE, `Result: ${JSON.stringify(result)}`, LOG_CAT);
				return result;
			},
		});
		t.list.field("proErrorObjects", {
			type: "ProErrorObject",
			args: {
				filter: "ProErrorObjectsFilterInput",
			},
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Qureying proErrorObjects with filter ${JSON.stringify(args.filter)}`, LOG_CAT);
				let where: Prisma.ProErrorObjectWhereInput = {}; 
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
				const result = await ctx.prisma.proErrorObject.findMany({
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