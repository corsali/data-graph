import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/oura";

createSubgraphServer({
  name: Service.Oura,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
