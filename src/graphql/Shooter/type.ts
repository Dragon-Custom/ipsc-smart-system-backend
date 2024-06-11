import { enumType, objectType } from "nexus";


export const DivisionEnum = enumType({
	name: "Division",
	members: ["Standard", "Open", "Production", "ProductionOptics"],
	description: "Shooter's division",
});

export const ShooterType = objectType({
	name: "Shooter",
	nonNullDefaults: {
		input: true,
		output: false,
	},
	definition(t) {
		t.implements("Node");
		t.nonNull.dateTime("createAt");
		t.nonNull.string("name");
		t.nonNull.field("division", {
			type: "Division",
		});
		t.nonNull.string("email");
		t.list.field("designedStage", {
			type: "Stage",
		});
		t.list.field("scores", {
			type: "Score",
		});
		t.nullable.list.field("rankings", {
			type: "Ranking",
		});
		t.nonNull.int("ranking", {
			resolve: async (src, args, ctx) => {
				return (await ctx.prisma.ranking.findFirst({
					where: {
						id: src.id,
					},
					orderBy: {
						tick: "desc",
					},
					select: {
						rank: true,
					},
					take: 1,
				}))?.rank || 0;
			},
		});
		t.nullable.list.field("ratings", {
			type: "Rating",
		});
		t.nonNull.float("rating", {
			resolve: async (src, args, ctx) => {
				return (await ctx.prisma.rating.findFirst({
					where: {
						shooterId: src.id,
					},
					orderBy: {
						tick: "desc",
					},
					select: {
						rating: true,
					},
					take: 1,
				}))?.rating || 0;
			},
		});
		t.nullable.list.field("elos", {
			type: "Elo",
		});
		t.nonNull.float("elo", {
			resolve: async (src, args, ctx) => {
				return (await ctx.prisma.elo.findFirst({
					where: {
						shooterId: src.id,
					},
					orderBy: {
						tick: "desc",
					},
					select: {
						elo: true,
					},
					take: 1,
				}))?.elo || 0;
			},
		});
		t.nullable.field("team", {
			type: "Team",
		});
	},
});
