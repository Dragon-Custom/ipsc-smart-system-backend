import { objectType } from "nexus";

export const ProErrorObjectObject = objectType({
	name: "ProErrorObject",
	definition(t) {
		t.implements("Node");
		t.string("index");
		t.string("title");
		t.string("description");
		t.nullable.list.field("proErrorsStore", {
			type: "ProErrorStore",
		});
	},
});