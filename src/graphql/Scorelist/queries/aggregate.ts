import { queryField, list } from "nexus";

export const ScorelistAggregateQuery = queryField("aggregateScorelist", {
	type: "AggregateScorelist",
	args: {
		where: "ScorelistWhereInput",
		orderBy: list("ScorelistOrderByWithRelationInput"),
		cursor: "ScorelistWhereUniqueInput",
		take: "Int",
		skip: "Int",
	},
	resolve(_parent, args, { prisma, select }) {
		return prisma.scorelist.aggregate({ ...args, ...select }) as any;
	},
});
