import { extendType } from "nexus";
import { subscribe } from "../../context";

export const ScorelistSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("scorelistsChange", {
			subscribe() {
				return (async function* () {
					while (true) {
						await new Promise(res => subscribe("Scorelist", [
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