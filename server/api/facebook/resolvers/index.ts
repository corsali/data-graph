import * as gqlTypes from "../../../shared/graphql";
import { facebookDb } from "../../../shared";

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
