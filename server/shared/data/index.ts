import { DbFacebook, DbUser, DbGoogle, DbInstagram, DbNetflix } from "./types";
import { createMock } from "../utils";
import { facebook } from "./mocks/facebook";
import { google } from "./mocks/google";
import { instagram } from "./mocks/instagram";
import { netflix } from "./mocks/netflix";
import { users } from "./mocks/users";

export const usersDb = createMock<DbUser>("users", users);
export const facebookDb = createMock<DbFacebook>("facebook", facebook);
export const googleDb = createMock<DbGoogle>("google", google);
export const netflixDb = createMock<DbNetflix>("netflix", netflix);
export const instagramDb = createMock<DbInstagram>("instagram", instagram);
