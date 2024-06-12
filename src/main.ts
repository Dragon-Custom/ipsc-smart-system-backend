import { createServer as createHTTPSServer } from "node:https";
import { createServer as createHTTPServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";
import { LogLevel, context, log } from "./context";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { useGraphQLSSE } from "@graphql-yoga/plugin-graphql-sse";
import "dotenv/config";

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({
	schema,
	context,
	logging: {
		debug: msg => log(LogLevel.DEBUG, msg, "GraphQL Yoga"),
		error: msg => log(LogLevel.ERROR, msg, "GraphQL Yoga"),
		info: msg => log(LogLevel.INFO, msg, "GraphQL Yoga"),
		warn: msg => log(LogLevel.WARN, msg, "GraphQL Yoga"),
	},
	plugins: [
		useGraphQLSSE({
			endpoint: "/graphql/",
		}),
	],
	cors: {
		origin: process.env.FRONTEND_URL,
		credentials: true,
		methods: ["POST"],
	},
	// multipart: false,
});

let server;

if (process.env.USE_HTTPS === "true") {
	// Pass it into a server to hook into request handlers.
	server = createHTTPSServer(
		{
			cert: readFileSync(join(process.cwd(), process.env.CERT_PATH ?? "")),
			key: readFileSync(join(process.cwd(), process.env.KEY_PATH ?? "")),
			ca: readFileSync(join(process.cwd(), process.env.CA_CERT_PATH ?? "")),
		},
		yoga,
	);
} else {
	// Pass it into a server to hook into request handlers.
	server = createHTTPServer(
		yoga,
	);
}
// Start the server and you're done!
server.listen(process.env.PORT, () => {
	log(
		LogLevel.INFO,
		`Server is running on ${process.env.USE_HTTPS === "true" ? "https" : "http"}://localhost:${process.env.PORT}/graphql`,
		"Web Server",
	);
});

import readline from "readline";
import { reevaluate, updateElo } from "./graphql";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query: string) => new Promise((resolve) => rl.question(query, resolve));

// Usage inside aync function do not need closure demo only
(async() => {
	try {
		// eslint-disable-next-line no-constant-condition
		while (true) {
			const command = await prompt("");
			switch (command) {
			case "help":
				console.log(`
				help - Display this message
				elo - Update Elo ratings
				exit - Exit program
				(ranking | rating)- Reevaluate ranking
			`);
				break;
			case "elo":
				updateElo();
				break;
			case "ranking":
				reevaluate();
				break;
			case "rating":
				reevaluate();
				break;
			case "exit":
				process.exit(0);
				break;
			default:
				console.log("Invalid command");
				break;
			}
		}
	} catch (e) {
		console.error("Unable to prompt", e);
	}
})();

// When done reading prompt, exit program 
rl.on("close", () => process.exit(0));