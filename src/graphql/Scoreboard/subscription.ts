import { extendType } from "nexus";

export const ScoreboardSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("subscriptScoreboardsChange", {
			subscribe(src, args, ctx) {
				return (async function*() {
					while (true) {
						await new Promise((resolve) => {
							ctx.subscribe("Scoreboard", [
								"create",
								"update",
								"delete",
								"createMany",
								"deleteMany",
								"updateMany",
								"upsert",
							], () => resolve(null));
						});
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