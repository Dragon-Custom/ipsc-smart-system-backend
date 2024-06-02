import { Prisma } from "@prisma/client";
import { extendType, inputObjectType, intArg, nonNull } from "nexus";
import { LogLevel } from "../../context";


const LOG_CAT = "Shooter";


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
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Qureying shooters with filter ${JSON.stringify(args.filter)}`, LOG_CAT);
				let where: Prisma.ShooterWhereInput = {};
				if (args.filter?.id) {
					where = {
						...where,
						id: {
							in: [...args.filter.id ?? []] as number[],
						},
					};
				}
				const result = await ctx.prisma.shooter.findMany({
					where,
					...ctx.select,
				});
				ctx.log(LogLevel.TRACE, `Result: ${JSON.stringify(result)}`, LOG_CAT);
				return result;
			},
		});
		t.nullable.field("shooter", {
			type: "Shooter",
			args: {
				id: nonNull(intArg()),
			},
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Qureying shooter with id ${args.id}`, LOG_CAT);
				const result = await ctx.prisma.shooter.findUnique({
					where: {
						id: args.id,
					},
					...ctx.select,
				});
				ctx.log(LogLevel.TRACE, `Result: ${JSON.stringify(result)}`, LOG_CAT);
				return result;
			},
		});
	},
});