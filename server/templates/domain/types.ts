import { getTypeDefs, WithUserId } from "../../shared";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

// replace DbServiceName below with Db<SERVICE_NAME>
export type DbServiceName = WithUserId<any>;
