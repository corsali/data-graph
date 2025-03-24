import { getTypeDefs, Telegram } from "../../shared";

export const typeDefs = getTypeDefs(`${__dirname}/schema.graphql`);

export type DbTelegram = Telegram & { userId: string };