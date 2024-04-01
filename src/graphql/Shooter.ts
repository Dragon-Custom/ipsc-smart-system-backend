import { extendType, objectType } from "nexus";

export const Shooter = objectType({
    name: "Shooter",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("name");
    },
});

export const ShooterQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.field("getAllShooters", {
            type: "Shooter",
            resolve(src, arg, ctx, inf) {
                return ctx.prisma.shooter.findMany();
            }
        });
    },
});
