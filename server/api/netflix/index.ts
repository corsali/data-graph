import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { localPortsConfig } from "../../shared";

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    description: String
  }

  type Netflix {
    toWatch: [Movie]
  }

  extend type User @key(fields: "id") {
    id: ID!
    netflix: Netflix!
  }
`;

const resolvers = {
  User: {
    async netflix(user: any) {
      return { toWatch: [{ id: "1", title: user.id }] };
    },
  },
};

const netflix = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
  introspection: true,
});

netflix.listen({ port: localPortsConfig.netflix }).then(({ url }) => {
  console.log(`Netflix service ready at ${url}`);
});
