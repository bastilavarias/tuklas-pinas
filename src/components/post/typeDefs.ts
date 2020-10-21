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

export interface PostServiceCreateTravelStoryInput extends PostBaseInput {}

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

interface ItineraryTimestamp {
  time: Date;
  fare: number;
  expenses: number;
  otherDetails: string;
  destinationID: number;
  transportation: string;
  interests: string[];
}

export interface ItineraryDay {
  date: Date;
  day: number;
  destinationsCount: number;
  expenses: number;
  timestamps: ItineraryTimestamp[];
}

export interface Itinerary {
  totalDestinations: number;
  totalExpenses: number;
  days: ItineraryDay[];
}

export interface PostServiceCreateItineraryInput extends PostBaseInput {
  itinerary: Itinerary;
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

export interface RestaurantReview {
  name: string;
  text: string;
  rating: number;
}

export interface LodgingReview extends RestaurantReview {}

export interface PostModelSaveRestaurantReview extends RestaurantReview {
  postID: number;
}

export interface PostModelSaveLodgingReview
  extends PostModelSaveRestaurantReview {}

export interface TransportationReview {
  destinationID: number;
  type: string;
  text: string;
  rating: number;
}

export interface PostModelSaveTransportationReview
  extends TransportationReview {
  postID: number;
}

export interface ActivityReviewInput {
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

export interface PostDetails extends Post {
  destinations: Destination[];
  travelEvents: TravelEvent[];
}
