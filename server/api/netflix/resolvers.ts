import { netflixDb } from "../../shared";
import * as gqlTypes from "../../shared/graphql";

export const resolvers: gqlTypes.Resolvers = {
  User: {
    async netflix({ id: userId }) {
      return netflixDb.maybeOne({ userId });
    },
  },
};
