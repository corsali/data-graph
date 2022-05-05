import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/instagram";

createSubgraphServer({
  name: Service.Instagram,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
