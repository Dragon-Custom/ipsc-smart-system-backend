import { objectType } from "nexus";

export const StageTag = objectType({
	name: "StageTag",
	definition(t) {
		t.int("id");
		t.string("title");
		t.string("color", {
			description: "format: rgba(x,x,x,x)",
		});
	},
});