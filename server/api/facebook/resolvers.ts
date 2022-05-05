import * as gqlTypes from "../../shared/graphql";
import { createMock } from "../../shared";
import { mockFacebookData } from "./data";
import { DbFacebook } from "./types";

export const facebookDb = createMock<DbFacebook>("facebook", mockFacebookData);
export const resolvers: gqlTypes.Resolvers = {
  User: {
    async facebook({ id: userId }) {
      return facebookDb.maybeOne({ userId });
    },
  },
  FacebookAttachmentMetadata: {
    __resolveType(obj) {
      return obj.hasOwnProperty("recordedAt")
        ? "FacebookRecordingMetadata"
        : "FacebookPhotoMetadata";
    },
  },
};
