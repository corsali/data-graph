import { Google, SearchHistoryRecordType } from "../graphql";
import { createMock } from "../utils";
import { DbUser } from "./users";
import { readFileSync } from "fs";
import { join } from "path";
import faker from "@faker-js/faker";

export type DbGoogle = Google & Omit<DbUser, "id"> & { userId: string };

export const generateGoogle = (users: DbUser[]): DbGoogle[] =>
  users.map(({ id, firstName, lastName }) => {
    return {
      userId: id,
      firstName,
      lastName,
      locationHistory: [
        {
          latitude: faker.mersenne.rand(999999999, -999999999),
          longitude: faker.mersenne.rand(999999999, -999999999),
          timestamp: faker.date.recent(),
        },
      ],
      searchHistory: [
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

export const createGoogleDb = () => {
  let content = "[]";
  try {
    content = readFileSync(join(__dirname, "generated/google.json"), "utf8");
  } catch (error) {}

  const google = JSON.parse(content);

  return createMock<DbGoogle>("google", google);
};
