import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { localPortsConfig } from "../../shared";

const typeDefs = gql`
  type InstagramAccount {
    id: ID!
    title: String!
    description: String
  }

  type Instagram {
    following: [InstagramAccount]
  }

  extend type User @key(fields: "id") {
    id: ID!
    instagram: Instagram!
  }
`;

const resolvers = {
  User: {
    async instagram(user: any) {
      return { following: [{ id: "1", title: user.id }] };
    },
  },
};

const instagram = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
  introspection: true,
});

instagram.listen({ port: localPortsConfig.instagram }).then(({ url }) => {
  console.log(`Instagram service ready at ${url}`);
});
