import { extendType, nonNull } from "nexus";

export const ScoreboardMutation = extendType({
	type: "Mutation",
	definition(t) {
		t.field("createScoreboard", {
			type: "Scoreboard",
			args: {
				name: nonNull("String"),
			},
			resolve(src, args, ctx) {
				return ctx.prisma.scoreboard.create({
					data: {
						name: args.name,
					},
					...ctx.select,
				});
			},
		});
		t.field("updateScoreboard", {
			type: "Scoreboard",
			args: {
				id: nonNull("Int"),
				name: nonNull("String"),
			},
			async resolve(src, args, ctx) {
				try {
					return await ctx.prisma.scoreboard.update({
						where: {
							id: args.id,
						},
						data: {
							name: args.name,
						},
						...ctx.select,
					});
				} catch (error) {
					return null;
				}
			},
		});
		t.field("deleteScoreboard", {
			type: "Scoreboard",
			args: {
				id: nonNull("Int"),
			},
			async resolve(src, args, ctx) {
				try {
					return await ctx.prisma.scoreboard.delete({
						where: {
							id: args.id,
						},
						...ctx.select,
					});
				} catch (error) {
					return null;
				}
			},
		});
	},
});