import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const port = 4100;

const gateway = new ApolloGateway({
  // serviceList: [
  //   { name: "core", url: "http://localhost:4000" },
  //   { name: "facebook", url: "http://localhost:4001" },
  //   { name: "google", url: "http://localhost:4002" },
  //   { name: "instagram", url: "http://localhost:4003" },
  //   { name: "netflix", url: "http://localhost:4004" },
  //   { name: "spotify", url: "http://localhost:4005" },
  // ],
  serviceList: [
    {
      name: "core",
      url: "https://server-5j7w01ne8-corsali.vercel.app/api/core",
    },
    {
      name: "facebook",
      url: "https://server-5j7w01ne8-corsali.vercel.app/api/facebook",
    },
    {
      name: "google",
      url: "https://server-5j7w01ne8-corsali.vercel.app/api/google",
    },
    {
      name: "instagram",
      url: "https://server-5j7w01ne8-corsali.vercel.app/api/instagram",
    },
    {
      name: "netflix",
      url: "https://server-5j7w01ne8-corsali.vercel.app/api/netflix",
    },
    {
      name: "spotify",
      url: "https://server-5j7w01ne8-corsali.vercel.app/api/spotify",
    },
  ],
});

const server = new ApolloServer({
  gateway,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  // introspection: true,
});

server.listen({ port }).then(({ url }: any) => {
  console.log(`Gateway ready at ${url}`);
});
