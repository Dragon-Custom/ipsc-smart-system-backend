import { createServer } from "node:https";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";
import { context } from "./context";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { useGraphQLSSE } from "@graphql-yoga/plugin-graphql-sse";

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({
	schema,
	context,
	logging: {
		debug: console.log,
		error: console.log,
		info: console.log,
		warn: console.log,
	},
	plugins: [
		useGraphQLSSE({
			endpoint: "/graphql/",
		}),
	],
});

// Pass it into a server to hook into request handlers.
const server = createServer(
	{
		cert: readFileSync(join(__dirname, "../", process.env.CERT_PATH ?? "")),
		key: readFileSync(join(__dirname, "../", process.env.KEY_PATH ?? "")),
		ca: readFileSync(join(__dirname, "../", process.env.CA_CERT_PATH ?? "")),
	},
	yoga,
);

// Start the server and you're done!
server.listen(process.env.PORT, () => {
	console.info(
		`Server is running on http://localhost:${process.env.PORT}/graphql`,
	);
});
