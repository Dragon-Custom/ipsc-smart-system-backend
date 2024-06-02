import { extendType } from "nexus";
import { LogLevel, subscribe } from "../../context";

const LOG_CAT = "Score";

export const ScoreSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("scoresChange", {
			subscribe(src, args, ctx) {
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
						ctx.log(LogLevel.INFO, "Score subscription triggered", LOG_CAT);
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