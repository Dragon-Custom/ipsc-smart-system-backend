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

	let inputType = fs.readFileSync("src/graphql/generated/InputTypes.ts").toString();
	inputType = inputType.replace(
		"t.nonNull.field('minRounds', { type: 'Int' })",
		"t.field('minRounds', { type: 'Int' })",
	);
	inputType = inputType.replace(
		"t.nonNull.field('maxScore', { type: 'Int' })",
		"t.field('maxScore', { type: 'Int' })",
	);
	inputType = inputType.replace(
		"t.nonNull.field('stageType', { type: 'StageType' })",
		"t.field('stageType', { type: 'StageType' })",
	);
	fs.writeFileSync("src/graphql/generated/InputTypes.ts", inputType);
});


