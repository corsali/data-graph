import { getTypeDefs, Spotify } from "../../shared";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

export type DbSpotify = Spotify & { userId: string };
