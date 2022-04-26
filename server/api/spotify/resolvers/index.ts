import * as gqlTypes from "../../../shared/graphql";

export const resolvers: gqlTypes.Resolvers = {
  User: {
    async spotify(user: any) {
      return { likedSongs: [{ id: "12", title: user.id, author: user.id }] };
    },
  },
};
