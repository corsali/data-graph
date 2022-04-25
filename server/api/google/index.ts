import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { localPortsConfig } from "../../shared";

const typeDefs = gql`
  type Google {
    searchHistory: [String]
  }

  extend type User @key(fields: "id") {
    id: ID!
    google: Google!
  }
`;

const resolvers = {
  User: {
    async google(user: any) {
      console.log(user);

      return {
        searchHistory: ["recipe pancakes", "capital of Indonesia", user.id],
      };
    },
  },
};

const google = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
  introspection: true,
});

google.listen({ port: localPortsConfig.google }).then(({ url }) => {
  console.log(`Google service ready at ${url}`);
});
