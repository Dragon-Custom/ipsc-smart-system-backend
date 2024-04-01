import { objectType } from "nexus";
import { Stage as PrismaObject } from "nexus-prisma";

export const Stage = objectType({
	name: PrismaObject.$name,
	definition(t) {
		t.field(PrismaObject.id);
		t.field(PrismaObject.name);
		t.field(PrismaObject.createAt);
		t.field(PrismaObject.description);
		t.field(PrismaObject.designer);
		t.field(PrismaObject.gunCondition);
		t.field(PrismaObject.noshoots);
		t.field(PrismaObject.papers);
		t.field(PrismaObject.poppers);
	},
});