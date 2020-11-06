import express from "express";
const profileRouter = express.Router();
import passport from "passport";
import profileController from "./controller";
import multer from "../../multer";

profileRouter.put(
  "/update-details/:profileID",
  passport.authenticate("jwt", { session: false }),
  multer.array("images"),
  profileController.updateDetails
);

export default profileRouter;
