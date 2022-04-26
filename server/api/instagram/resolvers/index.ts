import * as gqlTypes from "../../../shared/graphql";

export const resolvers: gqlTypes.Resolvers = {
  User: {
    async instagram(user) {
      return { following: [{ id: "1", title: user.id }] };
    },
  },
};
