import * as gqlTypes from "../../../shared/graphql";

export const resolvers: gqlTypes.Resolvers = {
  Query: {
    async user(_, { id }) {
      return { id: id, name: "asd" };
    },
    async users() {
      return [{ id: "" + Math.random(), name: "asd" }];
    },
  },
};
