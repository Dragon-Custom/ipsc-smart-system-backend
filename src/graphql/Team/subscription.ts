import { extendType } from "nexus";
import { LogLevel, subscribe } from "../../context";
const LOG_CAT = "Team";

export const ShooterSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("teamsSubscription", {
			subscribe(src, args, ctx) {
				return (async function* () {
					while (true) {
						await new Promise(res => subscribe("Team", [
							"create",
							"createMany",
							"update",
							"updateMany",
							"delete",
							"deleteMany",
						], res));
						ctx.log(LogLevel.INFO, "Team subscription triggered", LOG_CAT);
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