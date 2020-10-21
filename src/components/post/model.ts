import {
  PostModelSaveCategoryInput,
  PostModelSaveDestinationInput,
  PostModelSaveDetailsInput,
  PostModelSaveFileInput,
  PostModelSaveItineraryDayInput,
  PostModelSaveItineraryDayTimestampInput,
  PostModelSaveItineraryInput,
  PostModelSaveTravelEventInput,
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

const postModel = {
  async saveDetails(input: PostModelSaveDetailsInput): Promise<Post> {
    const { title, text, isDraft, accountID, type } = input;
    return await Post.create({
      title,
      text,
      type,
      isDraft,
      author: { id: accountID },
    }).save();
  },

  async saveFile(input: PostModelSaveFileInput): Promise<PostFile> {
    const { url, publicID, format, data, postID } = input;
    return await PostFile.create({
      url,
      publicID,
      data,
      format,
      post: { id: postID },
    }).save();
  },

  async saveDestination(input: PostModelSaveDestinationInput) {
    const { postID, destinationID } = input;
    return await PostDestination.create({
      post: { id: postID },
      destination: { id: destinationID },
    }).save();
  },

  async saveCategory(input: PostModelSaveCategoryInput) {
    const { postID, name } = input;
    return await PostCategory.create({
      post: { id: postID },
      name,
    }).save();
  },

  async saveTravelEvent(input: PostModelSaveTravelEventInput) {
    const { postID, travelEventID } = input;
    return await PostTravelEvent.create({
      post: { id: postID },
      travelEvent: { id: travelEventID },
    }).save();
  },

  async saveItinerary(
    input: PostModelSaveItineraryInput
  ): Promise<PostItinerary> {
    const { postID, totalDestinations, totalExpenses } = input;
    return await PostItinerary.create({
      post: { id: postID },
      totalDestinations,
      totalExpenses,
    }).save();
  },

  async saveItineraryDay(
    input: PostModelSaveItineraryDayInput
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
    input: PostModelSaveItineraryDayTimestampInput
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

  async getDetails(postID: number): Promise<Post> {
    const gotDetails: Post = <Post>await Post.findOne(postID, {
      relations: ["author"],
    });
    gotDetails.files = await this.getDetailsFiles(gotDetails.id);
    gotDetails.destinations = await this.getDestinations(gotDetails.id);
    gotDetails.categories = await this.getCategories(gotDetails.id);
    gotDetails.travelEvents = await this.getTravelEvents(gotDetails.id);
    // @ts-ignore
    delete gotDetails.author.password;
    return gotDetails!;
  },

  async getDetailsFiles(postID: number): Promise<PostFile[]> {
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
};

export default postModel;
