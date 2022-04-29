import express from "express";
import { Request, Response } from "express";
import { localRestApiPort, availableCategories } from "../../shared";

const app = express();
app.use();

app.get("/", (req: Request, res: Response) => {
  res.send(availableCategories);
});

app.listen(localRestApiPort, () => {
  console.log(`Application started on port ${localRestApiPort}`);
});
