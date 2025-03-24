import { createMock } from "../../shared";
import * as gqlTypes from "../../shared/graphql";
import { mockTelegramData } from "./data";
import { DbTelegram } from "./types";

export const telegramDb = createMock<DbTelegram>("telegram", mockTelegramData);
export const resolvers: gqlTypes.Resolvers = {
  User: {
    async telegram({ id: userId }) {
      const result = telegramDb.maybeOne({ userId });
      return result;
    }
  },
};