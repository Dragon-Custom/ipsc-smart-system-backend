import { queryField, list } from "nexus";

export const ProErrorObjectsAggregateQuery = queryField(
	"aggregateProErrorObjects",
	{
		type: "AggregateProErrorObjects",
		args: {
			where: "ProErrorObjectsWhereInput",
			orderBy: list("ProErrorObjectsOrderByWithRelationInput"),
			cursor: "ProErrorObjectsWhereUniqueInput",
			take: "Int",
			skip: "Int",
		},
		resolve(_parent, args, { prisma, select }) {
			return prisma.proErrorObjects.aggregate({ ...args, ...select }) as any;
		},
	},
);
