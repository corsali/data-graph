import { getTypeDefs, Instagram } from "../../shared";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

export type DbInstagram = Instagram & { userId: string };
