import { extendType } from "nexus";

export const ScoreSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("subscriptScoreChange", {
			subscribe(src, args, ctx) {
				return (async function*() {
					while (true) {
						await new Promise((resolve) => {
							ctx.subscribe("Score", [
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
