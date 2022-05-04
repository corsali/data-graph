import * as gqlTypes from "../../../shared/graphql";
import { usersDb } from "../../../shared";

export const resolvers: gqlTypes.Resolvers = {
  Query: {
    async users() {      
      return usersDb.getAll();
    },
  },
};
