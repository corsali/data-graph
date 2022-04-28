import { uuid } from "../../utils";
import faker from "@faker-js/faker";
import { DbUser } from "../types";

export const generateUsers = (): DbUser[] =>
  new Array(3).fill(0).map(() => ({
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  }));
