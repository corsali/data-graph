import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/core";

createSubgraphServer({
  name: Service.Core,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
