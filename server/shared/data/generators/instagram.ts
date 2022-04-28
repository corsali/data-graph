import faker from "@faker-js/faker";
import { DbInstagram, DbUser } from "../types";

export const generateInstagram = (users: DbUser[]): DbInstagram[] =>
  users.map(({ id, firstName, lastName }) => {
    return {
      userId: id,
      firstName,
      lastName,
      following: [
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
