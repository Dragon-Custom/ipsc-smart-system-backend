import { mutationField, nonNull } from "nexus";

export const ShooterDeleteManyMutation = mutationField("deleteManyShooter", {
	type: nonNull("BatchPayload"),
	args: {
		where: "ShooterWhereInput",
	},
	resolve: async (_parent, { where }, { prisma }) => {
		return prisma.shooter.deleteMany({ where } as any);
	},
});
