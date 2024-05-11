import { objectType, scalarType } from "nexus";


export const FileScalar = scalarType({
	name: "File",
	asNexusMethod: "file",
	description: "The `File` scalar type represents a file upload.",
	sourceType: "File",
});
export const FileOutput = scalarType({
	name: "FileOutput",
	description: "the base64 encoded file",
	sourceType: "String",
});

export const ImageObjectType = objectType({
	name: "Image",
	definition(t) {
		t.nonNull.id("id");
		t.nullable.list.field("stages", {
			type: "Stage",
		});
	},
});