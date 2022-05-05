import { promises as fs } from "fs";
import { replace } from "ramda";
import {
  generateUsers,
  generateGoogle,
  generateFacebook,
  generateInstagram,
  generateNetflix,
} from "./generators";

const saveData = <T>(type: string, data: T, service?: string) => {
  service = service || type.toLowerCase();
  const filepath = `./api/${service}/data.ts`;

  fs.readFile(filepath).catch(() => {
    const content = `/* eslint-disable */
// @ts-nocheck
import { Db${type} } from "./types";
    
export const mock${type}Data: Db${type}[] = ${replace(
      /"\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)"/g,
      "new Date($&)",
      JSON.stringify(data, null, 2)
    )};
`;
    fs.appendFile(filepath, content).catch((er) => {
      if (er && er.code !== "EEXIST") console.log(service, er);
    });
  });
};

export const generateData = () => {
  const users = generateUsers();
  saveData("User", users, "core");
  saveData("Facebook", generateFacebook(users));
  saveData("Instagram", generateInstagram(users));
  saveData("Google", generateGoogle(users));
  saveData("Netflix", generateNetflix(users));
};

generateData();
