import { SearchHistoryRecordType } from "../../shared";
import faker from "@faker-js/faker";
import { DbGoogle } from "../../domain/google/types";

export const generateGoogle = (users: Array<{ id: string }>): DbGoogle[] =>
  users.map<DbGoogle>(({ id }) => {
    return {
      googlePlayStore: {
        devices: [
          {
            dataAtTimeOfUserPlayActivity: {
              carrierName: "TracFone",
              manufacturer: "samsung",
              modelName: "SM-N960U1",
              deviceName: "crownqlteue",
              productName: "crownqlteue",
              retailBrand: "samsung",
              nativePlatform: ["arm64-v8a", "armeabi-v7a", "armeabi"],
              deviceIpCountry: "US",
              userLocale: "en_US",
              androidSdkVersion: "29",
            },
            deviceRegistrationTime: faker.date.recent(),
            lastTimeDeviceActive: faker.date.recent(),
            mostRecentData: {
              carrierName: "TracFone",
              playStoreClientVersion: 83011910,
              manufacturer: "samsung",
              modelName: "SM-N960U1",
              deviceName: "crownqlteue",
              productName: "crownqlteue",
              retailBrand: "samsung",
              totalMemoryBytes: "5847543808",
              nativePlatform: ["arm64-v8a", "armeabi-v7a", "armeabi"],
              deviceIpCountry: "US",
              userLocale: "en_US",
              buildFingerprint:
                "samsung/crownqlteue/crownqlteue:XX/XX/XX:user/release-keys",
              androidSdkVersion: "29",
            },
            userAddedOnDeviceTime: faker.date.recent(),
          },
        ],
        installs: [
          {
            device: {
              model: "SM-N960U1",
              carrier: "TracFone",
              manufacturer: "samsung",
              deviceDisplayName: "samsung SM-N960U1",
            },
            doc: { documentType: "Android Apps", title: "Candy Crush" },
            firstInstallationTime: faker.date.recent(),
            lastUpdateTime: faker.date.recent(),
          },
        ],
        library: [
          {
            acquisitionTime: faker.date.recent(),
            doc: {
              documentType: "Android Apps",
              title: "Google Play services",
            },
          },
        ],
        purchaseHistory: [
          {
            invoicePrice: "$1.59",
            paymentMethodTitle: "Google Play balance: $1.73",
            userLanguageCode: "en_US",
            userCountry: "US",
            doc: { documentType: "In App Item", title: "Special Offer" },
            purchaseTime: faker.date.recent(),
          },
        ],
        reviews: [
          {
            creationTime: faker.date.recent(),
            document: { documentType: "Android Apps", title: "Candy Crush" },
            starRating: 5,
            comment: "Simple, yet addictive",
          },
        ],
        subscriptions: [
          {
            period: { unit: "MONTH", count: 1 },
            price: "$0.00",
            doc: { documentType: "Subscription", title: "100 GB (Google One)" },
            renewalDate: faker.date.recent(),
            pricing: [
              {
                period: { unit: "MONTH", count: 1 },
                price: "$1.99",
                repeatedPricing: true,
              },
            ],
            state: "Active",
          },
        ],
      },
      maps: {
        starredPlaces: [
          {
            latitude: faker.mersenne.rand(999999999, -999999999),
            longitude: faker.mersenne.rand(999999999, -999999999),
            mapsUrl: "https://goo.gl/maps/DFS424k4TfW8s9A68",
            publishedAt: faker.date.recent(),
            title: faker.word.noun(),
            updatedAt: faker.date.recent(),
          },
        ],
      },
      youtubeAndYoutubeMusic: {
        playlists: [
          {
            channelId: faker.datatype.uuid(),
            playlistId: faker.datatype.uuid(),
            title: faker.word.noun(),
            visibility: "Private",
            createdAt: faker.date.recent(),
            description: faker.lorem.sentence(),
            updatedAt: faker.date.recent(),
          },
        ],
        searchHistory: [
          {
            service: "Youtube",
            queriedAt: faker.date.recent(),
            searchedFor: "avatar",
            url: "https://www.youtube.com/results?search_query=avatar",
            __typename: "YoutubeRegularSearch",
          },
          {
            service: "Youtube Music",
            queriedAt: faker.date.recent(),
            searchedFor: "avatar",
            url: "https://www.youtube.com/results?search_query=avatar",
            __typename: "YoutubeRegularSearch",
          },
          {
            service: "Youtube",
            __typename: "YoutubeImplicitSearch",
            url: "https://youtu.be/TdrL3QxjyVw",
            queriedAt: faker.date.recent(),
            details: "From Google Ads",
            watched: "Lana Del Rey - Summertime Sadness (Official Music Video)",
          },
        ],
        subscriptions: [
          {
            channelId: faker.datatype.uuid(),
            channelTitle: "Enrique Iglesias",
            channelUrl: "https://www.youtube.com/c/EnriqueIglesias",
          },
        ],
        watchHistory: [
          {
            service: "Youtube",
            channelUrl:
              "https://www.youtube.com/channel/UCCZGYab5SpD0I7Z5JqJZgww",
            date: faker.date.recent(),
            url: "https://www.youtube.com/watch?v=dhZTNgAs4Fc",
            watched:
              "My Chemical Romance - Welcome To The Black Parade [Official Music Video] [HD]",
            __typename: "YoutubeWatched",
          },
          {
            service: "Youtube",
            date: faker.date.recent(),
            action: "Served location-based recommendations",
            __typename: "YoutubeMusicVisit",
          },
        ],
      },
      userId: id,
      locationHistory: [
        {
          latitude: faker.mersenne.rand(999999999, -999999999),
          longitude: faker.mersenne.rand(999999999, -999999999),
          timestamp: faker.date.recent(),
        },
      ],
      search: [
        {
          timestamp: faker.date.recent(),
          title: "Gmail - Google",
          type: SearchHistoryRecordType.Visit,
          url: "https://www.google.com/gmail/",
        },
        ...[faker.word.noun(), faker.word.adjective()].map((title) => ({
          title,
          type: SearchHistoryRecordType.Search,
          url: `https://www.google.com/search?q=${title}`,
          timestamp: faker.date.recent(),
        })),
      ],
      calendar: "Coming soon",
    };
  });
