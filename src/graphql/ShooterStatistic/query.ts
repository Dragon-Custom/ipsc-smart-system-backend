import { extendType, nonNull } from "nexus";
import { LogLevel } from "../../context";

const LOG_CAT = "Shooter Statistic";

export const ShooterStatisticQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("shooterStatistic", {
			type: "ShooterStatistic",
			args: {
				shooterId: nonNull("Int"),
			},
			resolve: (src, { shooterId }, ctx) => {
				ctx.log(LogLevel.INFO, `Querying shooter statistic for shooterId: ${shooterId}`, LOG_CAT);
				return { shooterId: shooterId };
			},
		});
	},
});