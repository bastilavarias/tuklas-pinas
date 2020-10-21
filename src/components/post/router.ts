import express from "express";
import postController from "./controller";
import passport from "passport";
import multer from "../../multer";
const postRouter = express.Router();

postRouter.post(
  "/create-travel-story",
  multer.array("files"),
  passport.authenticate("jwt", { session: false }),
  postController.createTravelStory
);

export default postRouter;