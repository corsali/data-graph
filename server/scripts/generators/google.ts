import { SearchHistoryRecordType } from "../../shared";
import faker from "@faker-js/faker";
import { DbGoogle } from "../../api/google/types";

export const generateGoogle = (users: Array<{ id: string }>): DbGoogle[] =>
  users.map(({ id }) => {
    return {
      userId: id,
      locationHistory: [
        {
          latitude: faker.mersenne.rand(999999999, -999999999),
          longitude: faker.mersenne.rand(999999999, -999999999),
          timestamp: faker.date.recent(),
        },
      ],
      search: [
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
