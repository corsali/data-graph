import { DbUser } from "../../domain/core/types";
import { uuid } from "../../shared";

export const generateUsers = (): DbUser[] =>
  new Array(3).fill(0).map(() => ({
    id: uuid(),
  }));
