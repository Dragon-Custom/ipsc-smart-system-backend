import { mutationField, nonNull } from "nexus";

export const ScoreUpdateManyMutation = mutationField("updateManyScore", {
	type: nonNull("BatchPayload"),
	args: {
		data: nonNull("ScoreUpdateManyMutationInput"),
		where: "ScoreWhereInput",
	},
	resolve(_parent, args, { prisma }) {
		return prisma.score.updateMany(args as any);
	},
});
