import { googleDb } from "../../../shared";
import * as gqlTypes from "../../../shared/graphql";

export const resolvers: gqlTypes.Resolvers = {
  User: {
    async google({ id: userId }) {      
      return googleDb.maybeOne({ userId });
    },
  },
};
