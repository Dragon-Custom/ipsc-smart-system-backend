import { objectType } from "nexus";

export const ProErrorStoreObject = objectType({
	name: "ProErrorStore",
	definition(t) {
		t.implements("Node");
		t.nonNull.int("count");
		t.nonNull.field("proError", {
			type: "ProErrorObject",
		});
		t.nonNull.field("score", {
			type: "Score",
		});
	},
});