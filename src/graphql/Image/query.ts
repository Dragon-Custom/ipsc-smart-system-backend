import { readFile } from "fs/promises";
import { extendType, nonNull } from "nexus";
import { LogLevel } from "../../context";

const LOG_CAT = "Image";

export const imageQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("image", {
			type: "FileOutput",
			args: {
				id: nonNull("String"),
			},
			async resolve(src, args, ctx) {
				ctx.log(LogLevel.INFO, `Querying image with id ${args.id}`, LOG_CAT);
				const image = (await ctx.prisma.image.findUnique({
					where: {
						id: args.id,
					},
				}));
				if (!image)
					return null;
				const buffer = (await readFile(image.imagePath));
				return Buffer.from(buffer).toString("base64");
			},
		});
	},
});