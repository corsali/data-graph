import { createMock } from "../../shared";
import * as gqlTypes from "../../shared/graphql";
import { mockGoogleData } from "./data";
import { DbGoogle } from "./types";

export const googleDb = createMock<DbGoogle>("google", mockGoogleData);

export const resolvers: gqlTypes.Resolvers = {
  User: {
    async google({ id: userId }) {
      return googleDb.maybeOne({ userId });
    },
  },
};
