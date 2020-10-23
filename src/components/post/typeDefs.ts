import { ICloudinaryFileMeta } from "../cloudinary/typeDefs";
import Post from "../../database/entities/Post";
import Destination from "../../database/entities/Destination";
import TravelEvent from "../../database/entities/TravelEvent";
import PostReviewRestaurant from "../../database/entities/PostReviewRestaurant";
import PostReviewLodging from "../../database/entities/PostReviewLodging";
import PostReviewTransportation from "../../database/entities/PostReviewTransportation";
import PostReviewActivity from "../../database/entities/PostReviewActivity";
import PostReviewInternetAccess from "../../database/entities/PostReviewInternetAccess";
import PostReviewFinance from "../../database/entities/PostReviewFinance";
import PostReviewTip from "../../database/entities/PostReviewTip";
import PostReviewAvoid from "../../database/entities/PostReviewAvoid";

interface IBasePostInput {
  title: string;
  text: string;
  isDraft: boolean;
  destinationsID: number[];
  travelEventsID: number[];
  categories: string[];
  files: Express.Multer.File[];
}

export interface ITravelStoryPostSoftDetails extends Post {
  destinations: Destination[];
  travelEvents: TravelEvent[];
}

export interface IItineraryPostSoftDetails extends ITravelStoryPostSoftDetails {
  review: {
    restaurant: PostReviewRestaurant[];
    lodgings: PostReviewLodging[];
    transportation: PostReviewTransportation[];
    activities: PostReviewActivity[];
    internetAccess: PostReviewInternetAccess;
    finance: PostReviewFinance;
    tips: PostReviewTip[];
    avoids: PostReviewAvoid[];
  };
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
