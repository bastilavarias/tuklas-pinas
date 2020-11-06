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
  "/send-comment-reply-reaction/:replyID/:type",
  passport.authenticate("jwt", { session: false }),
  postController.sendCommentReplyReaction
);

postRouter.post(
  "/upload-files",
  multer.array("files"),
  passport.authenticate("jwt", { session: false }),
  postController.uploadFiles
);

postRouter.get(
  "/posts/:sort/:skip",
  passport.authenticate("jwt", { session: false }),
  postController.fetch
);

postRouter.get(
  "/comments/:postID/:sort/:skip",
  passport.authenticate("jwt", { session: false }),
  postController.fetchComments
);

postRouter.get(
  "/comment-replies/:commentID/:skip",
  passport.authenticate("jwt", { session: false }),
  postController.fetchCommentReplies
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

postRouter.delete(
  "/remove-comment-reply-reaction/:replyID",
  passport.authenticate("jwt", { session: false }),
  postController.removeCommentReplyReaction
);

export default postRouter;
