import { objectType } from "nexus";
import { ProErrorObjects as PrismaObject } from "nexus-prisma";

export const ProErrorObjects = objectType({
	name: PrismaObject.$name,
	definition(t) {
		t.field(PrismaObject.id);
		t.field(PrismaObject.index);
		t.field(PrismaObject.title);
		t.field(PrismaObject.description);
		t.field(PrismaObject.proErrorsStore);
	},
});