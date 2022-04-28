import * as gqlTypes from "../../../shared/graphql";

export const resolvers: gqlTypes.Resolvers = {
  User: {
    async spotify() {
      return "Coming soon";
    },
  },
};
