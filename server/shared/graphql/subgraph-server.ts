import { ApolloServer } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServerPluginInlineTraceDisabled } from "apollo-server-core";
import { localPortsConfig, Service } from "@shared/env";

export type SubgraphServerConfig = {
  name: Service;
  subgraphSchemaConfig: Parameters<typeof buildSubgraphSchema>;
};

export const createSubgraphServer = ({
  name,
  subgraphSchemaConfig,
}: SubgraphServerConfig) => {
  const server = new ApolloServer({
    schema: buildSubgraphSchema(...subgraphSchemaConfig),
    plugins: [ApolloServerPluginInlineTraceDisabled],
    introspection: true,
  });

  server.listen({ port: localPortsConfig[name] }).then(({ url }) => {
    console.log(`${name} service ready at ${url}`);
  });
};
