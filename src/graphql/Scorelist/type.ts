import { objectType } from "nexus";

export const ScorelistObject = objectType({
	name: "Scorelist",
	definition(t) {
		t.implements("Node");
		t.nonNull.dateTime("createAt");
		t.nonNull.dateTime("lastUpdate");
		t.nullable.field("stage", {
			type: "Stage",
		});
		t.nullable.int("stageId");
		t.nullable.list.field("scores", {
			type:"Score",
		});
		t.nullable.field("scoreboard", {
			type: "Scoreboard",
		});
		t.nullable.int("scoreboardId");
		t.nonNull.int("rounds");
	},
});