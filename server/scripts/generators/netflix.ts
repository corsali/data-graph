import faker from "@faker-js/faker";
import { DbNetflix } from "../../api/netflix/types";

export const generateNetflix = (users: Array<{ id: string }>): DbNetflix[] =>
  users.map(({ id }) => {
    return {
      userId: id,
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
