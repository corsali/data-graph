import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const port = 4100;

const gateway = new ApolloGateway({
  serviceList: [
    { name: "core", url: "http://localhost:4000" },
    { name: "facebook", url: "http://localhost:4001" },
    { name: "google", url: "http://localhost:4002" },
    { name: "instagram", url: "http://localhost:4003" },
    { name: "netflix", url: "http://localhost:4004" },
    { name: "spotify", url: "http://localhost:4005" },
  ],
});

const server = new ApolloServer({
  gateway,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

server.listen({ port }).then(({ url }: any) => {
  console.log(`Gateway ready at ${url}`);
});
