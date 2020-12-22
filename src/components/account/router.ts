import express from "express";
import passport from "passport";
import accountController from "./controller";
const accountRouter = express.Router();

accountRouter.get("/:accountID", accountController.getInformation);

accountRouter.get(
  "/posts/:accountID",
  passport.authenticate("jwt", { session: false }),
  accountController.getPosts
);

accountRouter.get(
  "/discovery-coordination/:accountID",
  passport.authenticate("jwt", { session: false }),
  accountController.getDiscoveryCoordination
);

export default accountRouter;
