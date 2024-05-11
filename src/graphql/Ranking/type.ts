import { objectType } from "nexus";

export const RankingObject = objectType({
	name: "Ranking",
	definition(t) {
		t.implements("Node");
		t.nonNull.field("shooter", {
			type: "Shooter",
		});
		t.nonNull.int("shooterId");
		t.nonNull.int("rank");
		t.nonNull.dateTime("updatedAt");
		t.nonNull.dateTime("createAt");
	},
});