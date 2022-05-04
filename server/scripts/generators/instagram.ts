import faker from "@faker-js/faker";
import { DbInstagram } from "../../api/instagram/types";

export const generateInstagram = (
  users: Array<{ id: string }>
): DbInstagram[] =>
  users.map(({ id }) => {
    return {
      userId: id,
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
