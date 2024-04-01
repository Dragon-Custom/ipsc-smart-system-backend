import { mutationField, nonNull } from "nexus";

export const ScorelistDeleteOneMutation = mutationField("deleteOneScorelist", {
	type: "Scorelist",
	args: {
		where: nonNull("ScorelistWhereUniqueInput"),
	},
	resolve: async (_parent, { where }, { prisma, select }) => {
		return prisma.scorelist.delete({
			where,
			...select,
		});
	},
});
