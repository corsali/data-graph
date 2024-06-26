import { Facebook, Google, Instagram, Netflix } from "./types";

type NoTypenameKeys<T> = keyof Omit<T, "__typename">;
type NoTypenameKeysObj<T> = Record<NoTypenameKeys<T>, boolean>;

const facebookKeys: NoTypenameKeysObj<Facebook> = {
  friendsAndFollowers: true,
  pages: true,
  posts: true,
  adsInformation: true,
  appsAndWebsitesOffOfFacebook: true,
  facebookNews: true,
  location: true,
  otherLoggedInformation: true,
  facebookMarketplace: true,
  yourTopics: true,
  dating: true,
};
const facebook = Object.keys(facebookKeys) as NoTypenameKeys<Facebook>[];

const googleKeys: NoTypenameKeysObj<Google> = {
  googlePlayStore: true,
  maps: true,
  youtubeAndYoutubeMusic: true,
  locationHistory: true,
  search: true,
};
const google = Object.keys(googleKeys) as NoTypenameKeys<Google>[];

const instagramKeys: NoTypenameKeysObj<Instagram> = {
  followersAndFollowing: true,
  adsAndBusinesses: true,
  adsAndTopics: true,
  informationAboutYou: true,
  yourTopics: true,
};

const instagram = Object.keys(instagramKeys) as NoTypenameKeys<Instagram>[];

const netflixKeys: NoTypenameKeysObj<Netflix> = {
  history: true,
};

const netflix = Object.keys(netflixKeys) as NoTypenameKeys<Netflix>[];

export const availableCategories = {
  facebook,
  google,
  instagram,
  netflix,
};

/**
 * EXAMPLE: copy the snippet below and replace the `example` with proper service name.
 * Add the renamed `exampleService` to the exported `availableCategories`
 */

const exampleServiceKeys: NoTypenameKeysObj<any> = {
  exampleField: true,
};

const exampleService = Object.keys(exampleServiceKeys) as NoTypenameKeys<any>[];
// END EXAMPLE
