import { extendType, nonNull } from "nexus";

export const RatingQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("rating", {
			type: "Rating",
			args: {
				shooterId: nonNull("Int"),
			},
			async resolve(src, args, ctx) {
				try {
					return await ctx.prisma.rating.findFirst({
						where: {
							shooterId: args.shooterId,
						},
						orderBy: {
							createAt: "desc",
						},
					});
				} catch (error) {
					console.log(error);
					return null;
				}
			},
		});
		t.list.field("historyRating", {
			type: "Rating",
			args: {
				shooterId: nonNull("Int"),
			},
			async resolve(src, args, ctx) {
				return await ctx.prisma.rating.findMany({
					where: {
						shooterId: args.shooterId,
					},
					orderBy: {
						createAt: "desc",
					},
				});
			},
		});
	},
});