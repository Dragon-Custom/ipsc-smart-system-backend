import { objectType } from "nexus";

export const ScoreboardObject = objectType({
	name: "Scoreboard",
	nonNullDefaults: {
		input: true,
		output: true,
	},
	definition(t) {
		t.implements("Node");
		t.dateTime("createAt");
		t.dateTime("lastUpdate");
		t.string("name");
		t.nullable.list.field("scorelists", {
			type: "Scorelist",
		});
	},
});