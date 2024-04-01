import { queryField, list } from "nexus";

export const StageFindFirstQuery = queryField("findFirstStage", {
	type: "Stage",
	args: {
		where: "StageWhereInput",
		orderBy: list("StageOrderByWithRelationInput"),
		cursor: "StageWhereUniqueInput",
		take: "Int",
		skip: "Int",
		distinct: list("StageScalarFieldEnum"),
	},
	resolve(_parent, args, { prisma, select }) {
		return prisma.stage.findFirst({
			...args,
			...select,
		});
	},
});
