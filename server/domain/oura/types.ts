import { getTypeDefs, Oura } from "../../shared";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

export type DbOura = Oura & { userId: string };
