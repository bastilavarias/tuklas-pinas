import express from "express";
import postController from "./controller";
import passport from "passport";
import multer from "../../multer";
const postRouter = express.Router();

postRouter.post(
  "/create-travel-story/:postID",
  passport.authenticate("jwt", { session: false }),
  postController.createTravelStory
);

postRouter.post(
  "/create-itinerary/:postID",
  passport.authenticate("jwt", { session: false }),
  postController.createItinerary
);

postRouter.post(
  "/upload-files",
  multer.array("files"),
  passport.authenticate("jwt", { session: false }),
  postController.uploadFiles
);

postRouter.get(
  "/new-posts/:skip",
  passport.authenticate("jwt", { session: false }),
  postController.fetchNew
);

postRouter.get(
  "/soft-details/:postID/:type",
  passport.authenticate("jwt", { session: false }),
  postController.getSoftDetails
);

export default postRouter;
