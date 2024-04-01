import { queryField, nonNull, list } from "nexus";

export const ScoreFindManyQuery = queryField("findManyScore", {
	type: nonNull(list(nonNull("Score"))),
	args: {
		where: "ScoreWhereInput",
		orderBy: list("ScoreOrderByWithRelationInput"),
		cursor: "ScoreWhereUniqueInput",
		take: "Int",
		skip: "Int",
		distinct: list("ScoreScalarFieldEnum"),
	},
	resolve(_parent, args, { prisma, select }) {
		return prisma.score.findMany({
			...args,
			...select,
		});
	},
});
