import { prettify } from "graphql-playground-react/lib/utils";
import { store, getQuery as gQ } from "graphql-playground-react";
import { categories } from "@shared/categories";

type PrettierOptions = {
  printWidth: number;
  tabWidth: number;
  useTabs: boolean;
};

export const editorPrettierSettings: PrettierOptions = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
};

export const getQuery = () => gQ(store.getState());

export const getQueriedServices = (query: string) => {
  try {
    return (prettify(query, editorPrettierSettings) as string)
      .split("\n")
      .flatMap((l) => {
        const service = l.replaceAll(" ", "").replaceAll("{", "");
        return l.startsWith("    ") &&
          !l.startsWith("     ") &&
          Object.keys(categories).includes(service)
          ? service
          : [];
      });
  } catch (error) {
    return null;
  }
};
