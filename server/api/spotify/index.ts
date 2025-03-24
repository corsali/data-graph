import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/spotify";

const server = createSubgraphServer({
  name: Service.Spotify,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});

export default server;
module.exports = server;
