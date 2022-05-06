/* eslint-disable */
// @ts-nocheck
import { createSubgraphServer, Service } from "../../shared";
import { resolvers, typeDefs } from "../../domain/sanity";

createSubgraphServer({

  name: Service.Sanity,
  subgraphSchemaConfig: [{ typeDefs, resolvers }],
});
