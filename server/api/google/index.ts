import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/google";

const server = createSubgraphServer({
  name: Service.Google,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});

export default server;
module.exports = server;
