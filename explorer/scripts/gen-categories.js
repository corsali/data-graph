const { readdirSync, statSync, promises: fs } = require("fs");
const { join } = require("path");
const rimraf = require("rimraf");

const getDirectories = (srcpath) => {
  return readdirSync(srcpath).flatMap((file) =>
    statSync(join(srcpath, file)).isDirectory() ? [file] : []
  );
};

const toPascalCase = (otherCased) => {
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
 * Works for data stored in the 'data' folder with each service being in its own subfolder
 * @returns
 */
const dataFolder = "../data";
const getDirectoriesByService = () => {
  return getDirectories(dataFolder).reduce(
    (acc, service) => ({
      ...acc,
      [service]: getDirectories(`${dataFolder}/${service}`).map(toPascalCase),
    }),
    {}
  );
};

const saveData = (data) => {
  const filepath = `./src/shared/categories/categories.ts`;

  const content = `/* eslint-disable */
    
export type Categories = typeof categories;
export type Service = keyof Categories;

export const categories = ${JSON.stringify(data, null, 2)} as const;
`;

  rimraf.sync(filepath);

  fs.appendFile(filepath, content).catch((er) => {
    console.log(er);
  });
};

saveData(getDirectoriesByService());

