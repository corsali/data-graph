import { createMock } from "../../shared";
import * as gqlTypes from "../../shared/graphql";
import { mockNetflixData } from "./data";
import { DbNetflix } from "./types";

export const netflixDb = createMock<DbNetflix>("netflix", mockNetflixData);
export const resolvers: gqlTypes.Resolvers = {
  User: {
    async netflix({ id: userId }) {
      return netflixDb.maybeOne({ userId });
    },
  },
};
