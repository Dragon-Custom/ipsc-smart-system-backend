import { Prisma } from "@prisma/client";
import { extendType, inputObjectType, nonNull } from "nexus";


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
			resolve(src, args, ctx) {
				return ctx.prisma.proErrorObject.findUnique({
					where: {
						id: args.id,
					},
				});
			},
		});
		t.list.field("proErrorObjects", {
			type: "ProErrorObject",
			args: {
				filter: "ProErrorObjectsFilterInput",
			},
			resolve(src, args, ctx) {
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
				return ctx.prisma.proErrorObject.findMany({
					where: {
						...where,
					},
				});
			},
		});
	},
});