import { Prisma } from "@prisma/client";
import { extendType, inputObjectType, intArg, nonNull } from "nexus";




export const ShootersFilterInputType = inputObjectType({
	name: "ShootersFilter",
	definition(t) {
		t.nullable.list.int("id");
	},
});

export const ShooterQuery = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("shooters", {
			type: "Shooter",
			args: {
				filter: "ShootersFilter",
			},
			resolve(src, args, ctx) {
				let where: Prisma.ShooterWhereInput = {};
				if (args.filter?.id) {
					where = {
						...where,
						id: {
							in: [...args.filter.id ?? []] as number[],
						},
					};
				}
				return ctx.prisma.shooter.findMany({
					where,
					...ctx.select,
				});
			},
		});
		t.nullable.field("shooter", {
			type: "Shooter",
			args: {
				id: nonNull(intArg()),
			},
			resolve(src, args, ctx) {
				return ctx.prisma.shooter.findUnique({
					where: {
						id: args.id,
					},
					...ctx.select,
				});
			},
		});
	},
});