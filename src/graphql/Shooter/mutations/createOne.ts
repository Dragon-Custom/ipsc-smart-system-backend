import { mutationField, nonNull } from "nexus";

export const ShooterCreateOneMutation = mutationField("createOneShooter", {
	type: nonNull("Shooter"),
	args: {
		data: nonNull("ShooterCreateInput"),
	},
	resolve(_parent, { data }, { prisma, select }) {
		return prisma.shooter.create({
			data,
			...select,
		});
	},
});
