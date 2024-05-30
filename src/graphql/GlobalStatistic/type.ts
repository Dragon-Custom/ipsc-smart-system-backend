import { objectType } from "nexus";


export const GlobalStatisticType = objectType({
	name: "GlobalStatistic",
	definition(t) {
		t.int("shootersTotal", {
			description: "The number of shooter that join in",
		});
		t.int("runsTotal", {
			description: "The run count of all shooter",
		});
		t.int("stagesTotal");
		t.int("finishedTotal");
		t.int("dqTotal");
		t.int("dnfTotal");
		t.float("averageHitFactor");
		t.float("averageAccuracy");
		t.int("alphaZoneTotal");
		t.int("charlieZoneTotal");
		t.int("deltaZoneTotal");
		t.int("noShootTotal");
		t.int("popperTotal");
		t.int("missTotal");
		t.int("proErrorTotal");
	},
});