import {
  IPostActivityReviewInput,
  ITravelStoryPostSoftDetails,
  IPostModelSaveCategoryInput,
  IPostModelSaveDestinationInput,
  IPostModelSaveDetailsInput,
  IPostModelSaveFileInput,
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

  async saveFile(input: IPostModelSaveFileInput): Promise<PostFile> {
    const { url, publicID, format, data, postID } = input;
    return await PostFile.create({
      url,
      publicID,
      data,
      format,
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

  async fetchNew(skip: number): Promise<IGenericSoftPost[]> {
    const isDeleted = false;
    const isDraft = false;
    const raw = await getRepository(Post)
      .createQueryBuilder("post")
      .select(["id", "type"])
      .where(`post."isDeleted" = :isDeleted`, { isDeleted })
      .andWhere(`post."isDraft" = :isDraft`, { isDraft })
      .orderBy(`post."createdAt"`, "DESC")
      .skip(skip)
      .getRawMany();
    return await Promise.all(
      raw.map(async (item) =>
        item.type === "travel-story"
          ? await this.getTravelStorySoftDetails(item.id)
          : await this.getItinerarySoftDetails(item.id)
      )
    );
  },

  async getBaseSoftDetails(postID: number): Promise<Post> {
    const gotDetails = <Post>await Post.findOne(postID, {
      relations: ["author"],
    });
    gotDetails.files = await this.getSoftDetailsFiles(gotDetails.id);
    // @ts-ignore
    delete gotDetails.author.password;
    return gotDetails!;
  },

  async getTravelStorySoftDetails(
    postID: number
  ): Promise<ITravelStoryPostSoftDetails> {
    const gotDetails: ITravelStoryPostSoftDetails = <
      ITravelStoryPostSoftDetails
    >await Post.findOne(postID, {
      relations: ["author", "author.profile"],
    });
    gotDetails.files = await this.getSoftDetailsFiles(gotDetails.id);
    gotDetails.destinations = await this.getDestinations(gotDetails.id);
    gotDetails.categories = await this.getCategories(gotDetails.id);
    gotDetails.travelEvents = await this.getTravelEvents(gotDetails.id);
    // @ts-ignore
    delete gotDetails.author.password;
    return gotDetails!;
  },

  async getItinerarySoftDetails(
    postID: number
  ): Promise<IItineraryPostSoftDetails> {
    const gotDetails: IItineraryPostSoftDetails = <IItineraryPostSoftDetails>(
      await Post.findOne(postID, {
        relations: ["author", "author.profile"],
      })
    );
    gotDetails.files = await this.getSoftDetailsFiles(gotDetails.id);
    gotDetails.destinations = await this.getDestinations(gotDetails.id);
    gotDetails.categories = await this.getCategories(gotDetails.id);
    gotDetails.travelEvents = await this.getTravelEvents(gotDetails.id);
    gotDetails.itinerary = await this.getItinerary(gotDetails.id);
    gotDetails.review = await this.getReview(gotDetails.id);
    // @ts-ignore
    delete gotDetails.author.password;
    return gotDetails!;
  },

  async getSoftDetailsFiles(postID: number): Promise<PostFile[]> {
    return await getRepository(PostFile)
      .createQueryBuilder("post_file")
      .select("post_file.id", "id")
      .addSelect("post_file.url", "url")
      .addSelect("post_file.format", "format")
      .where(`post_file."postId" = :postID`, { postID: postID })
      .getRawMany();
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
      { relations: ["interests"] }
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
        "activities",
        "internetAccess",
        "finance",
        "tips",
        "avoids",
      ],
    });
    return gotReview!;
  },

  async updateDetails(
    postID: number,
    input: IPostModelUpdateDetailsInput
  ): Promise<Post> {
    const { title, text, type } = input;
    await Post.update({ id: postID }, { title, text, type });
    return await this.getBaseSoftDetails(postID);
  },
};

export default postModel;
