import { readdirSync, statSync, promises as fs } from "fs";
import { join } from "path";
import rimraf from "rimraf";

const getDirectories = (srcpath: string) => {
  return readdirSync(srcpath).flatMap((file) =>
    statSync(join(srcpath, file)).isDirectory() ? [file] : []
  );
};

const toPascalCase = (otherCased: string) => {
  return otherCased
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w*)/, "g"),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
};

/**
 * Works for data stored in the '../data' folder with each service being in its own subfolder
 * @returns
 */
const getDirectoriesByService = () => {
  return getDirectories("../data").reduce(
    (acc, service) => ({
      ...acc,
      [service]: getDirectories(`../data/${service}`).map(toPascalCase),
    }),
    {}
  );
};

const saveData = <T>(data: T) => {
  const filepath = `./shared/data/categories.ts`;

  const content = `/* eslint-disable */
    
export type Categories = typeof categories
export const categories = ${JSON.stringify(data, null, 2)} as const;
`;

  rimraf.sync(filepath);

  fs.appendFile(filepath, content).catch((er) => {
    console.log(er);
  });
};

saveData(getDirectoriesByService());
