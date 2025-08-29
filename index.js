import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typesDefs } from "./schema";
// server setup
const server = new ApolloServer({
  typesDefs, // like a schema but don't handel schema
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at:", url);
