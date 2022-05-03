import { Facebook, Google, Instagram, Netflix, User } from "../graphql";

export type DbUser = Pick<User, "id">;

export type DbFacebook = Facebook & { userId: string };

export type DbGoogle = Google & { userId: string };

export type DbInstagram = Instagram & { userId: string };

export type DbNetflix = Netflix & { userId: string };
