import faker from "@faker-js/faker";
import { DbFacebook } from "../../domain/facebook/types";

export const generateFacebook = (users: Array<{ id: string }>): DbFacebook[] =>
  users.map(({ id }) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    return {
      userId: id,
      adsInformation: {
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
