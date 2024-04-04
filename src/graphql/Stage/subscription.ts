import { extendType } from "nexus";

export const StageSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("subscriptStagesChange", {
			subscribe(src, args, ctx) {
				return (async function*() {
					while (true) {
						await new Promise((resolve) => {
							ctx.subscribe("Stage", [
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