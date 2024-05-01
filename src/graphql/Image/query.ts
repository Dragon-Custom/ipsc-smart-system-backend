import { readFile } from "fs/promises";
import { extendType, nonNull } from "nexus";

export const imageQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("image", {
			type: "FileOutput",
			args: {
				id: nonNull("String"),
			},
			async resolve(src, args, ctx) {
				const image = (await ctx.prisma.image.findUnique({
					where: {
						id: args.id,
					},
					...ctx.select,
				}));
				if (!image)
					return null;
				const buffer = (await readFile(image.imagePath));
				return Buffer.from(buffer).toString("base64");
			},
		});
	},
});