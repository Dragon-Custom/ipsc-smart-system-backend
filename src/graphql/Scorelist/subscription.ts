import { extendType } from "nexus";

export const ScorelistSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("subscriptScorelistChange", {
			subscribe(src, args, ctx) {
				return (async function*() {
					while (true) {
						await new Promise((resolve) => {
							ctx.subscribe("Scorelist", [
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