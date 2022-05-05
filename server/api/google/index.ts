import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/google";

createSubgraphServer({
  name: Service.Google,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
