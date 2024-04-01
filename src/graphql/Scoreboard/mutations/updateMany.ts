import { mutationField, nonNull } from "nexus";

export const ScoreboardUpdateManyMutation = mutationField(
	"updateManyScoreboard",
	{
		type: nonNull("BatchPayload"),
		args: {
			data: nonNull("ScoreboardUpdateManyMutationInput"),
			where: "ScoreboardWhereInput",
		},
		resolve(_parent, args, { prisma }) {
			return prisma.scoreboard.updateMany(args as any);
		},
	},
);
