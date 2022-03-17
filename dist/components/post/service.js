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
const service_1 = __importDefault(require("../cloudinary/service"));
const model_1 = __importDefault(require("./model"));
const service_2 = __importDefault(require("../utility/service"));
const postService = {
    createTravelStory(postID, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateDetailsInput = {
                title: input.title,
                text: input.text,
                type: "travel-story",
                isDraft: false,
                accountID: 0,
            };
            const updatedDetails = yield model_1.default.updateDetails(postID, updateDetailsInput);
            yield this.saveDestinations(updatedDetails.id, input.destinationsID);
            yield this.saveCategories(updatedDetails.id, input.categories);
            yield this.saveTravelEvents(updatedDetails.id, input.travelEventsID);
            return model_1.default.getTravelStoryDetails(updatedDetails.id);
        });
    },
    saveTravelStoryDraft(postID, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateDetailsInput = {
                title: input.title,
                text: input.text,
                type: "travel-story",
                isDraft: true,
                accountID: 0,
            };
            const updatedDetails = yield model_1.default.updateDetails(postID, updateDetailsInput);
            yield this.saveDestinations(updatedDetails.id, input.destinationsID);
            yield this.saveCategories(updatedDetails.id, input.categories);
            yield this.saveTravelEvents(updatedDetails.id, input.travelEventsID);
            return model_1.default.getTravelStoryDetails(updatedDetails.id);
        });
    },
    saveItineraryDraft(postID, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateDetailsPayload = {
                title: input.title,
                text: input.text,
                type: "itinerary",
                isDraft: true,
                accountID: 0,
            };
            const updatedDetails = yield model_1.default.updateDetails(postID, updateDetailsPayload);
            yield this.saveDestinations(updatedDetails.id, input.destinationsID);
            yield this.saveCategories(updatedDetails.id, input.categories);
            yield this.saveTravelEvents(updatedDetails.id, input.travelEventsID);
            yield this.saveReview(updatedDetails.id, input.review);
            yield this.saveItineraryDetails(updatedDetails.id, input.itinerary);
            return model_1.default.getItineraryDetails(updatedDetails.id);
        });
    },
    createItinerary(postID, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateDetailsInput = {
                title: input.title,
                text: input.text,
                type: "itinerary",
                isDraft: false,
                accountID: 0,
            };
            const updatedDetails = yield model_1.default.updateDetails(postID, updateDetailsInput);
            yield this.saveDestinations(updatedDetails.id, input.destinationsID);
            yield this.saveCategories(updatedDetails.id, input.categories);
            yield this.saveTravelEvents(updatedDetails.id, input.travelEventsID);
            yield this.saveItineraryDetails(updatedDetails.id, input.itinerary);
            yield this.saveReview(updatedDetails.id, input.review);
            return model_1.default.getItineraryDetails(updatedDetails.id);
        });
    },
    sendComment(accountID, postID, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const saveCommentInput = {
                accountID,
                postID,
                text: input.text,
            };
            return yield model_1.default.saveComment(saveCommentInput);
        });
    },
    sendCommentReply(accountID, commentID, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const saveCommentInput = {
                accountID,
                commentID,
                text: input.text,
            };
            return yield model_1.default.saveCommentReply(saveCommentInput);
        });
    },
    sendReaction(postID, accountID, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotReaction = yield model_1.default.getReactionByPostIDAndAccountID(postID, accountID);
            if (gotReaction) {
                yield model_1.default.deleteReaction(gotReaction.id);
                return gotReaction;
            }
            return yield model_1.default.saveReaction(postID, accountID, type);
        });
    },
    sendCommentReaction(commentID, accountID, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotReaction = yield model_1.default.getCommentReactionByCommentIDAndAccountID(commentID, accountID);
            if (gotReaction) {
                yield model_1.default.deleteCommentReaction(gotReaction.id);
                return gotReaction;
            }
            return yield model_1.default.saveCommentReaction(commentID, accountID, type);
        });
    },
    sendCommentReplyReaction(replyID, accountID, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotReaction = yield model_1.default.getCommentReactionByReplyIDAndAccountID(replyID, accountID);
            if (gotReaction) {
                yield model_1.default.deleteCommentReplyReaction(gotReaction.id);
                return gotReaction;
            }
            return yield model_1.default.saveCommentReplyReaction(replyID, accountID, type);
        });
    },
    removeReaction(postID, accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotReaction = yield model_1.default.getReactionByPostIDAndAccountID(postID, accountID);
            if (gotReaction) {
                yield model_1.default.deleteReaction(gotReaction.id);
                return {
                    isRemoved: true,
                };
            }
            return {
                isRemoved: false,
            };
        });
    },
    removeCommentReaction(commentID, accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotReaction = yield model_1.default.getCommentReactionByCommentIDAndAccountID(commentID, accountID);
            if (gotReaction) {
                yield model_1.default.deleteCommentReaction(gotReaction.id);
                return {
                    isRemoved: true,
                };
            }
            return {
                isRemoved: false,
            };
        });
    },
    removeCommentReplyReaction(replyID, accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotReaction = yield model_1.default.getCommentReactionByReplyIDAndAccountID(replyID, accountID);
            if (gotReaction) {
                yield model_1.default.deleteCommentReplyReaction(gotReaction.id);
                return {
                    isRemoved: true,
                };
            }
            return {
                isRemoved: false,
            };
        });
    },
    fetch(sort, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            if (sort === "new")
                return yield model_1.default.fetchNew(skip);
            if (sort === "relevant")
                return yield model_1.default.fetchRelevant(skip);
            if (sort === "trending")
                return yield model_1.default.fetchTrending(skip);
            return [];
        });
    },
    fetchComments(postID, sort, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            if (sort === "new")
                return model_1.default.fetchNewComments(postID, skip);
            if (sort === "relevant")
                return model_1.default.fetchRelevantComments(postID, skip);
            return [];
        });
    },
    fetchCommentReplies(commentID, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.default.fetchCommentReplies(commentID, skip);
        });
    },
    fetchTravelStoryDraftsPreview(authorID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.default.fetchTravelStoryDraftsPreview(authorID);
        });
    },
    fetchItineraryDraftsPreview(authorID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.default.fetchItineraryDraftsPreview(authorID);
        });
    },
    getSoftDetails(postID, type) {
        return __awaiter(this, void 0, void 0, function* () {
            return type === "travel-story"
                ? yield this.getTravelStoryDetails(postID)
                : yield this.getItineraryDetails(postID);
        });
    },
    getTravelStoryDetails(postID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.default.getTravelStoryDetails(postID);
        });
    },
    getItineraryDetails(postID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.default.getItineraryDetails(postID);
        });
    },
    getTopCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.default.getTopCategories();
        });
    },
    uploadFiles(accountID, files) {
        return __awaiter(this, void 0, void 0, function* () {
            const savePostDetailsInput = {
                title: "",
                text: "",
                type: "",
                isDraft: false,
                accountID,
            };
            const savedPostDetails = yield model_1.default.saveDetails(savePostDetailsInput);
            yield this.saveFiles(savedPostDetails.id, files);
            return model_1.default.getRawDetails(savedPostDetails.id);
        });
    },
    saveDestinations(postID, destinationsID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(destinationsID.map((id) => __awaiter(this, void 0, void 0, function* () {
                const saveDestinationInput = {
                    postID,
                    destinationID: id,
                };
                yield model_1.default.saveDestination(saveDestinationInput);
            })));
        });
    },
    saveCategories(postID, categories) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(categories.map((name) => __awaiter(this, void 0, void 0, function* () {
                const saveCategoryInput = {
                    postID,
                    name,
                };
                if (name)
                    yield model_1.default.saveCategory(saveCategoryInput);
            })));
        });
    },
    saveTravelEvents(postID, travelEventsID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(travelEventsID.map((id) => __awaiter(this, void 0, void 0, function* () {
                const saveTravelEventInput = {
                    postID,
                    travelEventID: id,
                };
                yield model_1.default.saveTravelEvent(saveTravelEventInput);
            })));
        });
    },
    saveFiles(postID, files) {
        return __awaiter(this, void 0, void 0, function* () {
            const cloudinaryFolder = "posts";
            const uploadedFilesMeta = yield Promise.all(files.map((file) => __awaiter(this, void 0, void 0, function* () { return yield service_1.default.upload(file, cloudinaryFolder); })));
            yield Promise.all(uploadedFilesMeta.map((meta) => __awaiter(this, void 0, void 0, function* () {
                const fileData = yield files.find((file) => file.filename === meta.fileName);
                const payload = {
                    publicID: meta.publicID,
                    name: fileData.originalname,
                    fileName: "",
                    url: meta.url,
                    size: fileData.size,
                    type: fileData.mimetype,
                    format: service_2.default.selectFileFormat(fileData.mimetype),
                };
                yield model_1.default.saveFile(postID, payload);
            })));
        });
    },
    saveItineraryDetails(postID, itinerary) {
        return __awaiter(this, void 0, void 0, function* () {
            const saveItineraryPayload = {
                postID,
                totalDestinations: itinerary.totalDestinations,
                totalExpenses: itinerary.totalExpenses,
            };
            const savedPostItinerary = yield model_1.default.saveItinerary(saveItineraryPayload);
            yield Promise.all(itinerary.days.map((item) => __awaiter(this, void 0, void 0, function* () {
                const saveDayPayload = {
                    postItineraryID: savedPostItinerary.id,
                    date: item.date,
                    day: item.day,
                    destinationsCount: item.destinationsCount,
                    expenses: item.expenses,
                };
                const savedItineraryDay = yield model_1.default.saveItineraryDay(saveDayPayload);
                yield Promise.all(item.timestamps.map((timestamp) => __awaiter(this, void 0, void 0, function* () {
                    const saveTimestampPayload = {
                        postItineraryDayID: savedItineraryDay.id,
                        time: timestamp.time,
                        transportation: timestamp.transportation,
                        fare: timestamp.fare,
                        expenses: timestamp.expenses,
                        otherDetails: timestamp.otherDetails,
                        destinationID: timestamp.destinationID,
                    };
                    const savedItineraryDayTimestamp = yield model_1.default.saveItineraryDayTimestamp(saveTimestampPayload);
                    timestamp.interests.map((name) => __awaiter(this, void 0, void 0, function* () {
                        return yield model_1.default.saveItineraryDayTimestampInterest(savedItineraryDayTimestamp.id, name);
                    }));
                })));
            })));
        });
    },
    updateItineraryDetails(itineraryID, itinerary) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateItineraryPayload = {
                totalDestinations: itinerary.totalDestinations,
                totalExpenses: itinerary.totalExpenses,
                days: itinerary.days,
            };
            yield model_1.default.updateItinerary(itineraryID, updateItineraryPayload);
            yield Promise.all(itinerary.days.map((item) => __awaiter(this, void 0, void 0, function* () {
                const saveDayPayload = {
                    postItineraryID: itineraryID,
                    date: item.date,
                    day: item.day,
                    destinationsCount: item.destinationsCount,
                    expenses: item.expenses,
                };
                const savedItineraryDay = yield model_1.default.saveItineraryDay(saveDayPayload);
                yield Promise.all(item.timestamps.map((timestamp) => __awaiter(this, void 0, void 0, function* () {
                    const saveTimestampPayload = {
                        postItineraryDayID: savedItineraryDay.id,
                        time: timestamp.time,
                        transportation: timestamp.transportation,
                        fare: timestamp.fare,
                        expenses: timestamp.expenses,
                        otherDetails: timestamp.otherDetails,
                        destinationID: timestamp.destinationID,
                    };
                    const savedItineraryDayTimestamp = yield model_1.default.saveItineraryDayTimestamp(saveTimestampPayload);
                    timestamp.interests.map((name) => __awaiter(this, void 0, void 0, function* () {
                        return yield model_1.default.saveItineraryDayTimestampInterest(savedItineraryDayTimestamp.id, name);
                    }));
                })));
            })));
        });
    },
    saveReview(postID, review) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedInternetAccessReview = yield model_1.default.saveInternetAccessReview(review.internetAccess);
            const savedFinanceReview = yield model_1.default.saveFinanceReview(review.finance);
            const saveReviewInput = {
                postID,
                postInternetAccessReviewID: savedInternetAccessReview.id,
                postFinanceReviewID: savedFinanceReview.id,
            };
            const savedReview = yield model_1.default.saveReview(saveReviewInput);
            yield Promise.all(review.restaurants.map((restaurant) => __awaiter(this, void 0, void 0, function* () { return yield model_1.default.saveRestaurantReview(savedReview.id, restaurant); })));
            yield Promise.all(review.lodgings.map((lodging) => __awaiter(this, void 0, void 0, function* () { return yield model_1.default.saveLodgingReview(savedReview.id, lodging); })));
            yield Promise.all(review.transportation.map((item) => __awaiter(this, void 0, void 0, function* () { return yield model_1.default.saveTransportationReview(savedReview.id, item); })));
            yield Promise.all(review.activities.map((activity) => __awaiter(this, void 0, void 0, function* () { return yield model_1.default.saveActivityReview(savedReview.id, activity); })));
            yield Promise.all(review.tips.map((tip) => __awaiter(this, void 0, void 0, function* () { return yield model_1.default.saveTipReview(savedReview.id, tip); })));
            yield Promise.all(review.avoids.map((avoid) => __awaiter(this, void 0, void 0, function* () { return yield model_1.default.saveAvoidReview(savedReview.id, avoid); })));
        });
    },
    updateReview(postID, review) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotReviewRawDetails = yield model_1.default.getReviewRawDetailsByPostID(postID);
            yield model_1.default.deleteReviewRestaurants(gotReviewRawDetails.id);
            yield model_1.default.deleteReviewLodgings(gotReviewRawDetails.id);
            yield model_1.default.deletePostReviewTransportation(gotReviewRawDetails.id);
            yield model_1.default.deletePostReviewActivities(gotReviewRawDetails.id);
            yield model_1.default.deletePostReviewTips(gotReviewRawDetails.id);
            yield model_1.default.deletePostReviewAvoids(gotReviewRawDetails.id);
            yield model_1.default.updateInternetAccessReview(gotReviewRawDetails.internetAccessID, review.internetAccess);
            yield model_1.default.updateFinanceReview(gotReviewRawDetails.financeID, review.finance);
            yield Promise.all(review.restaurants.map((restaurant) => __awaiter(this, void 0, void 0, function* () {
                return yield model_1.default.saveRestaurantReview(gotReviewRawDetails.id, restaurant);
            })));
            yield Promise.all(review.lodgings.map((lodging) => __awaiter(this, void 0, void 0, function* () { return yield model_1.default.saveLodgingReview(gotReviewRawDetails.id, lodging); })));
            yield Promise.all(review.transportation.map((item) => __awaiter(this, void 0, void 0, function* () { return yield model_1.default.saveTransportationReview(gotReviewRawDetails.id, item); })));
            yield Promise.all(review.activities.map((activity) => __awaiter(this, void 0, void 0, function* () { return yield model_1.default.saveActivityReview(gotReviewRawDetails.id, activity); })));
            yield Promise.all(review.tips.map((tip) => __awaiter(this, void 0, void 0, function* () { return yield model_1.default.saveTipReview(gotReviewRawDetails.id, tip); })));
            yield Promise.all(review.avoids.map((avoid) => __awaiter(this, void 0, void 0, function* () { return yield model_1.default.saveAvoidReview(gotReviewRawDetails.id, avoid); })));
        });
    },
    updateFiles(postID, files) {
        return __awaiter(this, void 0, void 0, function* () {
            if (files.length > 1) {
                const gotFiles = yield model_1.default.getFiles(postID);
                yield Promise.all(gotFiles.map((file) => __awaiter(this, void 0, void 0, function* () { return yield service_1.default.delete(file.publicID); })));
                yield model_1.default.deleteFiles(postID);
                yield this.saveFiles(postID, files);
            }
            return model_1.default.getRawDetails(postID);
        });
    },
    updateTravelStoryDraft(postID, isDraft, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateDetailsInput = {
                title: input.title,
                text: input.text,
                type: "travel-story",
                isDraft,
                accountID: 0,
            };
            const updatedDetails = yield model_1.default.updateDetails(postID, updateDetailsInput);
            yield model_1.default.deleteDestinations(updatedDetails.id);
            yield model_1.default.deleteCategories(updatedDetails.id);
            yield model_1.default.deleteTravelEvents(updatedDetails.id);
            yield this.saveDestinations(updatedDetails.id, input.destinationsID);
            yield this.saveCategories(updatedDetails.id, input.categories);
            yield this.saveTravelEvents(updatedDetails.id, input.travelEventsID);
            return yield model_1.default.getTravelStoryDetails(updatedDetails.id);
        });
    },
    updateItineraryDraft(postID, isDraft, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateDetailsPayload = {
                title: input.title,
                text: input.text,
                type: "itinerary",
                isDraft,
                accountID: 0,
            };
            const updatedDetails = yield model_1.default.updateDetails(postID, updateDetailsPayload);
            const gotItineraryRawDetails = yield model_1.default.getItineraryRawDetailsByPostID(updatedDetails.id);
            yield model_1.default.deleteDestinations(updatedDetails.id);
            yield model_1.default.deleteCategories(updatedDetails.id);
            yield model_1.default.deleteTravelEvents(updatedDetails.id);
            yield model_1.default.deleteItineraryDays(gotItineraryRawDetails.id);
            yield this.updateItineraryDetails(gotItineraryRawDetails.id, input.itinerary);
            yield this.updateReview(postID, input.review);
            yield this.saveDestinations(updatedDetails.id, input.destinationsID);
            yield this.saveCategories(updatedDetails.id, input.categories);
            yield this.saveTravelEvents(updatedDetails.id, input.travelEventsID);
            return yield model_1.default.getItineraryDetails(postID);
        });
    },
};
exports.default = postService;
//# sourceMappingURL=service.js.map