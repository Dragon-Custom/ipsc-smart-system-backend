import { objectType } from "nexus";

export const ProErrorObjectObject = objectType({
	name: "ProErrorObject",
	definition(t) {
		t.implements("Node");
		t.nonNull.string("index");
		t.nonNull.string("title");
		t.nonNull.string("description");
		t.list.field("proErrorsStore", {
			type: "ProErrorStore",
		});
	},
});