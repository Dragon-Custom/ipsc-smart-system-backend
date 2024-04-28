import { extendType, inputObjectType, nonNull } from "nexus";



export const CreateShooterShooterInputType = inputObjectType({
	name: "CreateShooterShooterInput",
	definition(t) {
		t.nonNull.string("name");
		t.nonNull.field("division", {
			type: "Division",
		});
		t.nonNull.string("email");
	},
});
export const UpdateShooterShooterInputType = inputObjectType({
	name: "UpdateShooterShooterInput",
	definition(t) {
		t.nullable.string("name");
		t.nullable.field("division", {
			type: "Division",
		});
		t.nullable.string("email");
	},
});

export const ShooterMuataion = extendType({
	type: "Mutation",
	definition(t) {
		t.nonNull.field("createShooter", {
			type: "Shooter",
			description: "create and return the new shooter",
			args: {
				shooter: nonNull("CreateShooterShooterInput"),
			},
			resolve(src, args, ctx) {
				return ctx.prisma.shooter.create({
					data: {
						division: args.shooter.division,
						email: args.shooter.email,
						name: args.shooter.name,
					},
				});
			},
		});
		t.nullable.field("updateShooter", {
			type: "Shooter",
			description: "update and return the new shooter, return null if unfound",
			args: {
				id: nonNull("Int"),
				shooter: "UpdateShooterShooterInput",
			},
			async resolve(src, args, ctx) {
				try {
					return ctx.prisma.shooter.update({
						where: {
							id: args.id,
						},
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						//@ts-expect-error
						data: {
							...args.shooter,
						},
					});
				} catch (e) {
					return null;
				}
			},
		});
		t.nonNull.boolean("deleteShooter", {
			description: "delete shooter, return true if success",
			args: {
				id: nonNull("Int"),
			},
			async resolve(src, args, ctx) {
				try {
					await ctx.prisma.shooter.delete({
						where: {
							id: args.id,
						},
					});
					return true;
				} catch (e) {
					return false;
				}
			},
		});
	},
});