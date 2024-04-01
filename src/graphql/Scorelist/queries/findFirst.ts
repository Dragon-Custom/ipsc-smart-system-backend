import { queryField, list } from "nexus";

export const ScorelistFindFirstQuery = queryField("findFirstScorelist", {
	type: "Scorelist",
	args: {
		where: "ScorelistWhereInput",
		orderBy: list("ScorelistOrderByWithRelationInput"),
		cursor: "ScorelistWhereUniqueInput",
		take: "Int",
		skip: "Int",
		distinct: list("ScorelistScalarFieldEnum"),
	},
	resolve(_parent, args, { prisma, select }) {
		return prisma.scorelist.findFirst({
			...args,
			...select,
		});
	},
});
