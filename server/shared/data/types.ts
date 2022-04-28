import { Facebook, Google, Instagram, Netflix, User } from "../graphql";

export type DbUser = Pick<User, "firstName" | "lastName"> & { id: string };

export type DbFacebook = Facebook & Omit<DbUser, "id"> & { userId: string };

export type DbGoogle = Google & Omit<DbUser, "id"> & { userId: string };

export type DbInstagram = Instagram & Omit<DbUser, "id"> & { userId: string };

export type DbNetflix = Netflix & Omit<DbUser, "id"> & { userId: string };
