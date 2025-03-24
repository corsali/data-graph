import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/netflix";

const server = createSubgraphServer({
  name: Service.Netflix,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});

export default server;
module.exports = server;
