import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/subgraph";

const port = 4001;

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

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
});

server.listen({ port }).then(({ url }) => {
  console.log(`Facebook service ready at ${url}`);
});
