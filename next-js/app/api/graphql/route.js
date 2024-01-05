import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import dbConnect from "@/conn/conn";
import { query } from "@/schema/query.js";
import { mutationResolver } from "@/resovlers/mutation";
import { queryResolver } from "@/resovlers/query";
import { mutation } from "@/schema/mutation";

const typeDefs = gql`
  ${query}
  ${mutation}
`;

const resolvers = {
  ...queryResolver,
  ...mutationResolver,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

dbConnect();
const handler = startServerAndCreateNextHandler(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
