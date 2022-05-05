import express from "express";
import { availableCategories } from "../../../shared";

export const router = express();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send(availableCategories);
});
