import { createSubgraphServer, Service } from "../../shared";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

createSubgraphServer({
  name: Service.Instagram,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
