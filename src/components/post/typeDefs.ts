import { ICloudinaryFileMeta } from "../cloudinary/typeDefs";
import Post from "../../database/entities/Post";
import Destination from "../../database/entities/Destination";
import TravelEvent from "../../database/entities/TravelEvent";
import PostItinerary from "../../database/entities/PostItinerary";
import PostReview from "../../database/entities/PostReview";

export interface IBasePostInput {
  title: string;
  text: string;
  destinationsID: number[];
  travelEventsID: number[];
  categories: string[];
  files: ICloudinaryFileMeta[];
}

export interface ITravelStoryPostSoftDetails extends Post {
  destinations: Destination[];
  travelEvents: TravelEvent[];
}

export interface IItineraryPostSoftDetails extends ITravelStoryPostSoftDetails {
  itinerary: PostItinerary;
  review: PostReview;
}

export interface IPostServiceCreateTravelStoryInput extends IBasePostInput {}

export interface IPostServiceCreateItineraryInput extends IBasePostInput {
  itinerary: IPostItineraryInput;
  review: IPostServiceCreateItineraryReview;
}

export interface IPostServiceCreateItineraryReview {
  restaurants: IPostRestaurantReviewInput[];
  lodgings: IPostLodgingReviewInput[];
  transportation: IPostTransportationReviewInput[];
  activities: IPostActivityReviewInput[];
  internetAccess: IPostInternetAccessReviewInput;
  finance: IPostFinanceReviewInput;
  tips: string[];
  avoids: string[];
}

export interface IPostModelSaveDetailsInput {
  title: string;
  text: string;
  type: string;
  isDraft: boolean;
  accountID: number;
}

export interface IPostModelUpdateDetailsInput
  extends IPostModelSaveDetailsInput {}

export interface IPostModelSaveFileInput extends ICloudinaryFileMeta {
  postID: number;
  data: Buffer;
}

export interface IPostModelSaveDestinationInput {
  postID: number;
  destinationID: number;
}

export interface IPostModelSaveCategoryInput {
  postID: number;
  name: string;
}

export interface IPostModelSaveTravelEventInput {
  postID: number;
  travelEventID: number;
}

interface IPostItineraryTimestamp {
  time: Date;
  fare: number;
  expenses: number;
  otherDetails: string;
  destinationID: number;
  transportation: string;
  interests: string[];
}

export interface IPostItineraryDay {
  date: Date;
  day: number;
  destinationsCount: number;
  expenses: number;
  timestamps: IPostItineraryTimestamp[];
}

export interface IPostItineraryInput {
  totalDestinations: number;
  totalExpenses: number;
  days: IPostItineraryDay[];
}

export interface IPostModelSaveItineraryInput {
  postID: number;
  totalDestinations: number;
  totalExpenses: number;
}

export interface IPostModelSaveItineraryDayInput {
  postItineraryID: number;
  date: Date;
  day: number;
  destinationsCount: number;
  expenses: number;
}

export interface IPostModelSaveItineraryDayTimestampInput {
  postItineraryDayID: number;
  time: Date;
  fare: number;
  expenses: number;
  otherDetails: string;
  destinationID: number;
  transportation: string;
}

export interface IPostRestaurantReviewInput {
  name: string;
  text: string;
  rating: number;
}

export interface IPostLodgingReviewInput extends IPostRestaurantReviewInput {}

export interface IPostTransportationReviewInput {
  destinationID: number;
  type: string;
  text: string;
  rating: number;
}

export interface IPostActivityReviewInput {
  destinationID: number;
  name: string;
  text: string;
  rating: number;
}

export interface IPostInternetAccessReviewInput {
  text: string;
  rating: number;
}

export interface IPostFinanceReviewInput
  extends IPostInternetAccessReviewInput {}

export interface IPostModelSaveReviewInput {
  postID: number;
  postInternetAccessReviewID: number;
  postFinanceReviewID: number;
}
