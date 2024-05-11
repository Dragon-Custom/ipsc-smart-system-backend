import { objectType } from "nexus";

export const DqObjectObjectType = objectType({
	name: "DqObject",
	definition(t) {
		t.implements("Node");
		t.nonNull.string("index", {
			description: "the index on the rulebooks",
		});
		t.nonNull.string("category");
		t.nonNull.string("title");
		t.nonNull.string("description");
		t.nullable.list.field("scores", {
			type: "Score",
		});
	},
});