import { Facebook, getTypeDefs } from "../../shared";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

export type DbFacebook = Facebook & { userId: string };
