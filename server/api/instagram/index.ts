import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/subgraph";

const port = 4003;

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

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
  introspection: true,
});

server.listen({ port }).then(({ url }) => {
  console.log(`Instagram service ready at ${url}`);
});
