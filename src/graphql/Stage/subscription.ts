import { extendType } from "nexus";
import { LogLevel, subscribe } from "../../context";
const LOG_CAT = "Stage";

export const StageSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("stagesChange", {
			subscribe(src, args, ctx) {
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
						ctx.log(LogLevel.INFO, "Stage subscription triggered", LOG_CAT);
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