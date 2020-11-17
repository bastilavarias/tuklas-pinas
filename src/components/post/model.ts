import {
  IPostActivityReviewInput,
  ITravelStoryPostSoftDetails,
  IPostModelSaveCategoryInput,
  IPostModelSaveDestinationInput,
  IPostModelSaveDetailsInput,
  IPostModelSaveFilePayload,
  IPostFinanceReviewInput,
  IPostInternetAccessReviewInput,
  IPostModelSaveItineraryDayInput,
  IPostModelSaveItineraryDayTimestampInput,
  IPostModelSaveItineraryInput,
  IPostModelSaveTravelEventInput,
  IPostRestaurantReviewInput,
  IPostLodgingReviewInput,
  IPostTransportationReviewInput,
  IItineraryPostSoftDetails,
  IPostModelSaveReviewInput,
  IPostModelUpdateDetailsInput,
  IGenericSoftPost,
  IPostModelSaveCommentInput,
  IPostModelSaveCommentReplyInput,
} from "./typeDefs";
import Post from "../../database/entities/Post";
import PostFile from "../../database/entities/PostFile";
import { getRepository } from "typeorm";
import PostDestination from "../../database/entities/PostDestination";
import Destination from "../../database/entities/Destination";
import genericModel from "../generic/model";
import PostCategory from "../../database/entities/PostCategory";
import PostTravelEvent from "../../database/entities/PostTravelEvent";
import TravelEvent from "../../database/entities/TravelEvent";
import PostItineraryDay from "../../database/entities/PostItineraryDay";
import PostItineraryDayTimestamp from "../../database/entities/PostItineraryDayTimestamp";
import PostItinerary from "../../database/entities/PostItinerary";
import PostItineraryDayTimestampInterest from "../../database/entities/PostItineraryDayTimestampInterest";
import PostReviewRestaurant from "../../database/entities/PostReviewRestaurant";
import PostReviewLodging from "../../database/entities/PostReviewLodging";
import PostReviewTransportation from "../../database/entities/PostReviewTransportation";
import PostReviewActivity from "../../database/entities/PostReviewActivity";
import PostReviewInternetAccess from "../../database/entities/PostReviewInternetAccess";
import PostReviewFinance from "../../database/entities/PostReviewFinance";
import PostReviewTip from "../../database/entities/PostReviewTip";
import PostReviewAvoid from "../../database/entities/PostReviewAvoid";
import PostReview from "../../database/entities/PostReview";
import PostComment from "../../database/entities/PostComment";
import PostCommentReply from "../../database/entities/PostCommentReply";
import PostReaction from "../../database/entities/PostReaction";
import PostCommentReaction from "../../database/entities/PostCommentReaction";
import PostCommentReplyReaction from "../../database/entities/PostCommentReplyReaction";

