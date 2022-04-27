import * as gqlTypes from "../../../shared/graphql";
import { usersDb } from "../../../shared";

export const resolvers: gqlTypes.Resolvers = {
  Query: {
    async user(_, { id }) {
      return usersDb.maybeOne({ id });
    },
    async users() {      
      return usersDb.getAll();
    },
  },
};
