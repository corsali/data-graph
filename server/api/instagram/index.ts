import { createSubgraphServer, getTypeDefs, Service } from "../../shared";
import { resolvers } from "../../domain/instagram";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

createSubgraphServer({
  name: Service.Instagram,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
