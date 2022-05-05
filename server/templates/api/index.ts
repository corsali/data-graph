/* eslint-disable */
// @ts-nocheck
import { createSubgraphServer, Service } from "../../shared";
// replace <SERVICE_NAME> with a proper service name 
import { resolvers, typeDefs } from "../../domain/<SERVICE_NAME>";

createSubgraphServer({
  // 1. go to `server/shared/env/index.ts`
  // 2. add `<SERVICE_NAME>: "service_name",` to `Service` enum
  // 3. add `[Service.<SERVICE_NAME>]: <next unused number, eg. 4006>` to `localPortsConfig` object
  // 4. replace `MyService` in the following line with correct service name added in step 2.
  name: Service.MyService,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
