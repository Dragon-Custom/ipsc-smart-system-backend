/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const { Generator } = require("@paljs/generator");
// eslint-disable-next-line no-undef
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
)
	.run()
	.then(async () => {
		// The paljs excludeModels just not fucking working
		fs.rmSync("src/graphql/generated/Image/mutations", {
			recursive: true,
			force: true,
		});
		fs.rmSync("src/graphql/generated/Image/queries", {
			recursive: true,
			force: true,
		});
		fs.writeFileSync(
			"src/graphql/generated/Image/index.ts",
			"export * from './type'",
		);
	});


