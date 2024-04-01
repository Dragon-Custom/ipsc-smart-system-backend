import { mutationField, nonNull } from "nexus";

export const ScoreDeleteOneMutation = mutationField("deleteOneScore", {
	type: "Score",
	args: {
		where: nonNull("ScoreWhereUniqueInput"),
	},
	resolve: async (_parent, { where }, { prisma, select }) => {
		return prisma.score.delete({
			where,
			...select,
		});
	},
});
