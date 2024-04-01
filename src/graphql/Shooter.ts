import { extendType, nonNull, objectType } from "nexus";
import { Shooter as ShooterObject } from "nexus-prisma";

export const Shooter = objectType({
	name: ShooterObject.$name,
	definition(t) {
		t.field(ShooterObject.id);
		t.field(ShooterObject.name);
		t.field(ShooterObject.division);
		t.field(ShooterObject.createAt);
		t.field(ShooterObject.stage);
		t.field(ShooterObject.score);
		
	},
});


export const ShooterQuery = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("getShooters", {
			type: "Shooter",
			resolve(src, arg, ctx) {
				return ctx.prisma.shooter.findMany();
			},
		});
		t.nonNull.field("getShooter", {
			type: "Shooter",
			args: {
				where: nonNull("Bytes"),
			},
			resolve(src, arg, ctx) {
				return ctx.prisma.shooter.findMany();
			},
		});
	},
});


// export const UserFindUniqueQuery = queryField("findUniqueUser", {
// 	type: "Shooter",
// 	args: {
// 		where: nonNull("Shooter"),
// 	},
// 	resolve(_parent, { where }, { prisma, select }) {
// 		return prisma.shooter.findUnique({
// 			where,
// 			...select,
// 		});
// 	},
// });