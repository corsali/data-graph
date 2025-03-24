import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";
import { ApolloServerPluginInlineTraceDisabled } from "apollo-server-core";
import { localGatewayPort, serviceList } from "../../shared/env";

// Configure the gateway with proper options for Vercel
const gateway = new ApolloGateway({ 
  serviceList,
  // Add debug mode to get more detailed logs
  debug: process.env.VERCEL ? true : false,
});

const server = new ApolloServer({
  gateway,
  plugins: [ApolloServerPluginInlineTraceDisabled],
  introspection: true,
  // Add a longer timeout for Apollo Server in Vercel
  stopGracePeriodMillis: 1000, // shorter grace period
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

// Only call listen() in non-Vercel environments
if (!process.env.VERCEL) {
  server.listen({ port: localGatewayPort }).then(({ url }: any) => {
    console.log(`Gateway now ready at ${url}`);
  });
}

// For Apollo Server 2.x, export the server directly
module.exports = server;
export default server;
