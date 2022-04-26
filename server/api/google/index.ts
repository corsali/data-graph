import { createSubgraphServer, Service } from "../../shared";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

createSubgraphServer({
  name: Service.Google,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
