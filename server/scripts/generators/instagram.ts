import faker from "@faker-js/faker";
import { DbInstagram } from "../../domain/instagram/types";

export const generateInstagram = (
  users: Array<{ id: string }>
): DbInstagram[] =>
  users.map<DbInstagram>(({ id }) => {
    return {
      userId: id,
      adsAndBusinesses: {
        advertisersUsingYourActivityOrInformation: [...new Array(3)]
          .fill(0)
          .map(() => ({
            basedOnUploadedList: true,
            basedOnYourInteractions: faker.datatype.boolean(),
            name: faker.word.noun(),
          })),
      },
      adsAndTopics: {
        adsViewed: [...new Array(3)].fill(0).map(() => ({
          author: faker.word.noun(),
          viewedOn: faker.date.recent(),
        })),
        postsViewed: [...new Array(3)].fill(0).map(() => ({
          author: faker.word.noun(),
          viewedOn: faker.date.recent(),
        })),
      },
      informationAboutYou: {
        accountBasedIn: {
          inferredDataPrimaryLocation: "Jacksonville, Florida",
        },
        adsInterests: [
          "Investment",
          "Physical fitness",
          "Real estate",
          "Clothing",
        ],
      },
      yourTopics: {
        yourReelsSentiments: ["Adorable", "Exciting", "Emotional"],
        yourReelsTopics: ["Trick Stunts", "Fandom", "Outdoor Nature"],
        yourTopics: [
          "Trick Stunts",
          "Video Games",
          "Vacation & Leisure Activities",
        ],
      },
      followersAndFollowing: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/instagram",
          followingSince: faker.date.recent(),
        },
        ...[faker.word.noun(), faker.word.noun()].map((name) => ({
          name,
          url: `https://www.instagram.com/${name}`,
          followingSince: faker.date.recent(),
        })),
      ],
    };
  });
