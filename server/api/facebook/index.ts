import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/facebook";

const server = createSubgraphServer({
  name: Service.Facebook,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});

export default server;
module.exports = server;
