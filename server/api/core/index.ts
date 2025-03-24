import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/core";

const server = createSubgraphServer({
  name: Service.Core,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});

export default server;
module.exports = server;
