import { extendType } from "nexus";
import { LogLevel, subscribe } from "../../context";

const LOG_CAT = "Scoreboard";

export const ScoreboardSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("scoreboardsChange", {
			subscribe(src, args, ctx) {
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
						ctx.log(LogLevel.INFO, "Scoreboard subscription triggered", LOG_CAT);
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