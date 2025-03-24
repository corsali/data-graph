import { createMock } from "../../shared";
import * as gqlTypes from "../../shared/graphql";
import { mockOuraData } from "./data";
import { DbOura } from "./types";

export const ouraDb = createMock<DbOura>("oura", mockOuraData);
export const resolvers: gqlTypes.Resolvers = {
  User: {
    async oura({ id: userId }) {
      const result = ouraDb.maybeOne({ userId });
      return result;
    }
  },
};