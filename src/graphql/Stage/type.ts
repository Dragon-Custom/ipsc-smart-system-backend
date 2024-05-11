import { enumType, objectType } from "nexus";

export const StageTypeEnum = enumType({
	name: "StageType",
	members: ["Short","Medium","Long","Unsanctioned"],
});

export const StageObject = objectType({
	name: "Stage",
	nonNullDefaults: {
		input: true,
		output: false,
	},
	definition(t) {
		t.implements("Node");
		t.nonNull.dateTime("createAt");
		t.nonNull.field("image", {
			type: "Image",
		}); 
		t.nonNull.string("name");
		t.nullable.string("description");
		t.nonNull.int("papers");
		t.nonNull.int("poppers");
		t.nonNull.int("noshoots");
		t.nonNull.int("gunCondition");
		t.nonNull.field("designer", {
			type: "Shooter",
		});
		t.nonNull.int("designerId");
		t.nonNull.float("walkthroughTime", {
			description: "unit: minutes",
		});
		t.nullable.list.field("scorelists", {
			type: "Scorelist",
		});
		t.nonNull.int("minRounds");
		t.nonNull.int("maxScore");
		t.nonNull.field("stageType", {
			type: "StageType",
		});
		t.nullable.list.field("tags", {
			type: "TagOnStage",
		});
	},
});