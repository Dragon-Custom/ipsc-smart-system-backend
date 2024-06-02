import { extendType } from "nexus";
import { LogLevel, subscribe } from "../../context";
const LOG_CAT = "Shooter";

export const ShooterSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("shootersChange", {
			subscribe(src, args, ctx) {
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
						ctx.log(LogLevel.INFO, "Shooter subscription triggered", LOG_CAT);
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