import { createSubgraphServer, getTypeDefs, Service } from "../../shared";
import { resolvers } from "./resolvers";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

createSubgraphServer({
  name: Service.Netflix,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
