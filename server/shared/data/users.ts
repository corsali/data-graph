import { User } from "../graphql";
import { createMock, uuid } from "../utils";
import { readFileSync } from "fs";
import { join } from "path";
import faker from "@faker-js/faker";

export type DbUser = Pick<User, "firstName" | "lastName"> & { id: string };

export const createUsersDb = () => {
  let content = "[]";
  try {
    content = readFileSync(join(__dirname, "generated/users.json"), "utf8");
  } catch (error) {}

  const users = JSON.parse(content);

  return createMock<DbUser>("users", users);
};

export const generateUsers = () =>
  new Array(3).fill(0).map(() => ({
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  }));
