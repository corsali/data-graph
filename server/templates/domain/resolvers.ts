// DO NOT REMOVE THE COMMENT: This file is created from copyable template
// Replace all occurences of `newService` in this file with proper service name
import * as gqlTypes from "../../shared/graphql";
import { createMock } from "../../shared";
import { mockNewServiceData } from "./data";
import { DbServiceName } from "./types";

export const newServiceDb = createMock<DbServiceName>("newService", mockNewServiceData);
export const resolvers: gqlTypes.Resolvers = {
  User: {
    async newServiceData({ id: userId }: any) {
      return newServiceDb.maybeOne({ userId });
    },
  },
} as any;
