import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { localPortsConfig } from "../../shared";

const typeDefs = gql`
  type Page {
    id: ID!
    title: String!
    description: String
  }

  type Facebook {
    likedPages: [Page]
  }

  extend type User @key(fields: "id") {
    id: ID!
    facebook: Facebook!
  }
`;

const resolvers = {
  User: {
    async facebook(user: any) {
      return { likedPages: [{ id: "12", title: user.id }] };
    },
  },
};

const facebook = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
  introspection: true,
});

facebook.listen({ port: localPortsConfig.facebook }).then(({ url }) => {
  console.log(`Facebook service ready at ${url}`);
});
