import { objectType } from "nexus";

export const EloType = objectType({
	name: "Elo",
	definition(t) {
		t.implements("Node");
		t.nonNull.field("shooter", {
			type: "Shooter",
		});
		t.nonNull.float("elo");
		t.nonNull.dateTime("updatedAt");
		t.nonNull.dateTime("createAt");
		t.nonNull.int("tick");
	},
});