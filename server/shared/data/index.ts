import { DbFacebook, DbUser, DbGoogle, DbInstagram, DbNetflix } from "./types";
import { createMock } from "../utils";
import { facebook } from "./generated/facebook";
import { google } from "./generated/google";
import { instagram } from "./generated/instagram";
import { netflix } from "./generated/netflix";
import { users } from "./generated/users";

export const usersDb = createMock<DbUser>("users", users);
export const facebookDb = createMock<DbFacebook>("facebook", facebook);
export const googleDb = createMock<DbGoogle>("google", google);
export const netflixDb = createMock<DbNetflix>("netflix", netflix);
export const instagramDb = createMock<DbInstagram>("instagram", instagram);
