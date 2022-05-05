/* eslint-disable */
// @ts-nocheck
import { createSubgraphServer, getTypeDefs, Service } from "../../shared";
import { resolvers } from "../../domain/facebook";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

createSubgraphServer({
  // 1. go to `server/shared/env/index.ts`
  // 2. add `<SERVICE_NAME>: "service_name",` to `Service` enum
  // 3. add `[Service.<SERVICE_NAME>]: <next unused number, eg. 4006>` to `localPortsConfig` object 
  // 4. replace `MyService` in the following line with correct service name added in step 2.
  name: Service.MyService,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
