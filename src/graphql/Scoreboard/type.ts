import { objectType } from "nexus";

export const ScoreboardObject = objectType({
	name: "Scoreboard",
	nonNullDefaults: {
		input: true,
		output: true,
	},
	definition(t) {
		t.implements("Node");
		t.nonNull.dateTime("createAt");
		t.nonNull.dateTime("lastUpdate");
		t.nonNull.string("name");
		t.nullable.list.field("scorelists", {
			type: "Scorelist",
		});
	},
});