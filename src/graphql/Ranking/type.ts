import { objectType } from "nexus";

export const RankingObject = objectType({
	name: "Ranking",
	definition(t) {
		t.int("id");
		t.field("shooter", {
			type: "Shooter",
		});
		t.int("shooterId");
		t.int("rank");
		t.dateTime("updatedAt");
		t.dateTime("createAt");
	},
});