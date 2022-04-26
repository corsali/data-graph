import * as gqlTypes from "../../../shared/graphql";

export const resolvers: gqlTypes.Resolvers = {
  User: {
    async google(user) {
      return {
        searchHistory: [
          {
            url: "asd",
            type: gqlTypes.SearchHistoryRecordType.Search,
            title: "qwe",
          },
        ],
        locationHistory: [
          { accuracy: "Coming soon", latitude: 1, longitude: 1 },
        ],
      };
    },
  },
};
