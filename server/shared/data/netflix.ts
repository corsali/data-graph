import { Netflix } from "../graphql";
import { createMock } from "../utils";
import { DbUser } from "./users";
import { readFileSync } from "fs";
import { join } from "path";
import faker from "@faker-js/faker";

export type DbNetflix = Netflix & Omit<DbUser, "id"> & { userId: string };

export const generateNetflix = (users: DbUser[]): DbNetflix[] =>
  users.map(({ id, firstName, lastName }) => {
    return {
      userId: id,
      firstName,
      lastName,
      history: [
        {
          cover:
            "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg",
          title: "Home Alone",
          watchedOn: faker.date.past(),
        },
      ],
    };
  });

export const createNetflixDb = () => {
  let content = "[]";
  try {
    content = readFileSync(join(__dirname, "generated/netflix.json"), "utf8");
  } catch (error) {}

  const netflix = JSON.parse(content);

  return createMock<DbNetflix>("netflix", netflix);
};
