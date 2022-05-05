import { createSubgraphServer, getTypeDefs, Service } from "../../shared";
import { resolvers } from "../../domain/spotify";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

createSubgraphServer({
  name: Service.Spotify,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
