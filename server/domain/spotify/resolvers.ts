import { createMock } from "../../shared";
import * as gqlTypes from "../../shared/graphql";
import { mockSpotifyData } from "./data";
import { DbSpotify } from "./types";

export const spotifyDb = createMock<DbSpotify>("spotify", mockSpotifyData);
export const resolvers: gqlTypes.Resolvers = {
  User: {
    async spotify({ id: userId }) {
      const result = spotifyDb.maybeOne({ userId });
      return result;
    }
  },
};