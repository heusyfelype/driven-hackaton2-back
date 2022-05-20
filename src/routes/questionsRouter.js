import { Router } from "express";

import { getQuestions } from "../controllers/questionsController.js";

const questionsRouter = Router();

questionsRouter.get("/questions", getQuestions);

export default questionsRouter;
