import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { localRestApiPort, availableCategories } from "../../shared";

const app = express();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send(availableCategories);
});
app.get("/api/", (req: Request, res: Response) => {
  res.send(availableCategories);
});
app.get("/api/categories", (req: Request, res: Response) => {
  res.send(availableCategories);
});

app.listen(localRestApiPort, () => {
  console.log(`Application started on port ${localRestApiPort}`);
});

module.exports = app;
