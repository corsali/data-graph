import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/oura";

const server = createSubgraphServer({
  name: Service.Oura,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});

export default server;
module.exports = server;
