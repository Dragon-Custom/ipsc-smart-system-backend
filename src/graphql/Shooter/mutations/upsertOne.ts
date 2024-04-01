import { mutationField, nonNull } from "nexus";

export const ShooterUpsertOneMutation = mutationField("upsertOneShooter", {
	type: nonNull("Shooter"),
	args: {
		where: nonNull("ShooterWhereUniqueInput"),
		create: nonNull("ShooterCreateInput"),
		update: nonNull("ShooterUpdateInput"),
	},
	resolve(_parent, args, { prisma, select }) {
		return prisma.shooter.upsert({
			...args,
			...select,
		});
	},
});
