import { queryField, list } from "nexus";

export const StageAggregateQuery = queryField("aggregateStage", {
	type: "AggregateStage",
	args: {
		where: "StageWhereInput",
		orderBy: list("StageOrderByWithRelationInput"),
		cursor: "StageWhereUniqueInput",
		take: "Int",
		skip: "Int",
	},
	resolve(_parent, args, { prisma, select }) {
		return prisma.stage.aggregate({ ...args, ...select }) as any;
	},
});
