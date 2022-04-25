import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { localPortsConfig } from "../../shared";

const typeDefs = gql`
  type User @key(fields: "id") {
    id: ID!
    name: String
  }
  extend type Query {
    user(id: ID!): User
    users: [User]
  }
`;

const resolvers = {
  User: {
    async __resolveReference(ref: any) {
      return { id: ref.id, name: "asd" };
    },
  },
  Query: {
    async user(_: any, { id }: any) {
      return { id: id, name: "asd" };
    },
    async users() {
      return [{ id: "" + Math.random(), name: "asd" }];
    },
  },
};

const core = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
  introspection: true,
});

core.listen({ port: localPortsConfig.core }).then(({ url }) => {
  console.log(`Core service ready at ${url}`);
});
