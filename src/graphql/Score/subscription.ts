import { extendType } from "nexus";
import { subscribe } from "../../context";

export const ScoreSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("scoresChange", {
			subscribe() {
				return (async function* () {
					while (true) {
						await new Promise(res => subscribe("Score", [
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