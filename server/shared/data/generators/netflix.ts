import faker from "@faker-js/faker";
import { DbNetflix, DbUser } from "../types";

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
