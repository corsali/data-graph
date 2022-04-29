import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { localRestApiPort, availableCategories } from "../../shared";

const app = express();
app.use(cors({ origin: "*" }));

app.get("/available-categories", (req: Request, res: Response) => {
  res.send(availableCategories);
});

app.listen(localRestApiPort, () => {
  console.log(`Application started on port ${localRestApiPort}`);
});
