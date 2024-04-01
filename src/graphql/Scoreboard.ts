import { objectType } from "nexus";
import { Scoreboard as PrismaObject } from "nexus-prisma";

export const Scoreboard = objectType({
	name: PrismaObject.$name,
	definition(t) {
		t.field(PrismaObject.id);
		t.field(PrismaObject.name);
		t.field(PrismaObject.createAt);
		t.field(PrismaObject.lastUpdate);
		t.field(PrismaObject.name);
		t.field(PrismaObject.scorelists);
	},
});