import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/facebook";

createSubgraphServer({
  name: Service.Facebook,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
