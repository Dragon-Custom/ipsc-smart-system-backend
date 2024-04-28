import { objectType } from "nexus";

export const ProErrorStoreObject = objectType({
	name: "ProErrorStore",
	definition(t) {
		t.int("id");
		t.int("count");
		t.field("proError", {
			type: "ProErrorObject",
		});
		t.int("proErrorObjectId");
		t.field("score", {
			type: "Score",
		});
		t.int("scoreId");
	},
});