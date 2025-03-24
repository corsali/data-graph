import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/telegram";

createSubgraphServer({
  name: Service.Telegram,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
