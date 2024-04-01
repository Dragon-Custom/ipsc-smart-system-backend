import { objectType } from "nexus";
import { Score as PrismaObject } from "nexus-prisma";

export const Score = objectType({
	name: PrismaObject.$name,
	definition(t) {
		t.field(PrismaObject.id);
		t.field(PrismaObject.shooter);
		t.field(PrismaObject.alphas);
		t.field(PrismaObject.charlies);
		t.field(PrismaObject.deltas);
		t.field(PrismaObject.misses);
		t.field(PrismaObject.noshoots);
		t.field(PrismaObject.poppers);
		t.field(PrismaObject.time);
		t.field(PrismaObject.proErrors);
		t.field(PrismaObject.scorelist);
		t.field(PrismaObject.shooter);
	},
});