import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "your_graphql_endpoint_here",
  cache: new InMemoryCache(),
});

export default client;
