import express from "express";
import passport from "passport";
import accountController from "./controller";
const accountRouter = express.Router();

accountRouter.get(
  "/posts/:accountID",
  passport.authenticate("jwt", { session: false }),
  accountController.getPosts
);

export default accountRouter;
