import * as gqlTypes from "../../../shared/graphql";

export const resolvers: gqlTypes.Resolvers = {
  User: {
    async google(user) {
      return {
        searchHistory: ["recipe pancakes", "capital of Indonesia", user.id],
      };
    },
  },
};
