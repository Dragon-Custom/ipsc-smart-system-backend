import { objectType } from "nexus";

export const DqObjectObjectType = objectType({
	name: "DqObject",
	definition(t) {
		t.int("id");
		t.string("index", {
			description: "the index on the rulebooks",
		});
		t.string("category");
		t.string("title");
		t.string("description");
		t.nullable.list.field("scores", {
			type: "Score",
		});
	},
});