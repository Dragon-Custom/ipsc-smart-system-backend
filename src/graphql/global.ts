import { interfaceType } from "nexus";

export const NodeObject = interfaceType({
	name: "Node",
	resolveType(root) { //idk what the fuck are this thing doing
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-expect-error
		return root.__typename;
	},
	definition(t) {
		t.nonNull.int("id");
	},
});