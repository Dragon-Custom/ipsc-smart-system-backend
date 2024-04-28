import { objectType } from "nexus";

export const ScoreboardObject = objectType({
	name: "Scoreboard",
	definition(t) {
		t.int("id");
		t.dateTime("createAt");
		t.dateTime("lastUpdate");
		t.string("name");
		t.nullable.list.field("scorelists", {
			type: "Scorelist",
		});
	},
});