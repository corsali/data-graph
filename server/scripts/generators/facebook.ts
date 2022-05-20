import faker from "@faker-js/faker";
import { DbFacebook } from "../../domain/facebook/types";

export const generateFacebook = (users: Array<{ id: string }>): DbFacebook[] =>
  users.map(({ id }) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    return {
      userId: id,
      dating: {
        yourDatingActivity: {
          likedCount: 10,
          passedCount: 54,
          recentlyActiveDateRange: {
            start: faker.date.recent(),
            end: faker.date.recent(),
          },
          smiledCount: 0,
          complimentsSent: [],
        },
        yourDatingPreferences: {
          children: "unspecified",
          distance: 80,
          maxAge: 32,
          minAge: 24,
          gender: ["woman"],
          religiousViews: ["unspecified"],
        },
        yourDatingProfile: {
          children: "Doesn't have kids",
          currentCity: "Miami, Florida",
          height: 182,
          hometown: "Miami, Florida",
          additionalLocations: [],
          college: ["University of Miami"],
          company: ["Walmart"],
          gender: ["man"],
          gradSchool: [],
          highSchool: ["Miami Edison Senior High School"],
          hobbies: ["table tennis"],
          jobTitle: ["Associate Manager"],
          photos: [
            {
              createdAt: faker.date.recent(),
              uri: "posts/media/LatestAlbum_qqdso312/iuasd_a91230.jpg",
              metadata: {
                takenAt: faker.date.recent(),
                uploadIp: "12.32.154.34",
              },
            },
          ],
          profilePicture: {
            createdAt: faker.date.recent(),
            uri: "posts/media/Profilepictures_123asd532/123.jpg",
            metadata: {
              takenAt: faker.date.recent(),
              uploadIp: "12.32.154.34",
            },
          },
          profileQuestions: [],
          religiousViews: ["spiritual"],
        },
      },
      yourTopics: {
        yourTopics: [
          "Comedy TV Shows & Movies",
          "Animation TV Shows & Movies",
          "Space",
          "Video Game TV Consoles",
          "Fantasy TV Shows & Movies",
          "Fast Food",
        ],
      },
      facebookMarketplace: {
        itemsSold: [
          {
            title: "Ergonomic Keyboard",
            price: "$20",
            seller: `${firstName} ${lastName}`,
            createdOn: faker.date.recent(),
            updatedOn: faker.date.recent(),
            category: "Electronics & computers",
            marketplace: "United States Marketplace",
            location: {
              latitude: 33.805983,
              longitude: 2.866612,
            },
            description: "Microsoft natural ergonomic keyboard 4000 v1.0",
          },
        ],
        buyerAndSellerRatings: [
          {
            offerText: "Gaming Mouse",
            date: faker.date.recent(),
            title: `${firstName} ${lastName} recommended Tom Parker in marketplace.`,
          },
        ],
      },
      adsInformation: {
        informationYouveSubmittedToAdvertisers: [
          {
            label: "Country",
            value: "US",
          },
        ],
        advertisersUsingYourActivityOrInformation: [
          {
            advertiserName: "The Guardian",
            hasDataFileCustomAudience: false,
            hasInPersonStoreVisit: false,
            hasMarketingCustomAudience: true,
          },
        ],
        advertsInteractedWith: [
          {
            date: faker.date.recent(),
            title: "Free $50 Amazon Gift Card",
            action: "Clicked ad",
          },
          {
            title: "Join Us Today",
            action: "Clicked ad",
            date: faker.date.recent(),
          },
        ],
      },
      appsAndWebsitesOffOfFacebook: {
        postsFromAppsAndWebsites: [
          {
            datePosted: faker.date.recent(),
            title: `${firstName} ${lastName} posted something via Youtube`,
            attachments: [
              {
                name: "Lion King - Circle of Life",
                url: "http://www.youtube.com/watch?v=vX07j9SDFcc&feature=autoshare",
              },
            ],
          },
        ],
        appsAndWebsites: [
          {
            name: "Spotify",
            dateAdded: faker.date.recent(),
            userAppScopedId: "132285489329646",
            category: "active",
          },
        ],
        offFacebookActivity: [
          {
            name: "PayPal - Send, Shop, Manage",
            events: [
              {
                id: "131893216852670",
                type: "ACTIVATE_APP",
                date: faker.date.recent(),
              },
              {
                id: "131893216852670",
                type: "ACTIVATE_APP",
                date: faker.date.recent(),
              },
            ],
          },
        ],
      },
      facebookNews: { locations: ["Paris", "Amman"] },
      location: {
        deviceLocation: {
          spn: "Verizon Wireless",
          countryCode: "310",
        },
        lastLocation: {
          time: faker.date.recent(),
          coordinate: { latitude: 33.805983, longitude: 2.866612 },
        },
        primaryPublicLocation: {
          city: "Al-Aghwat",
          country: "Algier",
          region: "Al-Aghwat",
        },
        timezone: "Americe/New_York",
      },
      otherLoggedInformation: {
        friendPeerGroup: "Established Adult Life",
        adsInterests: [
          "Saturday Night Live",
          "Savings account",
          "Sports",
          "Yacht club",
          "Yachting",
        ],
      },
      pages: [
        { likedOn: faker.date.recent(), name: faker.company.companyName() },
      ],
      friendsAndFollowers: [
        {
          addedOn: faker.date.recent(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        },
        {
          addedOn: faker.date.recent(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        },
        {
          addedOn: faker.date.recent(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        },
      ],
      posts: [
        {
          postedOn: faker.date.recent(),
          post: faker.commerce.productDescription(),
          title: `${firstName} ${lastName} updated his status`,
        },
        {
          postedOn: faker.date.recent(),
          attachments: [
            {
              source: faker.image.nightlife(),
              createdOn: faker.date.recent(),
              title: "Night out with friends",
              metadata: {
                takenAt: faker.date.recent(),
                cameraMake: "Samsung",
                cameraModel: "SM-N960U1",
              },
            },
            {
              createdOn: faker.date.recent(),
              title: "recording-0001",
              source: "Source unavailable",
              metadata: { recordedAt: faker.date.recent() },
            },
          ],
          title: `${firstName} ${lastName} added 1 new photo`,
        },
        {
          postedOn: faker.date.recent(),
          attachments: [
            {
              source: faker.image.avatar(),
              createdOn: faker.date.recent(),
              metadata: {
                takenAt: faker.date.recent(),
                cameraMake: "Samsung",
                cameraModel: "SM-N960U1",
              },
            },
          ],
          title: `${firstName} ${lastName} updated his profile picture`,
        },
      ],
    };
  });
