import { createSubgraphServer, getTypeDefs, Service } from "../../shared";
import { resolvers } from "../../domain/google";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

createSubgraphServer({
  name: Service.Google,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
