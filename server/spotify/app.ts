import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/subgraph";

const port = 4005;

const typeDefs = gql`
  type Song {
    id: ID!
    title: String!
    author: String!
  }

  type Spotify {
    likedSongs: [Song]
  }

  extend type User @key(fields: "id") {
    id: ID!
    spotify: Spotify!
  }
`;

const resolvers = {
  User: {
    async spotify(user: any) {
      return { likedSongs: [{ id: "12", title: user.id, author: user.id }] };
    },
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
});

server.listen({ port }).then(({ url }) => {
  console.log(`Spotify service ready at ${url}`);
});
