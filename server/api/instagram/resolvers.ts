import { createMock } from "../../shared";
import * as gqlTypes from "../../shared/graphql";
import { mockInstagramData } from "./data";
import { DbInstagram } from "./types";


export const instagramDb = createMock<DbInstagram>(
  "instagram",
  mockInstagramData
);

export const resolvers: gqlTypes.Resolvers = {
  User: {
    async instagram({ id }) {
      return instagramDb.maybeOne({ userId: id });
    },
  },
};
