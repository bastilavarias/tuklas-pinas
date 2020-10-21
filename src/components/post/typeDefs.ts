import { CloudinaryFileMeta } from "../cloudinary/typeDefs";
import Post from "../../database/entities/Post";
import Destination from "../../database/entities/Destination";
import TravelEvent from "../../database/entities/TravelEvent";

interface PostBaseInput {
  title: string;
  text: string;
  isDraft: boolean;
  destinationsID: number[];
  travelEventsID: number[];
  categories: string[];
  files: Express.Multer.File[];
}

export interface PostDetails extends Post {
  destinations: Destination[];
  travelEvents: TravelEvent[];
}

export interface PostServiceCreateTravelStoryInput extends PostBaseInput {}

export interface PostServiceCreateItineraryInput extends PostBaseInput {
  itinerary: PostItineraryInput;
  review: PostServiceCreateItineraryReview;
}

export interface PostServiceCreateItineraryReview {
  restaurants: PostRestaurantReviewInput[];
  lodgings: PostLodgingReviewInput[];
  transportation: PostTransportationReviewInput[];
  activities: PostActivityReviewInput[];
  internetAccess: PostInternetAccessReviewInput;
  finance: PostFinanceReviewInput;
  tips: string[];
  avoids: string[];
}

export interface PostModelSaveDetailsInput {
  title: string;
  text: string;
  type: string;
  isDraft: boolean;
  accountID: number;
}

export interface PostModelSaveFileInput extends CloudinaryFileMeta {
  postID: number;
  data: Buffer;
}

export interface PostModelSaveDestinationInput {
  postID: number;
  destinationID: number;
}

export interface PostModelSaveCategoryInput {
  postID: number;
  name: string;
}

export interface PostModelSaveTravelEventInput {
  postID: number;
  travelEventID: number;
}

interface PostItineraryTimestamp {
  time: Date;
  fare: number;
  expenses: number;
  otherDetails: string;
  destinationID: number;
  transportation: string;
  interests: string[];
}

export interface PostItineraryDay {
  date: Date;
  day: number;
  destinationsCount: number;
  expenses: number;
  timestamps: PostItineraryTimestamp[];
}

export interface PostItineraryInput {
  totalDestinations: number;
  totalExpenses: number;
  days: PostItineraryDay[];
}

export interface PostModelSaveItineraryInput {
  postID: number;
  totalDestinations: number;
  totalExpenses: number;
}

export interface PostModelSaveItineraryDayInput {
  postItineraryID: number;
  date: Date;
  day: number;
  destinationsCount: number;
  expenses: number;
}

export interface PostModelSaveItineraryDayTimestampInput {
  postItineraryDayID: number;
  time: Date;
  fare: number;
  expenses: number;
  otherDetails: string;
  destinationID: number;
  transportation: string;
}

export interface PostRestaurantReviewInput {
  name: string;
  text: string;
  rating: number;
}

export interface PostLodgingReviewInput extends PostRestaurantReviewInput {}

export interface PostTransportationReviewInput {
  destinationID: number;
  type: string;
  text: string;
  rating: number;
}

export interface PostActivityReviewInput {
  destinationID: number;
  name: string;
  text: string;
  rating: number;
}

export interface PostInternetAccessReviewInput {
  text: string;
  rating: number;
}

export interface PostFinanceReviewInput extends PostInternetAccessReviewInput {}
