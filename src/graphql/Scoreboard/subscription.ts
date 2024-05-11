import { extendType } from "nexus";
import { subscribe } from "../../context";

export const ScoreboardSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("scoreboardsChange", {
			subscribe() {
				return (async function* () {
					while (true) {
						await new Promise(res => subscribe("Scoreboard", [
							"create",
							"createMany",
							"update",
							"updateMany",
							"delete",
							"deleteMany",
						], res));
						yield true;
					}
				})();
			},
			resolve(eventData) {
				return eventData;
			},
		});
	},
});