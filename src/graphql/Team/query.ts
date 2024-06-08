import { extendType, nonNull } from "nexus";
import { LogLevel } from "../../context";


const LOG_CAT = "Team";
export const TeamQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("team", {
			type: "Team",
			args: {
				id: nonNull("Int"),
			},
			resolve(root, args, ctx) {
				ctx.log(LogLevel.INFO, `Querying team by id: ${args.id}`, LOG_CAT);
				return ctx.prisma.team.findUnique({
					where: {
						id: args.id,
					},
					...ctx.select,
				});
			},
		});
		t.nonNull.list.field("teams", {
			type: "Team",
			resolve(root, args, ctx) {
				ctx.log(LogLevel.INFO, "Querying all teams", LOG_CAT);
				return ctx.prisma.team.findMany({
					...ctx.select,
				});
			},
		});
	},
});