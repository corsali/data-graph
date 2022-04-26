import { parse } from "graphql";
import * as fs from "fs";

export const getTypeDefs = (filePath: string) =>
  parse(fs.readFileSync(filePath).toString());
