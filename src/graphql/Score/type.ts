import { enumType, objectType } from "nexus";

export const ScoreStateEnum = enumType({
	name: "ScoreState",
	members: ["DidNotScore", "DidNotFinish", "DQ", "Scored"],
});

export const ScoreObject = objectType({
	name: "Score",
	definition(t) {
		t.int("id");
		t.dateTime("createAt");
		t.field("shooter", {
			type: "Shooter",
		});
		t.int("shooterId");
		t.int("alphas");
		t.int("charlies");
		t.int("deltas");
		t.int("misses");
		t.int("noshoots");
		t.int("poppers");
		t.float("time");
		t.nullable.list.field("proErrors", {
			type: "ProErrorStore",
		});
		t.int("proErrorCount");
		t.field("scorelist", {
			type: "Scorelist",
		});
		t.int("scorelistId");
		t.int("score");
		t.float("hitFactor");
		t.nullable.field("dqReason", {
			type: "DqObject",
		});
		t.int("dqObjectId");
		t.int("round");
		t.float("accuracy");
		t.field("state", {
			type: "ScoreState",
		});
	},
});