import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/netflix";

createSubgraphServer({
  name: Service.Netflix,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
