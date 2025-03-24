import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/telegram";

const server = createSubgraphServer({
  name: Service.Telegram,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});

export default server;
module.exports = server;
