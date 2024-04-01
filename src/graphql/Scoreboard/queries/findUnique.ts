import { queryField, nonNull } from "nexus";

export const ScoreboardFindUniqueQuery = queryField("findUniqueScoreboard", {
	type: "Scoreboard",
	args: {
		where: nonNull("ScoreboardWhereUniqueInput"),
	},
	resolve(_parent, { where }, { prisma, select }) {
		return prisma.scoreboard.findUnique({
			where,
			...select,
		});
	},
});
