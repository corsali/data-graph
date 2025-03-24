import { createMock } from "../../shared";
import * as gqlTypes from "../../shared/graphql";
import { mockSpotifyData } from "./data";
import { DbSpotify } from "./types";

export const spotifyDb = createMock<DbSpotify>("spotify", mockSpotifyData);
export const resolvers: gqlTypes.Resolvers = {
  User: {
    async spotify({ id: userId }) {
      console.log("Looking up Spotify data for user:", userId);
      const result = spotifyDb.maybeOne({ userId });
      console.log("Found result:", result);
      return result;
    }
  },
};