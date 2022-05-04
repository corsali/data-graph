import { instagramDb } from "../../shared";
import * as gqlTypes from "../../shared/graphql";

export const resolvers: gqlTypes.Resolvers = {
  User: {
    async instagram({ id }) {
      return instagramDb.maybeOne({ userId: id });
    },
  },
};
