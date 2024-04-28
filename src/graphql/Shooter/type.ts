import { enumType, objectType } from "nexus";


export const DivisionEnum = enumType({
	name: "Division",
	members: ["Standard", "Open", "Production", "ProductionOptics"],
	description: "Shooter's division",
});

export const ShooterType = objectType({
	name: "Shooter",
	definition(t) {
		t.int("id");
		t.dateTime("createAt");
		t.string("name");
		t.field("division", {
			type: "Division",
		});
		t.string("email");
		//TODO: relation
		t.nullable.list.field("designedStage", {
			type: "Stage",
		});
		t.nullable.list.field("scores", {
			type: "Score",
		});
		t.nullable.list.field("rankings", {
			type: "Ranking",
		});
		t.nullable.list.field("ratings", {
			type: "Rating",
		});
	},
});