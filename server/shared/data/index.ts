import { createUsersDb } from "./users";
import { createFacebookDb } from "./facebook";
import { createGoogleDb } from "./google";
import { createInstagramDb } from "./instagram";
import { createNetflixDb } from "./netflix";

export const usersDb = createUsersDb(),
  facebookDb = createFacebookDb(),
  googleDb = createGoogleDb(),
  netflixDb = createNetflixDb(),
  instagramDb = createInstagramDb();
