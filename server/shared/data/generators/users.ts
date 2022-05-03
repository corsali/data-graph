import { uuid } from "../../utils";
import { DbUser } from "../types";

export const generateUsers = (): DbUser[] =>
  new Array(3).fill(0).map(() => ({
    id: uuid(),
  }));
