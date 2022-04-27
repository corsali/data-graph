import { Instagram } from "../graphql";
import { createMock } from "../utils";
import { DbUser } from "./users";
import { readFileSync } from "fs";
import { join } from "path";
import faker from "@faker-js/faker";

export type DbInstagram = Instagram & Omit<DbUser, "id"> & { userId: string };

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

export const createInstagramDb = () => {
  let content = "[]";
  try {
    content = readFileSync(join(__dirname, "generated/instagram.json"), "utf8");
  } catch (error) {}

  const instagram = JSON.parse(content);

  return createMock<DbInstagram>("instagram", instagram);
};
