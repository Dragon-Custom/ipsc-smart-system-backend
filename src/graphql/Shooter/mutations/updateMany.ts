import { mutationField, nonNull } from "nexus";

export const ShooterUpdateManyMutation = mutationField("updateManyShooter", {
	type: nonNull("BatchPayload"),
	args: {
		data: nonNull("ShooterUpdateManyMutationInput"),
		where: "ShooterWhereInput",
	},
	resolve(_parent, args, { prisma }) {
		return prisma.shooter.updateMany(args as any);
	},
});
