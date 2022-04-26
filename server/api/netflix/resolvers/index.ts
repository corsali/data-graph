import * as gqlTypes from "../../../shared/graphql";

export const resolvers: gqlTypes.Resolvers = {
  User: {
    async netflix(user) {
      return { toWatch: [{ id: "1", title: user.id }] };
    },
  },
};
