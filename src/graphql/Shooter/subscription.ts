import { extendType } from "nexus";

export const ShooterSubscription = extendType({
	type: "Subscription",
	definition(t) {
		t.boolean("subscriptShootersChange", {
			subscribe(src, args, ctx) {
				return (async function*() {
					while (true) {
						await new Promise((resolve) => {
							ctx.subscribe("Shooter", [
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