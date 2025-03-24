import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/instagram";

const server = createSubgraphServer({
  name: Service.Instagram,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});

export default server;
module.exports = server;
