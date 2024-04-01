import { extendType, objectType } from "nexus";
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
		t.nonNull.list.field("getAllShooters", {
			type: "Shooter",
			resolve(src, arg, ctx) {
				return ctx.prisma.shooter.findMany();
			},
		});
	},
});
