import { extendType, inputObjectType, nonNull, nullable } from "nexus";
import { LogLevel } from "../../context";

const LOG_CAT = "Team";

export const CreateTeamTeamInputType = inputObjectType({
	name: "CreateTeamInput",
	definition(t) {
		t.nonNull.string("name");
	},
});

export const UpdateTeamTeamInputType = inputObjectType({
	name: "UpdateTeamInput",
	definition(t) {
		t.nullable.string("name");
	},
});
export const TeamMutation = extendType({
	type: "Mutation",
	definition(t) {
		t.field("createTeam", {
			type: "Team",
			args: {
				team: nonNull(CreateTeamTeamInputType),
			},
			resolve: async (src, args, ctx) => {
				ctx.log(LogLevel.INFO, `Creating team ${JSON.stringify(args.team)}`, LOG_CAT);
				return await ctx.prisma.team.create({
					data: {
						name: args.team.name,
					},
					...ctx.select,
				});
			},
		});
		t.field("updateTeam", {
			type: "Team",
			args: {
				id: nonNull("Int"),
				team: nullable(UpdateTeamTeamInputType),
			},
			resolve: async (src, args, ctx) => {
				ctx.log(LogLevel.INFO, `Updating team by id ${args.id} with data ${JSON.stringify(args.team)}`, LOG_CAT);
				return await ctx.prisma.team.update({
					where: {
						id: args.id,
					},
					data: {
						...args.team,
					},
					...ctx.select,
				});
			},
		});
	},
});