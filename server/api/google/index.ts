import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/subgraph";

const port = 4002;

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
      
      return { searchHistory: ['recipe pancakes', 'capital of Indonesia', user.id] };
    },
  },
};

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
  introspection: true,
});

server.listen({ port }).then(({ url }) => {
  console.log(`Google service ready at ${url}`);
});
