import { interfaceType } from "nexus";

export const NodeObject = interfaceType({
	name: "Node",
	definition(t) {
		t.nonNull.int("id");
	},
});