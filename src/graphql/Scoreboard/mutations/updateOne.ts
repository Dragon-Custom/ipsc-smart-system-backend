import { mutationField, nonNull } from "nexus";

export const ScoreboardUpdateOneMutation = mutationField(
	"updateOneScoreboard",
	{
		type: nonNull("Scoreboard"),
		args: {
			data: nonNull("ScoreboardUpdateInput"),
			where: nonNull("ScoreboardWhereUniqueInput"),
		},
		resolve(_parent, { data, where }, { prisma, select }) {
			return prisma.scoreboard.update({
				where,
				data,
				...select,
			});
		},
	},
);
