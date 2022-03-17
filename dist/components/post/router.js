"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const passport_1 = __importDefault(require("passport"));
const multer_1 = __importDefault(require("../../multer"));
const postRouter = express_1.default.Router();
postRouter.post("/create-travel-story/:postID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.createTravelStory);
postRouter.post("/save-travel-story-draft/:postID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.saveTravelStoryDraft);
postRouter.post("/save-itinerary-draft/:postID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.saveItineraryDraft);
postRouter.post("/create-itinerary/:postID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.createItinerary);
postRouter.post("/send-comment/:postID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.sendComment);
postRouter.post("/send-comment-reply/:commentID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.sendCommentReply);
postRouter.post("/send-reaction/:postID/:type", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.sendReaction);
postRouter.post("/send-comment-reaction/:commentID/:type", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.sendCommentReaction);
postRouter.post("/send-comment-reply-reaction/:replyID/:type", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.sendCommentReplyReaction);
postRouter.post("/upload-files", multer_1.default.array("files"), passport_1.default.authenticate("jwt", { session: false }), controller_1.default.uploadFiles);
postRouter.get("/posts/:sort/:skip", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.fetch);
postRouter.get("/drafts-preview/travel-story/:authorID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.fetchTravelStoryDraftsPreview);
postRouter.get("/drafts-preview/itinerary/:authorID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.fetchItineraryDraftsPreview);
postRouter.get("/comments/:postID/:sort/:skip", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.fetchComments);
postRouter.get("/comment-replies/:commentID/:skip", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.fetchCommentReplies);
postRouter.get("/soft-details/:postID/:type", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.getSoftDetails);
postRouter.get("/travel-story/:postID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.getTravelStoryDetails);
postRouter.get("/itinerary/:postID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.getItineraryDetails);
postRouter.get("/top-categories", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.getTopCategories);
postRouter.delete("/remove-reaction/:postID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.removeReaction);
postRouter.delete("/remove-comment-reaction/:commentID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.removeCommentReaction);
postRouter.delete("/remove-comment-reply-reaction/:replyID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.removeCommentReplyReaction);
postRouter.put("/update-files/:postID", multer_1.default.array("files"), passport_1.default.authenticate("jwt", { session: false }), controller_1.default.updateFiles);
postRouter.put("/update-travel-story-draft/:postID/:isDraft", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.updateTravelStoryDraft);
postRouter.put("/update-itinerary-draft/:postID/:isDraft", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.updateItineraryDraft);
exports.default = postRouter;
//# sourceMappingURL=router.js.map