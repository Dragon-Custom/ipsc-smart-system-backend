import { objectType } from "nexus";

export const RatingObject = objectType({
	name: "Rating",
	definition(t) {
		t.implements("Node");
		t.nonNull.field("shooter", {
			type: "Shooter",
		});
		t.nonNull.int("shooterId");
		t.nonNull.float("rating");
		t.nonNull.dateTime("updatedAt");
		t.nonNull.dateTime("createAt");
	},
});