import { queryField, nonNull, list } from "nexus";

export const StageFindCountQuery = queryField("findManyStageCount", {
	type: nonNull("Int"),
	args: {
		where: "StageWhereInput",
		orderBy: list("StageOrderByWithRelationInput"),
		cursor: "StageWhereUniqueInput",
		take: "Int",
		skip: "Int",
		distinct: list("StageScalarFieldEnum"),
	},
	resolve(_parent, args, { prisma }) {
		return prisma.stage.count(args as any);
	},
});
