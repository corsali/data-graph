import { prettify } from "graphql-playground-react/lib/utils";
import { store, getSettings, getQuery as gQ } from "graphql-playground-react";
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
const getQueryLines = () =>
  // ugly, but Playground doesn't provide any sensible way of getting this data
  [
    ...document.getElementsByClassName("CodeMirror-code")[0].children,
  ].map((c, i) => (c.textContent || "").replace(i + 1 + "", ""));

export const getQuery = () => gQ(store.getState());

export const getQueriedServices = (query: string) => {
  try {
    return (prettify(query, editorPrettierSettings) as string)
      .split("\n")
      .flatMap((l) =>
        l.startsWith("    ") &&
        !l.startsWith("     ") &&
        Object.keys(categories).includes(l.slice(4, -2))
          ? l.slice(4, -2)
          : []
      );
  } catch (error) {
    return null;
  }
};
