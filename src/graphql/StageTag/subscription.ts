import { extendType } from "nexus";
import { subscribe } from "../../context";

export const StageTagSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("stageTagsChange", {
			subscribe() {
				return (async function* () {
					while (true) {
						await new Promise(res => subscribe("StageTag", [
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