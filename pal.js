const { Generator } = require("@paljs/generator");
const fs = require("fs");

fs.rmSync("src/graphql/generated", { recursive: true, force: true });
new Generator(
	{ name: "nexus", schemaPath: "src/prisma/schema.prisma" },
	{
		output: "src/graphql/generated",
		excludeModels: [
			{
				name: "image",
				mutations: false,
				queries: false,
			},
		],
	},
).run().then(async () => {
	// The paljs excludeModels just not fucking working
	fs.rmSync("src/graphql/generated/Image", { recursive: true, force: true });
	const exportItem = fs.readFileSync("src/graphql/generated/index.ts").toString();
	fs.writeFileSync(
		"src/graphql/generated/index.ts",
		exportItem.replace(/.*Image.*$/gm, ""),
	);
});