const postModel = {
  async saveDetails(input: IPostModelSaveDetailsInput): Promise<Post> {
    const { title, text, isDraft, accountID, type } = input;
    return await Post.create({
      title,
      text,
      type,
      isDraft,
      author: { id: accountID },
    }).save();
  },

  async saveFile(
    postID: number,
    payload: IPostModelSaveFilePayload
  ): Promise<PostFile> {
    const { url, publicID, format, name, size, type } = payload;
    return await PostFile.create({
      url,
      publicID,
      format,
      name,
      size,
      type,
      post: { id: postID },
    }).save();
  },

  async saveDestination(input: IPostModelSaveDestinationInput) {
    const { postID, destinationID } = input;
    return await PostDestination.create({
      post: { id: postID },
      destination: { id: destinationID },
    }).save();
  },

  async saveCategory(input: IPostModelSaveCategoryInput) {
    const { postID, name } = input;
    return await PostCategory.create({
      post: { id: postID },
      name,
    }).save();
  },

  async saveTravelEvent(input: IPostModelSaveTravelEventInput) {
    const { postID, travelEventID } = input;
    return await PostTravelEvent.create({
      post: { id: postID },
      travelEvent: { id: travelEventID },
    }).save();
  },

  async saveItinerary(
    input: IPostModelSaveItineraryInput
  ): Promise<PostItinerary> {
    const { postID, totalDestinations, totalExpenses } = input;
    return await PostItinerary.create({
      post: { id: postID },
      totalDestinations,
      totalExpenses,
    }).save();
  },

  async saveItineraryDay(
    input: IPostModelSaveItineraryDayInput
  ): Promise<PostItineraryDay> {
    const { postItineraryID, date, destinationsCount, expenses, day } = input;
    return await PostItineraryDay.create({
      itinerary: { id: postItineraryID },
      date,
      destinationsCount,
      expenses,
      day,
    }).save();
  },

  async saveItineraryDayTimestamp(
    input: IPostModelSaveItineraryDayTimestampInput
  ): Promise<PostItineraryDayTimestamp> {
    const {
      postItineraryDayID,
      time,
      fare,
      expenses,
      otherDetails,
      destinationID,
      transportation,
    } = input;
    return await PostItineraryDayTimestamp.create({
      itineraryDay: { id: postItineraryDayID },
      destination: { id: destinationID },
      time,
      fare,
      expenses,
      otherDetails,
      transportation,
    }).save();
  },

  async saveItineraryDayTimestampInterest(
    postItineraryDayTimestampID: number,
    name: string
  ): Promise<PostItineraryDayTimestampInterest> {
    return await PostItineraryDayTimestampInterest.create({
      timestamp: { id: postItineraryDayTimestampID },
      name,
    }).save();
  },

  async saveReview(input: IPostModelSaveReviewInput): Promise<PostReview> {
    const { postID, postInternetAccessReviewID, postFinanceReviewID } = input;
    return await PostReview.create({
      post: { id: postID },
      internetAccess: { id: postInternetAccessReviewID },
      finance: { id: postFinanceReviewID },
    }).save();
  },

  async saveRestaurantReview(
    postReviewID: number,
    input: IPostRestaurantReviewInput
  ): Promise<PostReviewRestaurant> {
    const { name, text, rating } = input;
    return await PostReviewRestaurant.create({
      review: { id: postReviewID },
      name,
      text,
      rating,
    }).save();
  },

  async saveLodgingReview(
    postReviewID: number,
    input: IPostLodgingReviewInput
  ): Promise<PostReviewLodging> {
    const { name, text, rating } = input;
    return await PostReviewLodging.create({
      review: { id: postReviewID },
      name,
      text,
      rating,
    }).save();
  },

  async saveTransportationReview(
    postReviewID: number,
    input: IPostTransportationReviewInput
  ): Promise<PostReviewTransportation> {
    const { destinationID, type, text, rating } = input;
    return await PostReviewTransportation.create({
      review: { id: postReviewID },
      destination: { id: destinationID },
      type,
      text,
      rating,
    }).save();
  },

  async saveActivityReview(
    postReviewID: number,
    input: IPostActivityReviewInput
  ): Promise<PostReviewActivity> {
    const { destinationID, name, text, rating } = input;
    return await PostReviewActivity.create({
      review: { id: postReviewID },
      destination: { id: destinationID },
      name,
      text,
      rating,
    }).save();
  },

  async saveInternetAccessReview(
    input: IPostInternetAccessReviewInput
  ): Promise<PostReviewInternetAccess> {
    const { text, rating } = input;
    return await PostReviewInternetAccess.create({
      text,
      rating,
    }).save();
  },

  async saveFinanceReview(
    input: IPostFinanceReviewInput
  ): Promise<PostReviewFinance> {
    const { text, rating } = input;
    return await PostReviewFinance.create({
      text,
      rating,
    }).save();
  },

  async saveTipReview(
    postReviewID: number,
    text: string
  ): Promise<PostReviewTip> {
    return await PostReviewTip.create({
      review: { id: postReviewID },
      text,
    }).save();
  },

  async saveAvoidReview(
    postReviewID: number,
    text: string
  ): Promise<PostReviewAvoid> {
    return await PostReviewAvoid.create({
      review: { id: postReviewID },
      text,
    }).save();
  },

  async saveComment(input: IPostModelSaveCommentInput): Promise<PostComment> {
    const { text, accountID, postID } = input;
    const savedComment = await PostComment.create({
      post: { id: postID },
      author: { id: accountID },
      text,
    }).save();
    return await this.getComment(savedComment.id);
  },

  async saveCommentReply(
    input: IPostModelSaveCommentReplyInput
  ): Promise<PostCommentReply> {
    const { text, accountID, commentID } = input;
    const savedComment = await PostCommentReply.create({
      comment: { id: commentID },
      author: { id: accountID },
      text,
    }).save();
    return await this.getCommentReply(savedComment.id);
  },

  async saveReaction(
    postID: number,
    accountID: number,
    type: string
  ): Promise<PostReaction> {
    const savedReaction = await PostReaction.create({
      post: { id: postID },
      account: { id: accountID },
      type,
    }).save();
    return await this.getReaction(savedReaction.id);
  },

  async saveCommentReaction(
    commentID: number,
    accountID: number,
    type: string
  ): Promise<PostCommentReaction> {
    const savedReaction = await PostCommentReaction.create({
      comment: { id: commentID },
      account: { id: accountID },
      type,
    }).save();
    return await this.getCommentReaction(savedReaction.id);
  },

  async saveCommentReplyReaction(
    replyID: number,
    accountID: number,
    type: string
  ): Promise<PostCommentReplyReaction> {
    const savedReaction = await PostCommentReplyReaction.create({
      reply: { id: replyID },
      account: { id: accountID },
      type,
    }).save();
    return await this.getCommentReplyReaction(savedReaction.id);
  },

  async fetchNew(skip: number): Promise<IGenericSoftPost[]> {
    const isDeleted = false;
    const isDraft = false;
    const raw = await getRepository(Post)
      .createQueryBuilder("post")
      .select(["id", "type"])
      .where(`post."isDeleted" = :isDeleted`, { isDeleted })
      .andWhere(`post."isDraft" = :isDraft`, { isDraft })
      .orderBy(`post."createdAt"`, "DESC")
      .offset(skip)
      .limit(5)
      .getRawMany();
    return await Promise.all(
      raw.map(async (item) =>
        item.type === "travel-story"
          ? await this.getTravelStorySoftDetails(item.id)
          : await this.getItinerarySoftDetails(item.id)
      )
    );
  },

  async fetchRelevant(skip: number): Promise<IGenericSoftPost[]> {
    const isDeleted = false;
    const isDraft = false;
    const raw = await getRepository(Post)
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
    return await Promise.all(
      raw.map(async (item) =>
        item.type === "travel-story"
          ? await this.getTravelStorySoftDetails(item.id)
          : await this.getItinerarySoftDetails(item.id)
      )
    );
  },

  async fetchTrending(skip: number): Promise<IGenericSoftPost[]> {
    const isDeleted = false;
    const isDraft = false;
    const raw = await getRepository(Post)
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
    return await Promise.all(
      raw.map(async (item) =>
        item.type === "travel-story"
          ? await this.getTravelStorySoftDetails(item.id)
          : await this.getItinerarySoftDetails(item.id)
      )
    );
  },

  async fetchNewComments(postID: number, skip: number): Promise<PostComment[]> {
    const isDeleted = false;
    const raw = await getRepository(PostComment)
      .createQueryBuilder("comment")
      .select(["id"])
      .where(`comment."postId" = :postID`, { postID })
      .andWhere(`comment."isDeleted" = :isDeleted`, { isDeleted })
      .orderBy(`comment."createdAt"`, "DESC")
      .offset(skip)
      .limit(10)
      .getRawMany();
    return await Promise.all(
      raw.map(async (item) => {
        const gotComment = await this.getComment(item.id);
        gotComment.replies = await this.fetchCommentReplies(gotComment.id, 0);
        return gotComment;
      })
    );
  },

  async fetchRelevantComments(
    postID: number,
    skip: number
  ): Promise<PostComment[]> {
    const isDeleted = false;
    const raw = await getRepository(PostComment)
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
    return await Promise.all(
      raw.map(async (item) => {
        const gotComment = await this.getComment(item.id);
        gotComment.replies = await this.fetchCommentReplies(gotComment.id, 0);
        return gotComment;
      })
    );
  },

  async fetchCommentReplies(commentID: number, skip: number) {
    const isDeleted = false;
    const raw = await getRepository(PostCommentReply)
      .createQueryBuilder("reply")
      .select(["id"])
      .where(`reply."commentId" = :commentID`, { commentID })
      .andWhere(`reply."isDeleted" = :isDeleted`, { isDeleted })
      .orderBy(`reply."createdAt"`, "ASC")
      .offset(skip)
      .limit(6)
      .getRawMany();
    return await Promise.all(
      raw.map(async (item) => await this.getCommentReply(item.id))
    );
  },

  async fetchTravelStoryDraftsPreview(authorID: number): Promise<Post[]> {
    return await getRepository(Post)
      .createQueryBuilder("post")
      .select(["id", "title", "text", `"createdAt"`, `"updatedAt"`])
      .where(`post."isDraft" = true`)
      .andWhere(`post."authorId" = :authorID`, { authorID })
      .orderBy(`post."createdAt"`, "DESC")
      .getRawMany();
  },

  async getBaseSoftDetails(postID: number): Promise<Post> {
    const gotDetails = <Post>await Post.findOne(postID, {
      relations: ["author"],
    });
    gotDetails.files = await this.getFiles(gotDetails.id);
    // @ts-ignore
    delete gotDetails.author.password;
    return gotDetails!;
  },

  async getTravelStorySoftDetails(
    postID: number
  ): Promise<ITravelStoryPostSoftDetails> {
    // @ts-ignore
    const gotDetails: ITravelStoryPostSoftDetails = <
      ITravelStoryPostSoftDetails
    >await Post.findOne(postID, {
      relations: ["author", "author.profile", "reactions", "reactions.account"],
    });
    gotDetails.files = await this.getFiles(gotDetails.id);
    gotDetails.destinations = await this.getDestinations(gotDetails.id);
    gotDetails.categories = await this.getCategories(gotDetails.id);
    gotDetails.travelEvents = await this.getTravelEvents(gotDetails.id);
    gotDetails.commentsCount = await this.countComments(gotDetails.id);
    gotDetails.reactionsCount = await this.countReactions(gotDetails.id);
    // @ts-ignore
    delete gotDetails.author.password;
    return gotDetails!;
  },

  async getTravelStoryDetails(postID: number): Promise<Post> {
    const gotDetails = await Post.findOne(postID, {
      relations: [
        "destinations",
        "destinations.destination",
        "travelEvents",
        "travelEvents.travelEvent",
        "categories",
        "files",
      ],
    });
    return gotDetails!;
  },

  async getItinerarySoftDetails(
    postID: number
  ): Promise<IItineraryPostSoftDetails> {
    const gotDetails: IItineraryPostSoftDetails = <IItineraryPostSoftDetails>(
      await Post.findOne(postID, {
        relations: [
          "author",
          "author.profile",
          "reactions",
          "reactions.account",
        ],
      }).then((post) => {
        post!.reactions.map((reaction) => {
          // @ts-ignore
          delete reaction.account.password;
        });
        return post;
      })
    );
    gotDetails.files = await this.getFiles(gotDetails.id);
    gotDetails.destinations = await this.getDestinations(gotDetails.id);
    gotDetails.categories = await this.getCategories(gotDetails.id);
    gotDetails.travelEvents = await this.getTravelEvents(gotDetails.id);
    gotDetails.itinerary = await this.getItinerary(gotDetails.id);
    gotDetails.review = await this.getReview(gotDetails.id);
    gotDetails.commentsCount = await this.countComments(gotDetails.id);
    gotDetails.reactionsCount = await this.countReactions(gotDetails.id);
    // @ts-ignore
    delete gotDetails.author.password;
    return gotDetails!;
  },

  async getFiles(postID: number): Promise<PostFile[]> {
    return await PostFile.find({ where: { post: { id: postID } } });
  },

  async getDestinations(postID: number): Promise<Destination[]> {
    const raw = await getRepository(PostDestination)
      .createQueryBuilder("post_destination")
      .select("post_destination.id", "id")
      .addSelect(`post_destination."destinationId"`, "destinationID")
      .where(`post_destination."postId" = :postID`, { postID: postID })
      .getRawMany();
    return await Promise.all(
      raw.map(
        async (postDestination) =>
          await genericModel.getDestination(postDestination.destinationID)
      )
    );
  },

  async getCategories(postID: number): Promise<PostCategory[]> {
    return await getRepository(PostCategory)
      .createQueryBuilder("post_category")
      .select("DISTINCT post_category.name", "name")
      .where(`post_category."postId" = :postID`, { postID: postID })
      .getRawMany();
  },

  async getTravelEvents(postID: number): Promise<TravelEvent[]> {
    const raw = await getRepository(PostTravelEvent)
      .createQueryBuilder("post_travel_event")
      .select(`post_travel_event."travelEventId"`, "travelEventID")
      .where(`post_travel_event."postId" = :postID`, { postID: postID })
      .getRawMany();
    return await Promise.all(
      raw.map(
        async (postTravelEvent) =>
          await genericModel.getTravelEvent(postTravelEvent.travelEventID)
      )
    );
  },

  async getItinerary(postID: number): Promise<PostItinerary> {
    const foundItinerary = await PostItinerary.findOne({
      where: { post: { id: postID } },
      relations: ["days"],
    });
    foundItinerary!.days = await Promise.all(
      foundItinerary!.days.map(async (day) => {
        const gotDay = await this.getItineraryDay(day.id);
        gotDay.timestamps = await Promise.all(
          gotDay.timestamps.map(
            async (timestamp) =>
              await this.getItineraryDayTimestamp(timestamp.id)
          )
        );
        return gotDay;
      })
    );
    return foundItinerary!;
  },

  async getItineraryDay(postItineraryDayID: number): Promise<PostItineraryDay> {
    const gotDay = await PostItineraryDay.findOne(postItineraryDayID, {
      relations: ["timestamps"],
    });
    return gotDay!;
  },

  async getItineraryDayTimestamp(
    postItineraryDayTimestampID: number
  ): Promise<PostItineraryDayTimestamp> {
    const gotTimestamp = await PostItineraryDayTimestamp.findOne(
      postItineraryDayTimestampID,
      { relations: ["interests", "destination"] }
    );
    return gotTimestamp!;
  },

  async getReview(postID: number): Promise<PostReview> {
    const gotReview = await PostReview.findOne({
      where: { post: { id: postID } },
      relations: [
        "restaurants",
        "lodgings",
        "transportation",
        "transportation.destination",
        "activities",
        "activities.destination",
        "internetAccess",
        "finance",
        "tips",
        "avoids",
      ],
    });
    return gotReview!;
  },

  async getComment(commentID: number): Promise<PostComment> {
    const gotComment = await PostComment.findOne(commentID, {
      relations: [
        "author",
        "author.profile",
        "author.profile.image",
        "replies",
        "reactions",
        "reactions.account",
      ],
    });
    gotComment!.repliesCount = await this.countCommentReplies(gotComment!.id);
    gotComment!.reactionsCount = await this.countCommentReactions(
      gotComment!.id
    );
    //@ts-ignore
    delete gotComment?.author.password;
    return gotComment!;
  },

  async getCommentReply(replyID: number): Promise<PostCommentReply> {
    const gotCommentReply = await PostCommentReply.findOne(replyID, {
      relations: [
        "author",
        "author.profile",
        "author.profile.image",
        "reactions",
        "reactions.account",
      ],
    });
    gotCommentReply!.reactionsCount = await this.countCommentReplyReactions(
      gotCommentReply!.id
    );
    //@ts-ignore
    delete gotCommentReply?.author.password;
    return gotCommentReply!;
  },

  async getReaction(reactionID: number): Promise<PostReaction> {
    const gotReaction = await PostReaction.findOne(reactionID, {
      relations: ["account"],
    });
    //@ts-ignore
    delete gotReaction?.account.password;
    return gotReaction!;
  },

  async getCommentReaction(reactionID: number): Promise<PostCommentReaction> {
    const gotReaction = await PostCommentReaction.findOne(reactionID, {
      relations: ["account"],
    });
    //@ts-ignore
    delete gotReaction?.account.password;
    return gotReaction!;
  },

  async getCommentReplyReaction(
    reactionID: number
  ): Promise<PostCommentReplyReaction> {
    const gotReaction = await PostCommentReplyReaction.findOne(reactionID, {
      relations: ["account"],
    });
    //@ts-ignore
    delete gotReaction?.account.password;
    return gotReaction!;
  },

  async getReactionByPostIDAndAccountID(
    postID: number,
    accountID: number
  ): Promise<PostReaction> {
    const gotReaction = await PostReaction.findOne({
      where: {
        post: { id: postID },
        account: { id: accountID },
      },
      relations: ["account"],
    });
    //@ts-ignore
    delete gotReaction?.account.password;
    return gotReaction!;
  },

  async getCommentReactionByCommentIDAndAccountID(
    commentID: number,
    accountID: number
  ): Promise<PostCommentReaction> {
    const gotReaction = await PostCommentReaction.findOne({
      where: {
        comment: { id: commentID },
        account: { id: accountID },
      },
      relations: ["account"],
    });
    //@ts-ignore
    delete gotReaction?.account.password;
    return gotReaction!;
  },

  async getCommentReactionByReplyIDAndAccountID(
    replyID: number,
    accountID: number
  ): Promise<PostCommentReplyReaction> {
    const gotReaction = await PostCommentReplyReaction.findOne({
      where: {
        reply: { id: replyID },
        account: { id: accountID },
      },
      relations: ["account"],
    });
    //@ts-ignore
    delete gotReaction?.account.password;
    return gotReaction!;
  },

  async updateDetails(
    postID: number,
    input: IPostModelUpdateDetailsInput
  ): Promise<Post> {
    const currentDate = new Date();
    const { title, text, type, isDraft } = input;
    await Post.update(
      { id: postID },
      { title, text, type, updatedAt: currentDate, isDraft }
    );
    return await this.getBaseSoftDetails(postID);
  },

  async countComments(postID: number): Promise<number> {
    return await PostComment.count({ where: { post: { id: postID } } });
  },

  async countCommentReplies(commentID: number): Promise<number> {
    return await PostCommentReply.count({
      where: { comment: { id: commentID } },
    });
  },

  async countReactions(postID: number): Promise<number> {
    return await PostReaction.count({ where: { post: { id: postID } } });
  },

  async countCommentReactions(commentID: number): Promise<number> {
    return await PostCommentReaction.count({
      where: { comment: { id: commentID } },
    });
  },

  async countCommentReplyReactions(replyID: number): Promise<number> {
    return await PostCommentReplyReaction.count({
      where: { reply: { id: replyID } },
    });
  },

  async deleteReaction(reactionID: number) {
    await getRepository(PostReaction)
      .createQueryBuilder("reaction")
      .delete()
      .from(PostReaction)
      .where("id = :id", { id: reactionID })
      .execute();
  },

  async deleteCommentReaction(reactionID: number) {
    await getRepository(PostCommentReaction)
      .createQueryBuilder("reaction")
      .delete()
      .from(PostCommentReaction)
      .where("id = :id", { id: reactionID })
      .execute();
  },

  async deleteCommentReplyReaction(reactionID: number) {
    await getRepository(PostCommentReplyReaction)
      .createQueryBuilder("reaction")
      .delete()
      .from(PostCommentReplyReaction)
      .where("id = :id", { id: reactionID })
      .execute();
  },

  async deleteDestinations(postID: number) {
    await PostDestination.delete({ post: { id: postID } });
  },

  async deleteCategories(postID: number) {
    await PostCategory.delete({ post: { id: postID } });
  },

  async deleteTravelEvents(postID: number) {
    await PostTravelEvent.delete({ post: { id: postID } });
  },

  async deleteFiles(postID: number) {
    await PostFile.delete({ post: { id: postID } });
  },
};

export default postModel;
