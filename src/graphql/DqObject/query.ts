import { Prisma } from "@prisma/client";
import { extendType, inputObjectType, nonNull } from "nexus";

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
			resolve(src, args, ctx) {
				return ctx.prisma.dqObject.findUnique({
					where: {
						id: args.id,
					},
				});
			},
		});
		t.list.field("dqObjects", {
			type: "DqObject",
			args: {
				filter: "DqObjectsFilterInput",
			},
			resolve(src, args, ctx) {
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
				return ctx.prisma.dqObject.findMany({
					where: {
						...where,
					},
				});
			},
		});
	},
});