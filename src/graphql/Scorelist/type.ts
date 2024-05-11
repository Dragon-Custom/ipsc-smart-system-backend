import { objectType } from "nexus";

export const ScorelistObject = objectType({
	name: "Scorelist",
	definition(t) {
		t.implements("Node");
		t.nonNull.dateTime("createAt");
		t.nonNull.dateTime("lastUpdate");
		t.nonNull.field("stage", {
			type: "Stage",
		});
		t.nonNull.int("stageId");
		t.nullable.list.field("scores", {
			type:"Score",
		});
		t.nonNull.field("scoreboard", {
			type: "Scoreboard",
		});
		t.nonNull.int("scoreboardId");
		t.nonNull.int("rounds");
	},
});