import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import { readFile } from "node:fs/promises";
import cors from "cors";
import express from "express";
import { resolvers } from "./resolver.js";
const PORT = 9000;

const app = express();

app.use(cors(), express.json());
const typeDefs = await readFile("./schema.graphql", "utf-8");
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

await apolloServer.start();
app.use("/graphql", apolloMiddleware(apolloServer));

app.listen({ port: PORT }, () => {
  console.log(`Server is running at ${PORT}`);
  console.log(`Server is running at http://localhost:${PORT}/graphql`);
});
