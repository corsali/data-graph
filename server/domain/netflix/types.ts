import { getTypeDefs, Netflix } from "../../shared";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

export type DbNetflix = Netflix & { userId: string };
