"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("./service"));
const postController = {
    createTravelStory(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const postID = parseInt(request.params.postID) || 0;
                const input = {
                    title: request.body.title || "",
                    text: request.body.text || "",
                    destinationsID: request.body.destinationsID || [],
                    travelEventsID: request.body.travelEventsID || [],
                    categories: request.body.categories || [],
                    files: [],
                };
                const result = yield service_1.default.createTravelStory(postID, input);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    saveTravelStoryDraft(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const postID = parseInt(request.params.postID) || 0;
                const input = {
                    title: request.body.title || "",
                    text: request.body.text || "",
                    destinationsID: request.body.destinationsID || [],
                    travelEventsID: request.body.travelEventsID || [],
                    categories: request.body.categories || [],
                    files: [],
                };
                const result = yield service_1.default.saveTravelStoryDraft(postID, input);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    saveItineraryDraft(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const postID = parseInt(request.params.postID) || 0;
                const input = {
                    title: request.body.title || "",
                    text: request.body.text || "",
                    destinationsID: request.body.destinationsID || [],
                    travelEventsID: request.body.travelEventsID || [],
                    categories: request.body.categories || [],
                    files: [],
                    itinerary: request.body.itinerary || [],
                    review: request.body.review || [],
                };
                const result = yield service_1.default.saveItineraryDraft(postID, input);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    createItinerary(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const postID = parseInt(request.params.postID) || 0;
                const input = {
                    title: request.body.title || "",
                    text: request.body.text || "",
                    destinationsID: request.body.destinationsID || [],
                    travelEventsID: request.body.travelEventsID || [],
                    categories: request.body.categories || [],
                    files: [],
                    itinerary: request.body.itinerary || [],
                    review: request.body.review || [],
                };
                const result = yield service_1.default.createItinerary(postID, input);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    sendComment(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountID = request.user.id;
                const postID = parseInt(request.params.postID) || 0;
                const input = {
                    text: request.body.text || "",
                };
                const result = yield service_1.default.sendComment(accountID, postID, input);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    sendCommentReply(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountID = request.user.id;
                const commentID = parseInt(request.params.commentID) || 0;
                const input = {
                    text: request.body.text || "",
                };
                const result = yield service_1.default.sendCommentReply(accountID, commentID, input);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    sendReaction(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountID = request.user.id;
                const postID = parseInt(request.params.postID) || 0;
                const type = request.params.type || "";
                const result = yield service_1.default.sendReaction(postID, accountID, type);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    sendCommentReaction(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountID = request.user.id;
                const commentID = parseInt(request.params.commentID) || 0;
                const type = request.params.type || "";
                const result = yield service_1.default.sendCommentReaction(commentID, accountID, type);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    sendCommentReplyReaction(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountID = request.user.id;
                const replyID = parseInt(request.params.replyID) || 0;
                const type = request.params.type || "";
                const result = yield service_1.default.sendCommentReplyReaction(replyID, accountID, type);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    fetch(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sort = request.params.sort || "";
                const skip = parseInt(request.params.skip) || 0;
                const result = yield service_1.default.fetch(sort, skip);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    fetchComments(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const postID = parseInt(request.params.postID) || 0;
                const sort = request.params.sort || "";
                const skip = parseInt(request.params.skip) || 0;
                const result = yield service_1.default.fetchComments(postID, sort, skip);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    fetchCommentReplies(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const commentID = parseInt(request.params.commentID) || 0;
                const skip = parseInt(request.params.skip) || 0;
                const result = yield service_1.default.fetchCommentReplies(commentID, skip);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    fetchTravelStoryDraftsPreview(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authorID = parseInt(request.params.authorID) || 0;
                const result = yield service_1.default.fetchTravelStoryDraftsPreview(authorID);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    fetchItineraryDraftsPreview(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authorID = parseInt(request.params.authorID) || 0;
                const result = yield service_1.default.fetchItineraryDraftsPreview(authorID);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    getSoftDetails(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const postID = parseInt(request.params.postID) || 0;
                const type = request.params.type || "";
                const result = yield service_1.default.getSoftDetails(postID, type);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    getTravelStoryDetails(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const postID = parseInt(request.params.postID) || 0;
                const result = yield service_1.default.getTravelStoryDetails(postID);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    getItineraryDetails(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const postID = parseInt(request.params.postID) || 0;
                const result = yield service_1.default.getItineraryDetails(postID);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    getTopCategories(_request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gotCategories = yield service_1.default.getTopCategories();
                response.status(200).json(gotCategories);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    removeReaction(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountID = request.user.id;
                const postID = parseInt(request.params.postID) || 0;
                const result = yield service_1.default.removeReaction(postID, accountID);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    removeCommentReaction(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountID = request.user.id;
                const commentID = parseInt(request.params.commentID) || 0;
                const result = yield service_1.default.removeCommentReaction(commentID, accountID);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    removeCommentReplyReaction(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountID = request.user.id;
                const replyID = parseInt(request.params.replyID) || 0;
                const result = yield service_1.default.removeCommentReplyReaction(replyID, accountID);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    uploadFiles(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountID = request.user.id;
                const files = request.files;
                const result = yield service_1.default.uploadFiles(accountID, files);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    updateFiles(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const postID = parseInt(request.params.postID) || 0;
                const files = request.files;
                const result = yield service_1.default.updateFiles(postID, files);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    updateTravelStoryDraft(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const postID = parseInt(request.params.postID) || 0;
                const isDraft = request.params.isDraft === "true";
                const input = {
                    title: request.body.title || "",
                    text: request.body.text || "",
                    destinationsID: request.body.destinationsID || [],
                    travelEventsID: request.body.travelEventsID || [],
                    categories: request.body.categories || [],
                    files: [],
                };
                const result = yield service_1.default.updateTravelStoryDraft(postID, isDraft, input);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    updateItineraryDraft(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const postID = parseInt(request.params.postID) || 0;
                const isDraft = request.params.isDraft === "true";
                const input = {
                    title: request.body.title || "",
                    text: request.body.text || "",
                    destinationsID: request.body.destinationsID || [],
                    travelEventsID: request.body.travelEventsID || [],
                    categories: request.body.categories || [],
                    files: [],
                    itinerary: request.body.itinerary || [],
                    review: request.body.review || [],
                };
                const result = yield service_1.default.updateItineraryDraft(postID, isDraft, input);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
};
exports.default = postController;
//# sourceMappingURL=controller.js.map