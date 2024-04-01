import { mutationField, nonNull } from "nexus";

export const ScorelistUpdateOneMutation = mutationField("updateOneScorelist", {
	type: nonNull("Scorelist"),
	args: {
		data: nonNull("ScorelistUpdateInput"),
		where: nonNull("ScorelistWhereUniqueInput"),
	},
	resolve(_parent, { data, where }, { prisma, select }) {
		return prisma.scorelist.update({
			where,
			data,
			...select,
		});
	},
});
