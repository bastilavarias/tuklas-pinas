import express from "express";
import accountController from "./controller";
const accountRouter = express.Router();

accountRouter.post("/signup", accountController.signup);

export default accountRouter;
