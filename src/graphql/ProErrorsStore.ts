import { objectType } from "nexus";
import { ProErrorsStore as PrismaObject } from "nexus-prisma";

export const ProErrorsStore = objectType({
	name: PrismaObject.$name,
	definition(t) {
		t.field(PrismaObject.id);
		t.field(PrismaObject.count);
		t.field(PrismaObject.proError);
		t.field(PrismaObject.score);
	},
});