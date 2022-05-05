import { getTypeDefs, WithUserId } from "../../shared";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

export type DbServiceName = WithUserId<any>;
