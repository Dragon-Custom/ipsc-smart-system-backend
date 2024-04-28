import { objectType } from "nexus";

export const RatingObject = objectType({
	name: "Rating",
	definition(t) {
		t.int("id");
		t.field("shooter", {
			type: "Shooter",
		});
		t.int("shooterId");
		t.float("rating");
		t.dateTime("updatedAt");
		t.dateTime("createAt");
	},
});