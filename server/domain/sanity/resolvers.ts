// DO NOT REMOVE THE COMMENT: This file is created from copyable template
// Replace all occurences of `sanity` in this file with proper service name
import * as gqlTypes from "../../shared/graphql";
import { createMock } from "../../shared";
import { mockSanityData } from "./data";
import { DbSanity } from "./types";

export const sanityDb = createMock<DbSanity>("sanity", mockSanityData);
export const resolvers: gqlTypes.Resolvers = {
  User: {
    async sanityData({ id: userId }: any) {
      return sanityDb.maybeOne({ userId });
    },
  },
} as any;
