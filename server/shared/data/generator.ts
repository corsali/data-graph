import { promises as fs } from "fs";
import { generateFacebook } from "./facebook";
import { generateGoogle } from "./google";
import { generateInstagram } from "./instagram";
import { generateNetflix } from "./netflix";
import { generateUsers } from "./users";

const saveData = <T>(fileName: string, data: T) => {
  const filepath = `./shared/data/generated/${fileName}.json`;

  fs.readFile(filepath).catch(() =>
    fs.appendFile(filepath, JSON.stringify(data)).catch((er) => {
      if (er && er.code !== "EEXIST") console.log(fileName, er);
    })
  );
};

export const generateData = () => {
  const users = generateUsers();
  saveData("users", users);
  saveData("facebook", generateFacebook(users));
  saveData("instagram", generateInstagram(users));
  saveData("google", generateGoogle(users));
  saveData("netflix", generateNetflix(users));
};

generateData();
