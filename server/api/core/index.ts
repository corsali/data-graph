import { createSubgraphServer, getTypeDefs, Service } from "../../shared";
import { resolvers } from "../../domain/core";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

createSubgraphServer({
  name: Service.Core,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
