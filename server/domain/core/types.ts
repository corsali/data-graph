import { getTypeDefs, User } from "../../shared";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

export type DbUser = Pick<User, "id">;
