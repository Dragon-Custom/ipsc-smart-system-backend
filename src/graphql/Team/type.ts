import { objectType } from "nexus";

export const Team = objectType({
	name: "Team",
	definition(t) {
		t.implements("Node");
		t.string("name");
		t.dateTime("createAt");
		t.nullable.list.field("shooters", {
			type: "Shooter",
		});
	},
});