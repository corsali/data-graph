import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { localPortsConfig } from "../../shared";

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

const spotify = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
  introspection: true,
});

spotify.listen({ port: localPortsConfig.spotify }).then(({ url }) => {
  console.log(`Spotify service ready at ${url}`);
});
