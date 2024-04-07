import { extendType } from "nexus";

export const StageTagSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("subscriptStageTagsChange", {
			subscribe(src, args, ctx) {
				return (async function*() {
					while (true) {
						await new Promise((resolve) => {
							ctx.subscribe("StageTag", [
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