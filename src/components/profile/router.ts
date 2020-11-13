import express from "express";
const profileRouter = express.Router();
import passport from "passport";
import profileController from "./controller";
import multer from "../../multer";

profileRouter.put(
  "/update/:profileID",
  passport.authenticate("jwt", { session: false }),
  // multer.array("images"),
  multer.fields([
    { name: "displayImage", maxCount: 1 },
    { name: "coverPhoto", maxCount: 1 },
  ]),
  profileController.update
);

export default profileRouter;
