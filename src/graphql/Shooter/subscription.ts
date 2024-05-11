import { extendType } from "nexus";
import { subscribe } from "../../context";

export const ShooterSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("shootersChange", {
			subscribe() {
				return (async function* () {
					while (true) {
						await new Promise(res => subscribe("Shooter", [
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