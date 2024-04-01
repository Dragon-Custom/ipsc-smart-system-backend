import { mutationField, nonNull } from "nexus";

export const ScoreboardDeleteOneMutation = mutationField(
	"deleteOneScoreboard",
	{
		type: "Scoreboard",
		args: {
			where: nonNull("ScoreboardWhereUniqueInput"),
		},
		resolve: async (_parent, { where }, { prisma, select }) => {
			return prisma.scoreboard.delete({
				where,
				...select,
			});
		},
	},
);
