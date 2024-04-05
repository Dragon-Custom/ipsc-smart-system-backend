import { mkdir, writeFile } from "fs/promises";
import { arg, extendType, nonNull, scalarType } from "nexus";
import path from "path";
import sharp from "sharp";

export const FileScalar = scalarType({
	name: "File",
	asNexusMethod: "file",
	description: "The `File` scalar type represents a file upload.",
	sourceType: "File",
});
export const ImageUpload = extendType({
	type: "Mutation",
	definition(t) {
		t.field("uploadImage", {
			type: "String",
			args: {
				image: nonNull(arg({ type: "File" })),
			},
			async resolve(src, arg, ctx) {
				const storePath = path.join(__dirname, "../../../", process.env.IMAGE_STORAGE_PATH ?? "image");
				await mkdir(storePath, {
					recursive: true,
				});
				let buffer = await arg.image.arrayBuffer();
				buffer = await sharp(buffer)
					.jpeg()
					.toBuffer();
				const filename = (await ctx.prisma.image.create({
					data: {
						imagePath: "",
					},
				})).id;
				const filePath = path.join(storePath, filename) + ".jpeg";
				await writeFile(filePath, Buffer.from(buffer));
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