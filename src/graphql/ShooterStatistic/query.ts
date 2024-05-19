import { extendType, nonNull } from "nexus";

export const ShooterStatisticQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("shooterStatistic", {
			type: "ShooterStatistic",
			args: {
				shooterId: nonNull("Int"),
			},
			resolve: (src, { shooterId }) => {
				return { shooterId: shooterId };
			},
		});
	},
});