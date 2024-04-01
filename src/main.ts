import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";
import { context } from "./context";

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({
	schema,
	context,
});

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

// Start the server and you're done!
server.listen(process.env.PORT, () => {
	console.info(
		`Server is running on http://localhost:${process.env.PORT}/graphql`,
	);
});
