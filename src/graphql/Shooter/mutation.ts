import { extendType, inputObjectType, nonNull } from "nexus";
import { LogLevel } from "../../context";
import { Prisma } from "@prisma/client";

const LOG_CAT = "Shooter";

export const CreateShooterShooterInputType = inputObjectType({
	name: "CreateShooterShooterInput",
	definition(t) {
		t.nonNull.string("name");
		t.nonNull.field("division", {
			type: "Division",
		});
		t.nonNull.string("email");
		t.nullable.int("teamId");
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
		t.nullable.int("teamId");
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
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Creating shooter with data: ${JSON.stringify(args.shooter)}`, LOG_CAT);
				
				const connectToTeam: Prisma.TeamCreateNestedOneWithoutShootersInput | undefined = {};
				if (args.shooter.teamId) {
					connectToTeam.connect = {
						id: args.shooter.teamId,
					};
				}
				const result = await ctx.prisma.shooter.create({
					data: {
						division: args.shooter.division,
						email: args.shooter.email,
						name: args.shooter.name,
						team: connectToTeam,
					},
					...ctx.select,
				});
				const tick = (await ctx.prisma.elo.findFirst({
					orderBy: {
						tick: "desc",
					},
					select: {
						tick: true,
					},
				}))?.tick || 0;
				await ctx.prisma.elo.create({
					data: {
						shooter: {
							connect: {
								id: result.id,
							},
						},
						elo: parseInt(process.env.INIT_ELO || "1000"),
						tick: tick + 1,
					},
				});
				return result;
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
				ctx.log(LogLevel.INFO, `Updating shooter with id: ${args.id} and data: ${JSON.stringify(args.shooter)}`, LOG_CAT);
				const connectToTeam: Prisma.TeamUpdateOneWithoutShootersNestedInput | undefined = {};
				if (args.shooter?.teamId)
					connectToTeam.connect = {
						id: args.shooter.teamId,
					};
				else
					connectToTeam.disconnect = true;
				delete args.shooter?.teamId;
				try {
					return ctx.prisma.shooter.update({
						where: {
							id: args.id,
						},
						data: {
							...args.shooter,
							team: connectToTeam,
						},
						...ctx.select,
					});
				} catch (e) {
					ctx.log(LogLevel.ERROR, `Error updating shooter with id: ${args.id} and data: ${JSON.stringify(args.shooter)}, error: ${e}`, LOG_CAT);
					return null;
				}
			},
		});
		t.nullable.field("deleteShooter", {
			type: "Shooter",
			description: "delete shooter, return true if success",
			args: {
				id: nonNull("Int"),
			},
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Deleting shooter with id: ${args.id}`, LOG_CAT);
				try {
					return await ctx.prisma.shooter.delete({
						where: {
							id: args.id,
						},
						...ctx.select,
					});
				} catch (e) {
					ctx.log(LogLevel.ERROR, `Error deleting shooter with id: ${args.id}, error: ${e}`, LOG_CAT);
					return null;
				}
			},
		});
	},
});