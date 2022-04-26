import * as gqlTypes from "../../../shared/graphql";

export const resolvers: gqlTypes.Resolvers = {
  User: {
    async facebook(user) {
      return { likedPages: [{ id: "12", title: user.id }] };
    },
  },
};
