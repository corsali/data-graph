import { promises as fs } from "fs";
import { replace } from "ramda";
import {
  generateFacebook,
  generateGoogle,
  generateInstagram,
  generateNetflix,
  generateUsers,
} from "./generators";

const saveData = <T>(type: string, data: T) => {
  const fileName = type.toLowerCase();
  const filepath = `./shared/data/mocks/${fileName}.ts`;

  fs.readFile(filepath).catch(() => {
    const content = `/* eslint-disable */
import { Db${type} } from '../types';
    
export const ${fileName}: Db${type}[] = ${replace(
      /"\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)"/g,
      "new Date($&)",
      JSON.stringify(data, null, 2)
    )};
`;
    fs.appendFile(filepath, content).catch((er) => {
      if (er && er.code !== "EEXIST") console.log(fileName, er);
    });
  });
};

export const generateData = () => {
  const users = generateUsers();
  saveData("Users", users);
  saveData("Facebook", generateFacebook(users));
  saveData("Instagram", generateInstagram(users));
  saveData("Google", generateGoogle(users));
  saveData("Netflix", generateNetflix(users));
};

generateData();
