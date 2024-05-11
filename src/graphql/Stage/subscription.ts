import { extendType } from "nexus";
import { subscribe } from "../../context";

export const StageSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("stagesChange", {
			subscribe() {
				return (async function* () {
					while (true) {
						await new Promise(res => subscribe("Stage", [
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