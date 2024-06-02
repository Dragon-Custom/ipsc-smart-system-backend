import { enumType, objectType } from "nexus";


export const DivisionEnum = enumType({
	name: "Division",
	members: ["Standard", "Open", "Production", "ProductionOptics"],
	description: "Shooter's division",
});

export const ShooterType = objectType({
	name: "Shooter",
	nonNullDefaults: {
		input: true,
		output: false,
	},
	definition(t) {
		t.implements("Node");
		t.nonNull.dateTime("createAt");
		t.nonNull.string("name");
		t.nonNull.field("division", {
			type: "Division",
		});
		t.nonNull.string("email");
		t.list.field("designedStage", {
			type: "Stage",
		});
		t.list.field("scores", {
			type: "Score",
		});
		t.nullable.list.field("rankings", {
			type: "Ranking",
		});
		t.nullable.list.field("ratings", {
			type: "Rating",
		});
		t.nonNull.list.field("elo", {
			type: "Elo",
		});
	},
});
