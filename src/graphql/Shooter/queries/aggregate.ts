import { queryField, list } from "nexus";

export const ShooterAggregateQuery = queryField("aggregateShooter", {
	type: "AggregateShooter",
	args: {
		where: "ShooterWhereInput",
		orderBy: list("ShooterOrderByWithRelationInput"),
		cursor: "ShooterWhereUniqueInput",
		take: "Int",
		skip: "Int",
	},
	resolve(_parent, args, { prisma, select }) {
		return prisma.shooter.aggregate({ ...args, ...select }) as any;
	},
});
