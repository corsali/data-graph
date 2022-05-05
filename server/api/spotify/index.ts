import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/spotify";

createSubgraphServer({
  name: Service.Spotify,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
