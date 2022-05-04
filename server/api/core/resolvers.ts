import { createMock } from "../../shared";
import * as gqlTypes from "../../shared/graphql";
import { mockUserData } from "./data";
import { DbUser } from "./types";

export const usersDb = createMock<DbUser>("users", mockUserData);

export const resolvers: gqlTypes.Resolvers = {
  Query: {
    async users() {
      return usersDb.getAll();
    },
  },
};
