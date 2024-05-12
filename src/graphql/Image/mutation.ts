import { mkdir } from "fs/promises";
import Jimp from "jimp";
import { arg, extendType, nonNull } from "nexus";
import path from "path";

export const imageMutation = extendType({
	type: "Mutation",
	definition(t) {
		t.field("uploadImage", {
			type: "ID",
			args: {
				image: nonNull(arg({ type: "File" })),
			},
			async resolve(src, arg, ctx) {
				const storePath = path.join(__dirname, "../../../", process.env.IMAGE_STORAGE_PATH ?? "image");
				await mkdir(storePath, {
					recursive: true,
				});
				const buffer = await arg.image.arrayBuffer();
				const filename = (await ctx.prisma.image.create({
					data: {
						imagePath: "",
					},
				})).id;
				const filePath = path.join(storePath, filename) + ".jpeg";
				(await Jimp.read(Buffer.from(buffer))).writeAsync(filePath);
				await ctx.prisma.image.update({
					where: {
						id: filename,
					},
					data: {
						imagePath: filePath,
					},
				});
				return filename;
			},
		});
	},
});