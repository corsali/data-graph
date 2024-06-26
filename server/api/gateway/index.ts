import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";
import { ApolloServerPluginInlineTraceDisabled } from "apollo-server-core";
import { localGatewayPort, serviceList } from "../../shared/env";

const gateway = new ApolloGateway({ serviceList });

const server = new ApolloServer({
  gateway,
  plugins: [ApolloServerPluginInlineTraceDisabled],
  introspection: true,
  formatResponse: (res) =>
    res.data
      ? {
          ...res,
          data: {
            NOTICE:
              "Please note that the data displayed is generated automatically and does not come from real users",
            ...res.data,
          },
        }
      : res,
});

server.listen({ port: localGatewayPort }).then(({ url }: any) => {
  console.log(`Gateway now ready at ${url}`);
});
