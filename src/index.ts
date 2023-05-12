import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import path from "path";
import { UserQueries } from "./resolver";

const resolvers = {
  Query: {
    ...UserQueries,
  },
};

const typeDefs = readFileSync(path.resolve("./schema.graphql")).toString(
  "utf-8"
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 3000 },
}).then(({ url }) => console.log(`🚀 server ready at: ${url}`));
