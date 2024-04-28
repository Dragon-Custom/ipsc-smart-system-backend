import { objectType } from "nexus";

export const ProErrorObjectObject = objectType({
	name: "ProErrorObject",
	definition(t) {
		t.int("id");
		t.string("index");
		t.string("title");
		t.string("description");
		t.nullable.list.int("proErrorsStore");
	},
});