import { getTypeDefs, Google } from "../../shared";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

export type DbGoogle = Google & { userId: string };
