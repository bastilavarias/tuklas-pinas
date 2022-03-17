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
const Post_1 = __importDefault(require("../../database/entities/Post"));
const PostFile_1 = __importDefault(require("../../database/entities/PostFile"));
const typeorm_1 = require("typeorm");
const PostDestination_1 = __importDefault(require("../../database/entities/PostDestination"));
const PostCategory_1 = __importDefault(require("../../database/entities/PostCategory"));
const PostTravelEvent_1 = __importDefault(require("../../database/entities/PostTravelEvent"));
const PostItineraryDay_1 = __importDefault(require("../../database/entities/PostItineraryDay"));
const PostItineraryDayTimestamp_1 = __importDefault(require("../../database/entities/PostItineraryDayTimestamp"));
const PostItinerary_1 = __importDefault(require("../../database/entities/PostItinerary"));
const PostItineraryDayTimestampInterest_1 = __importDefault(require("../../database/entities/PostItineraryDayTimestampInterest"));
const PostReviewRestaurant_1 = __importDefault(require("../../database/entities/PostReviewRestaurant"));
const PostReviewLodging_1 = __importDefault(require("../../database/entities/PostReviewLodging"));
const PostReviewTransportation_1 = __importDefault(require("../../database/entities/PostReviewTransportation"));
const PostReviewActivity_1 = __importDefault(require("../../database/entities/PostReviewActivity"));
const PostReviewInternetAccess_1 = __importDefault(require("../../database/entities/PostReviewInternetAccess"));
const PostReviewFinance_1 = __importDefault(require("../../database/entities/PostReviewFinance"));
const PostReviewTip_1 = __importDefault(require("../../database/entities/PostReviewTip"));
const PostReviewAvoid_1 = __importDefault(require("../../database/entities/PostReviewAvoid"));
const PostReview_1 = __importDefault(require("../../database/entities/PostReview"));
const PostComment_1 = __importDefault(require("../../database/entities/PostComment"));
const PostCommentReply_1 = __importDefault(require("../../database/entities/PostCommentReply"));
const PostReaction_1 = __importDefault(require("../../database/entities/PostReaction"));
const PostCommentReaction_1 = __importDefault(require("../../database/entities/PostCommentReaction"));
const PostCommentReplyReaction_1 = __importDefault(require("../../database/entities/PostCommentReplyReaction"));
const postModel = {
    saveDetails(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, text, isDraft, accountID, type } = input;
            return yield Post_1.default.create({
                title,
                text,
                type,
                isDraft,
                author: { id: accountID },
            }).save();
        });
    },
    saveFile(postID, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url, publicID, format, name, size, type } = payload;
            return yield PostFile_1.default.create({
                url,
                publicID,
                format,
                name,
                size,
                type,
                post: { id: postID },
            }).save();
        });
    },
    saveDestination(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { postID, destinationID } = input;
            return yield PostDestination_1.default.create({
                post: { id: postID },
                destination: { id: destinationID },
            }).save();
        });
    },
    saveCategory(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { postID, name } = input;
            return yield PostCategory_1.default.create({
                post: { id: postID },
                name,
            }).save();
        });
    },
    saveTravelEvent(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { postID, travelEventID } = input;
            return yield PostTravelEvent_1.default.create({
                post: { id: postID },
                travelEvent: { id: travelEventID },
            }).save();
        });
    },
    saveItinerary(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { postID, totalDestinations, totalExpenses } = input;
            return yield PostItinerary_1.default.create({
                post: { id: postID },
                totalDestinations,
                totalExpenses,
            }).save();
        });
    },
    saveItineraryDay(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { postItineraryID, date, destinationsCount, expenses, day } = input;
            return yield PostItineraryDay_1.default.create({
                itinerary: { id: postItineraryID },
                date,
                destinationsCount,
                expenses,
                day,
            }).save();
        });
    },
    saveItineraryDayTimestamp(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { postItineraryDayID, time, fare, expenses, otherDetails, destinationID, transportation, } = input;
            return yield PostItineraryDayTimestamp_1.default.create({
                itineraryDay: { id: postItineraryDayID },
                destination: { id: destinationID },
                time,
                fare,
                expenses,
                otherDetails,
                transportation,
            }).save();
        });
    },
    saveItineraryDayTimestampInterest(postItineraryDayTimestampID, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PostItineraryDayTimestampInterest_1.default.create({
                timestamp: { id: postItineraryDayTimestampID },
                name,
            }).save();
        });
    },
    saveReview(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { postID, postInternetAccessReviewID, postFinanceReviewID } = input;
            return yield PostReview_1.default.create({
                post: { id: postID },
                internetAccess: { id: postInternetAccessReviewID },
                finance: { id: postFinanceReviewID },
            }).save();
        });
    },
    saveRestaurantReview(postReviewID, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, text, rating } = input;
            return yield PostReviewRestaurant_1.default.create({
                review: { id: postReviewID },
                name,
                text,
                rating,
            }).save();
        });
    },
    saveLodgingReview(postReviewID, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, text, rating } = input;
            return yield PostReviewLodging_1.default.create({
                review: { id: postReviewID },
                name,
                text,
                rating,
            }).save();
        });
    },
    saveTransportationReview(postReviewID, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { destinationID, type, text, rating } = input;
            return yield PostReviewTransportation_1.default.create({
                review: { id: postReviewID },
                destination: { id: destinationID },
                type,
                text,
                rating,
            }).save();
        });
    },
    saveActivityReview(postReviewID, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { destinationID, name, text, rating } = input;
            return yield PostReviewActivity_1.default.create({
                review: { id: postReviewID },
                destination: { id: destinationID },
                name,
                text,
                rating,
            }).save();
        });
    },
    saveInternetAccessReview(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { text, rating } = input;
            return yield PostReviewInternetAccess_1.default.create({
                text,
                rating,
            }).save();
        });
    },
    saveFinanceReview(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { text, rating } = input;
            return yield PostReviewFinance_1.default.create({
                text,
                rating,
            }).save();
        });
    },
    saveTipReview(postReviewID, text) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PostReviewTip_1.default.create({
                review: { id: postReviewID },
                text,
            }).save();
        });
    },
    saveAvoidReview(postReviewID, text) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PostReviewAvoid_1.default.create({
                review: { id: postReviewID },
                text,
            }).save();
        });
    },
    saveComment(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { text, accountID, postID } = input;
            const savedComment = yield PostComment_1.default.create({
                post: { id: postID },
                author: { id: accountID },
                text,
            }).save();
            return yield this.getComment(savedComment.id);
        });
    },
    saveCommentReply(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { text, accountID, commentID } = input;
            const savedComment = yield PostCommentReply_1.default.create({
                comment: { id: commentID },
                author: { id: accountID },
                text,
            }).save();
            return yield this.getCommentReply(savedComment.id);
        });
    },
    saveReaction(postID, accountID, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedReaction = yield PostReaction_1.default.create({
                post: { id: postID },
                account: { id: accountID },
                type,
            }).save();
            return yield this.getReaction(savedReaction.id);
        });
    },
    saveCommentReaction(commentID, accountID, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedReaction = yield PostCommentReaction_1.default.create({
                comment: { id: commentID },
                account: { id: accountID },
                type,
            }).save();
            return yield this.getCommentReaction(savedReaction.id);
        });
    },
    saveCommentReplyReaction(replyID, accountID, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedReaction = yield PostCommentReplyReaction_1.default.create({
                reply: { id: replyID },
                account: { id: accountID },
                type,
            }).save();
            return yield this.getCommentReplyReaction(savedReaction.id);
        });
    },
    fetchNew(skip) {
        return __awaiter(this, void 0, void 0, function* () {
            const isDeleted = false;
            const isDraft = false;
            const raw = yield typeorm_1.getRepository(Post_1.default)
                .createQueryBuilder("post")
                .select(["id", "type"])
                .where(`post."isDeleted" = :isDeleted`, { isDeleted })
                .andWhere(`post."isDraft" = :isDraft`, { isDraft })
                .orderBy(`post."createdAt"`, "DESC")
                .offset(skip)
                .limit(5)
                .getRawMany();
            return yield Promise.all(raw.map((item) => __awaiter(this, void 0, void 0, function* () {
                return item.type === "travel-story"
                    ? yield this.getTravelStoryDetails(item.id)
                    : yield this.getItineraryDetails(item.id);
            })));
        });
    },
    fetchRelevant(skip) {
        return __awaiter(this, void 0, void 0, function* () {
            const isDeleted = false;
            const isDraft = false;
            const raw = yield typeorm_1.getRepository(Post_1.default)
                .createQueryBuilder("post")
                .leftJoin("post.reactions", "reactions")
                .leftJoin("post.comments", "comments")
                .select(["post.id as id", "post.type as type"])
                .where(`post."createdAt" > NOW() - INTERVAL '7 days'`)
                .andWhere(`post."isDeleted" = :isDeleted`, { isDeleted })
                .andWhere(`post."isDraft" = :isDraft`, { isDraft })
                .orderBy("COUNT(reactions.id) + COUNT(comments.id)", "DESC")
                .offset(skip)
                .groupBy("post.id")
                .limit(5)
                .getRawMany();
            return yield Promise.all(raw.map((item) => __awaiter(this, void 0, void 0, function* () {
                return item.type === "travel-story"
                    ? yield this.getTravelStoryDetails(item.id)
                    : yield this.getItineraryDetails(item.id);
            })));
        });
    },
    fetchTrending(skip) {
        return __awaiter(this, void 0, void 0, function* () {
            const isDeleted = false;
            const isDraft = false;
            const raw = yield typeorm_1.getRepository(Post_1.default)
                .createQueryBuilder("post")
                .leftJoin("post.reactions", "reactions")
                .leftJoin("post.comments", "comments")
                .select(["post.id as id", "post.type as type"])
                .where(`post."isDeleted" = :isDeleted`, { isDeleted })
                .andWhere(`post."isDraft" = :isDraft`, { isDraft })
                .orderBy("COUNT(reactions.id) + COUNT(comments.id)", "DESC")
                .offset(skip)
                .groupBy("post.id")
                .limit(5)
                .getRawMany();
            return yield Promise.all(raw.map((item) => __awaiter(this, void 0, void 0, function* () {
                return item.type === "travel-story"
                    ? yield this.getTravelStoryDetails(item.id)
                    : yield this.getItineraryDetails(item.id);
            })));
        });
    },
    fetchNewComments(postID, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            const isDeleted = false;
            const raw = yield typeorm_1.getRepository(PostComment_1.default)
                .createQueryBuilder("comment")
                .select(["id"])
                .where(`comment."postId" = :postID`, { postID })
                .andWhere(`comment."isDeleted" = :isDeleted`, { isDeleted })
                .orderBy(`comment."createdAt"`, "DESC")
                .offset(skip)
                .limit(10)
                .getRawMany();
            return yield Promise.all(raw.map((item) => __awaiter(this, void 0, void 0, function* () {
                const gotComment = yield this.getComment(item.id);
                gotComment.replies = yield this.fetchCommentReplies(gotComment.id, 0);
                return gotComment;
            })));
        });
    },
    fetchRelevantComments(postID, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            const isDeleted = false;
            const raw = yield typeorm_1.getRepository(PostComment_1.default)
                .createQueryBuilder("comment")
                .leftJoin("comment.reactions", "reactions")
                .leftJoin("comment.replies", "replies")
                .select(["comment.id as id"])
                .where(`comment."postId" = :postID`, { postID })
                .andWhere(`comment."isDeleted" = :isDeleted`, { isDeleted })
                .orderBy("COUNT(reactions.id) + COUNT(replies.id)", "DESC")
                .groupBy("comment.id")
                .offset(skip)
                .limit(10)
                .getRawMany();
            return yield Promise.all(raw.map((item) => __awaiter(this, void 0, void 0, function* () {
                const gotComment = yield this.getComment(item.id);
                gotComment.replies = yield this.fetchCommentReplies(gotComment.id, 0);
                return gotComment;
            })));
        });
    },
    fetchCommentReplies(commentID, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            const isDeleted = false;
            const raw = yield typeorm_1.getRepository(PostCommentReply_1.default)
                .createQueryBuilder("reply")
                .select(["id"])
                .where(`reply."commentId" = :commentID`, { commentID })
                .andWhere(`reply."isDeleted" = :isDeleted`, { isDeleted })
                .orderBy(`reply."createdAt"`, "ASC")
                .offset(skip)
                .limit(6)
                .getRawMany();
            return yield Promise.all(raw.map((item) => __awaiter(this, void 0, void 0, function* () { return yield this.getCommentReply(item.id); })));
        });
    },
    fetchTravelStoryDraftsPreview(authorID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getRepository(Post_1.default)
                .createQueryBuilder("post")
                .select(["id", "title", "text", `"createdAt"`, `"updatedAt"`])
                .where(`post."isDraft" = true`)
                .andWhere(`post."authorId" = :authorID`, { authorID })
                .andWhere("post.type = 'travel-story'")
                .orderBy(`post."createdAt"`, "DESC")
                .getRawMany();
        });
    },
    fetchItineraryDraftsPreview(authorID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getRepository(Post_1.default)
                .createQueryBuilder("post")
                .select(["id", "title", "text", `"createdAt"`, `"updatedAt"`])
                .where(`post."isDraft" = true`)
                .andWhere(`post."authorId" = :authorID`, { authorID })
                .andWhere("post.type = 'itinerary'")
                .orderBy(`post."createdAt"`, "DESC")
                .getRawMany();
        });
    },
    getRawDetails(postID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotDetails = typeorm_1.getRepository(Post_1.default)
                .createQueryBuilder("post")
                .select([
                "id",
                "title",
                "text",
                "type",
                `"isDraft"`,
                `"createdAt"`,
                `"updatedAt"`,
                `"isDeleted"`,
                `"authorId"`,
            ])
                .where("post.id = :postID", { postID })
                .getRawOne();
            return gotDetails;
        });
    },
    getTravelStoryDetails(postID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotDetails = yield Post_1.default.findOne(postID, {
                relations: [
                    "destinations",
                    "destinations.destination",
                    "travelEvents",
                    "travelEvents.travelEvent",
                    "categories",
                    "files",
                    "author",
                    "author.profile",
                    "author.profile.image",
                    "reactions",
                    "reactions.account",
                ],
            }).then((post) => __awaiter(this, void 0, void 0, function* () {
                post.commentsCount = yield this.countComments(post.id);
                post.reactionsCount = yield this.countReactions(post.id);
                post.reactions.map((reaction) => {
                    delete reaction.account.password;
                });
                return post;
            }));
            return gotDetails;
        });
    },
    getItineraryDetails(postID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotDetails = yield Post_1.default.findOne(postID, {
                relations: [
                    "destinations",
                    "destinations.destination",
                    "travelEvents",
                    "travelEvents.travelEvent",
                    "categories",
                    "files",
                    "itinerary",
                    "itinerary.days",
                    "itinerary.days.timestamps",
                    "itinerary.days.timestamps.destination",
                    "itinerary.days.timestamps.interests",
                    "review",
                    "review.restaurants",
                    "review.lodgings",
                    "review.transportation",
                    "review.transportation.destination",
                    "review.activities",
                    "review.activities.destination",
                    "review.internetAccess",
                    "review.finance",
                    "review.tips",
                    "review.avoids",
                    "author",
                    "author.profile",
                    "author.profile.image",
                    "reactions",
                    "reactions.account",
                ],
            }).then((post) => __awaiter(this, void 0, void 0, function* () {
                post.commentsCount = yield this.countComments(post.id);
                post.reactionsCount = yield this.countReactions(post.id);
                post.reactions.map((reaction) => {
                    delete reaction.account.password;
                });
                return post;
            }));
            return gotDetails;
        });
    },
    getFiles(postID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PostFile_1.default.find({ where: { post: { id: postID } } });
        });
    },
    getComment(commentID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotComment = yield PostComment_1.default.findOne(commentID, {
                relations: [
                    "author",
                    "author.profile",
                    "author.profile.image",
                    "replies",
                    "reactions",
                    "reactions.account",
                ],
            });
            gotComment.repliesCount = yield this.countCommentReplies(gotComment.id);
            gotComment.reactionsCount = yield this.countCommentReactions(gotComment.id);
            gotComment === null || gotComment === void 0 ? true : delete gotComment.author.password;
            return gotComment;
        });
    },
    getCommentReply(replyID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotCommentReply = yield PostCommentReply_1.default.findOne(replyID, {
                relations: [
                    "author",
                    "author.profile",
                    "author.profile.image",
                    "reactions",
                    "reactions.account",
                ],
            });
            gotCommentReply.reactionsCount = yield this.countCommentReplyReactions(gotCommentReply.id);
            gotCommentReply === null || gotCommentReply === void 0 ? true : delete gotCommentReply.author.password;
            return gotCommentReply;
        });
    },
    getReaction(reactionID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotReaction = yield PostReaction_1.default.findOne(reactionID, {
                relations: ["account"],
            });
            gotReaction === null || gotReaction === void 0 ? true : delete gotReaction.account.password;
            return gotReaction;
        });
    },
    getCommentReaction(reactionID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotReaction = yield PostCommentReaction_1.default.findOne(reactionID, {
                relations: ["account"],
            });
            gotReaction === null || gotReaction === void 0 ? true : delete gotReaction.account.password;
            return gotReaction;
        });
    },
    getCommentReplyReaction(reactionID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotReaction = yield PostCommentReplyReaction_1.default.findOne(reactionID, {
                relations: ["account"],
            });
            gotReaction === null || gotReaction === void 0 ? true : delete gotReaction.account.password;
            return gotReaction;
        });
    },
    getReactionByPostIDAndAccountID(postID, accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotReaction = yield PostReaction_1.default.findOne({
                where: {
                    post: { id: postID },
                    account: { id: accountID },
                },
                relations: ["account"],
            });
            gotReaction === null || gotReaction === void 0 ? true : delete gotReaction.account.password;
            return gotReaction;
        });
    },
    getCommentReactionByCommentIDAndAccountID(commentID, accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotReaction = yield PostCommentReaction_1.default.findOne({
                where: {
                    comment: { id: commentID },
                    account: { id: accountID },
                },
                relations: ["account"],
            });
            gotReaction === null || gotReaction === void 0 ? true : delete gotReaction.account.password;
            return gotReaction;
        });
    },
    getCommentReactionByReplyIDAndAccountID(replyID, accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotReaction = yield PostCommentReplyReaction_1.default.findOne({
                where: {
                    reply: { id: replyID },
                    account: { id: accountID },
                },
                relations: ["account"],
            });
            gotReaction === null || gotReaction === void 0 ? true : delete gotReaction.account.password;
            return gotReaction;
        });
    },
    getItineraryRawDetailsByPostID(postID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotDetails = typeorm_1.getRepository(PostItinerary_1.default)
                .createQueryBuilder("itinerary")
                .select(["id", `"totalDestinations"`, `"totalExpenses"`])
                .where(`itinerary."postId" = :postID`, { postID })
                .getRawOne();
            return gotDetails;
        });
    },
    getReviewRawDetailsByPostID(postID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotDetails = typeorm_1.getRepository(PostReview_1.default)
                .createQueryBuilder("review")
                .select([
                "id",
                `"internetAccessId" as "internetAccessID"`,
                `"financeId" as "financeID"`,
            ])
                .where(`review."postId" = :postID`, { postID })
                .getRawOne();
            return gotDetails;
        });
    },
    getAccountPosts(accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            const isDeleted = false;
            const isDraft = false;
            const raw = yield typeorm_1.getRepository(Post_1.default)
                .createQueryBuilder("post")
                .select(["id", "type"])
                .where(`post."authorId" = :accountID`, { accountID })
                .andWhere(`post."isDeleted" = :isDeleted`, { isDeleted })
                .andWhere(`post."isDraft" = :isDraft`, { isDraft })
                .orderBy(`post."createdAt"`, "DESC")
                .getRawMany();
            return yield Promise.all(raw.map((item) => __awaiter(this, void 0, void 0, function* () {
                return item.type === "travel-story"
                    ? yield this.getTravelStoryDetails(item.id)
                    : yield this.getItineraryDetails(item.id);
            })));
        });
    },
    getTopCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const raw = yield typeorm_1.getRepository(PostCategory_1.default)
                .createQueryBuilder("category")
                .groupBy("name")
                .select(["name", "count(name) as uses"])
                .orderBy("uses", "DESC")
                .limit(5)
                .getRawMany();
            return raw;
        });
    },
    updateDetails(postID, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentDate = new Date();
            const { title, text, type, isDraft } = input;
            yield Post_1.default.update({ id: postID }, { title, text, type, updatedAt: currentDate, isDraft });
            return yield this.getRawDetails(postID);
        });
    },
    updateItinerary(itineraryID, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { totalExpenses, totalDestinations } = payload;
            yield PostItinerary_1.default.update({ id: itineraryID }, { totalDestinations, totalExpenses });
        });
    },
    updateInternetAccessReview(internetAccessReviewID, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { text, rating } = payload;
            yield PostReviewInternetAccess_1.default.update({ id: internetAccessReviewID }, { text, rating });
        });
    },
    updateFinanceReview(financeReviewID, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { text, rating } = payload;
            yield PostReviewFinance_1.default.update({ id: financeReviewID }, { text, rating });
        });
    },
    countComments(postID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PostComment_1.default.count({ where: { post: { id: postID } } });
        });
    },
    countCommentReplies(commentID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PostCommentReply_1.default.count({
                where: { comment: { id: commentID } },
            });
        });
    },
    countReactions(postID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PostReaction_1.default.count({ where: { post: { id: postID } } });
        });
    },
    countCommentReactions(commentID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PostCommentReaction_1.default.count({
                where: { comment: { id: commentID } },
            });
        });
    },
    countCommentReplyReactions(replyID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PostCommentReplyReaction_1.default.count({
                where: { reply: { id: replyID } },
            });
        });
    },
    deleteReaction(reactionID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield typeorm_1.getRepository(PostReaction_1.default)
                .createQueryBuilder("reaction")
                .delete()
                .from(PostReaction_1.default)
                .where("id = :id", { id: reactionID })
                .execute();
        });
    },
    deleteCommentReaction(reactionID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield typeorm_1.getRepository(PostCommentReaction_1.default)
                .createQueryBuilder("reaction")
                .delete()
                .from(PostCommentReaction_1.default)
                .where("id = :id", { id: reactionID })
                .execute();
        });
    },
    deleteCommentReplyReaction(reactionID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield typeorm_1.getRepository(PostCommentReplyReaction_1.default)
                .createQueryBuilder("reaction")
                .delete()
                .from(PostCommentReplyReaction_1.default)
                .where("id = :id", { id: reactionID })
                .execute();
        });
    },
    deleteDestinations(postID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield PostDestination_1.default.delete({ post: { id: postID } });
        });
    },
    deleteCategories(postID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield PostCategory_1.default.delete({ post: { id: postID } });
        });
    },
    deleteTravelEvents(postID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield PostTravelEvent_1.default.delete({ post: { id: postID } });
        });
    },
    deleteFiles(postID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield PostFile_1.default.delete({ post: { id: postID } });
        });
    },
    deleteItineraryDays(itineraryID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield PostItineraryDay_1.default.delete({ itinerary: { id: itineraryID } });
        });
    },
    deleteReviewRestaurants(reviewID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield PostReviewRestaurant_1.default.delete({ review: { id: reviewID } });
        });
    },
    deleteReviewLodgings(reviewID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield PostReviewLodging_1.default.delete({ review: { id: reviewID } });
        });
    },
    deletePostReviewTransportation(reviewID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield PostReviewTransportation_1.default.delete({ review: { id: reviewID } });
        });
    },
    deletePostReviewActivities(reviewID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield PostReviewActivity_1.default.delete({ review: { id: reviewID } });
        });
    },
    deletePostReviewTips(reviewID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield PostReviewTip_1.default.delete({ review: { id: reviewID } });
        });
    },
    deletePostReviewAvoids(reviewID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield PostReviewAvoid_1.default.delete({ review: { id: reviewID } });
        });
    },
};
exports.default = postModel;
//# sourceMappingURL=model.js.map