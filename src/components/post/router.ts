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
  "/send-comment/:postID",
  passport.authenticate("jwt", { session: false }),
  postController.sendComment
);

postRouter.post(
  "/send-comment-reply/:commentID",
  passport.authenticate("jwt", { session: false }),
  postController.sendCommentReply
);

postRouter.post(
  "/send-reaction/:postID/:type",
  passport.authenticate("jwt", { session: false }),
  postController.sendReaction
);

postRouter.post(
  "/send-comment-reaction/:commentID/:type",
  passport.authenticate("jwt", { session: false }),
  postController.sendCommentReaction
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
  "/comments/:postID/:sort/:skip",
  passport.authenticate("jwt", { session: false }),
  postController.fetchComments
);

postRouter.get(
  "/soft-details/:postID/:type",
  passport.authenticate("jwt", { session: false }),
  postController.getSoftDetails
);

postRouter.delete(
  "/remove-reaction/:postID",
  passport.authenticate("jwt", { session: false }),
  postController.removeReaction
);

postRouter.delete(
  "/remove-comment-reaction/:commentID",
  passport.authenticate("jwt", { session: false }),
  postController.removeCommentReaction
);

export default postRouter;
