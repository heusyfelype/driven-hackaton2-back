import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { mongoConnection } from "./mongoConnection.js";
import questionsRouter from "./routes/questionsRouter.js";

dotenv.config();

const app = express().use(cors()).use(json());

app.use(questionsRouter);

app.listen(process.env.PORT || 5000, () => {
  mongoConnection();
  console.log("Hackaton2 API running!");
});
