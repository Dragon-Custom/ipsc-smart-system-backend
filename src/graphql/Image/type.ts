import { objectType } from "nexus";

export const ImageObjectType = objectType({
	name: "Image",
	definition(t) {
		t.id("id");
		t.nullable.list.field("stages", {
			type: "Stage",
		});
	},
});