import { objectType } from "nexus";

export const ScorelistObject = objectType({
	name: "Scorelist",
	definition(t) {
		t.int("id");
		t.dateTime("createAt");
		t.dateTime("lastUpdate");
		t.field("stage", {
			type: "Stage",
		});
		t.int("stageId");
		t.nullable.list.field("scores", {
			type:"Score",
		});
		t.field("scoreboard", {
			type: "Scoreboard",
		});
		t.int("scoreboardId");
		t.int("rounds");
	},
});