import { Facebook } from "../graphql";
import { createMock } from "../utils";
import { DbUser } from "./users";
import { readFileSync } from "fs";
import { join } from "path";
import faker from "@faker-js/faker";

export type DbFacebook = Facebook & Omit<DbUser, "id"> & { userId: string };

export const createFacebookDb = () => {
  let content = "[]";
  try {
    content = readFileSync(join(__dirname, "generated/facebook.json"), "utf8");
  } catch (error) {}

  const facebook = JSON.parse(content);

  return createMock<DbFacebook>("facebook", facebook);
};

export const generateFacebook = (users: DbUser[]): DbFacebook[] =>
  users.map(({ id, firstName, lastName }) => {
    return {
      userId: id,
      firstName,
      lastName,
      likedPages: [
        { likedOn: faker.date.recent(), name: faker.company.companyName() },
      ],
      friends: [
        {
          addedOn: faker.date.recent(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        },
        {
          addedOn: faker.date.recent(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        },
        {
          addedOn: faker.date.recent(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        },
      ],
      posts: [
        {
          postedOn: faker.date.recent(),
          post: faker.commerce.productDescription(),
          title: `${firstName} ${lastName} updated his status`,
        },
        {
          postedOn: faker.date.recent(),
          attachments: [
            {
              source: faker.image.nightlife(),
              createdOn: faker.date.recent(),
              title: "Night out with friends",
              metadata: {
                takenAt: faker.date.recent(),
                cameraMake: "Samsung",
                cameraModel: "SM-N960U1",
              },
            },
            {
              createdOn: faker.date.recent(),
              title: 'recording-0001',
              source: 'Source unavailable',
              metadata: { recordedAt: faker.date.recent() },
            },
          ],
          title: `${firstName} ${lastName} added 1 new photo`,
        },
        {
          postedOn: faker.date.recent(),
          attachments: [
            {
              source: faker.image.avatar(),
              createdOn: faker.date.recent(),
              metadata: {
                takenAt: faker.date.recent(),
                cameraMake: "Samsung",
                cameraModel: "SM-N960U1",
              },
            },
          ],
          title: `${firstName} ${lastName} updated his profile picture`,
        },
      ],
    };
  });
