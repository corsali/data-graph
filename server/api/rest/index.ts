import express from "express";
import cors from "cors";
import helmet from "helmet";
import { localRestApiPort } from "../../shared";
import { categoriesRouter } from "../../domain/rest";

const app = express();
app.use(cors());
app.use(helmet());

app.use("/api/rest/categories", categoriesRouter);

app.listen(localRestApiPort, () => {
  console.log(`Application started on port ${localRestApiPort}`);
});

module.exports = app;
