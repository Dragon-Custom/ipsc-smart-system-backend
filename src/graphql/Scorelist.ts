import { objectType } from "nexus";
import { Scorelist as PrismaObject } from "nexus-prisma";

export const Scorelist = objectType({
	name: PrismaObject.$name,
	definition(t) {
		t.field(PrismaObject.id);
		t.field(PrismaObject.scoreboard);
		t.field(PrismaObject.createAt);
		t.field(PrismaObject.lastUpdate);
		t.field(PrismaObject.stage);
		t.field(PrismaObject.scores);
	},
});