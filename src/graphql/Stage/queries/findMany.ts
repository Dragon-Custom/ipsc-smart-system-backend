import { queryField, nonNull, list } from "nexus";

export const StageFindManyQuery = queryField("findManyStage", {
	type: nonNull(list(nonNull("Stage"))),
	args: {
		where: "StageWhereInput",
		orderBy: list("StageOrderByWithRelationInput"),
		cursor: "StageWhereUniqueInput",
		take: "Int",
		skip: "Int",
		distinct: list("StageScalarFieldEnum"),
	},
	resolve(_parent, args, { prisma, select }) {
		return prisma.stage.findMany({
			...args,
			...select,
		});
	},
});
