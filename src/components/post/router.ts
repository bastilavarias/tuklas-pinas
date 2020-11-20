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
  "/save-travel-story-draft/:postID",
  passport.authenticate("jwt", { session: false }),
  postController.saveTravelStoryDraft
);

postRouter.post(
  "/save-itinerary-draft/:postID",
  passport.authenticate("jwt", { session: false }),
  postController.saveItineraryDraft
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
  "/drafts-preview/travel-story/:authorID",
  passport.authenticate("jwt", { session: false }),
  postController.fetchTravelStoryDraftsPreview
);

postRouter.get(
  "/drafts-preview/itinerary/:authorID",
  passport.authenticate("jwt", { session: false }),
  postController.fetchItineraryDraftsPreview
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

postRouter.get(
  "/travel-story/:postID",
  passport.authenticate("jwt", { session: false }),
  postController.getTravelStoryDetails
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

postRouter.put(
  "/update-files/:postID",
  multer.array("files"),
  passport.authenticate("jwt", { session: false }),
  postController.updateFiles
);

postRouter.put(
  "/update-travel-story-draft/:postID/:isDraft",
  passport.authenticate("jwt", { session: false }),
  postController.updateTravelStoryDraft
);

export default postRouter;
