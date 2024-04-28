import { objectType } from "nexus";

export const ProErrorStoreObject = objectType({
	name: "ProErrorStore",
	definition(t) {
		t.implements("Node");
		t.int("count");
		t.field("proError", {
			type: "ProErrorObject",
		});
		t.field("score", {
			type: "Score",
		});
	},
});