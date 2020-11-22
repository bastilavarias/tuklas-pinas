import { ICloudinaryFileMeta } from "../cloudinary/typeDefs";

export interface IBasePostInput {
  title: string;
  text: string;
  destinationsID: number[];
  travelEventsID: number[];
  categories: string[];
  files: ICloudinaryFileMeta[];
}

export interface IPostServiceCreateTravelStoryInput extends IBasePostInput {}

export interface IPostServiceSaveTravelStoryDraftInput extends IBasePostInput {}
export interface IPostServiceSaveItineraryDraftInput extends IBasePostInput {
  itinerary: IPostItineraryPayload;
  review: IItineraryPostReviewInput;
}

export interface IPostServiceCreateItineraryInput extends IBasePostInput {
  itinerary: IPostItineraryPayload;
  review: IItineraryPostReviewInput;
}

export interface IItineraryPostReviewInput {
  restaurants: IPostRestaurantReviewInput[];
  lodgings: IPostLodgingReviewInput[];
  transportation: IPostTransportationReviewInput[];
  activities: IPostActivityReviewInput[];
  internetAccess: IPostInternetAccessReviewPayload;
  finance: IPostFinanceReviewPayload;
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

export interface IPostModelUpdateDetailsPayload
  extends IPostModelSaveDetailsInput {}

export interface IPostModelSaveFilePayload extends ICloudinaryFileMeta {
  name: string;
  size: number;
  type: string;
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

export interface IPostItineraryPayload {
  totalDestinations: number;
  totalExpenses: number;
  days: IPostItineraryDay[];
}

export interface IPostModelSaveItineraryPayload {
  postID: number;
  totalDestinations: number;
  totalExpenses: number;
}

export interface IPostModelSaveItineraryDayPayload {
  postItineraryID: number;
  date: Date;
  day: number;
  destinationsCount: number;
  expenses: number;
}

export interface IPostModelSaveItineraryDayTimestampPayload {
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

export interface IPostInternetAccessReviewPayload {
  text: string;
  rating: number;
}

export interface IPostFinanceReviewPayload
  extends IPostInternetAccessReviewPayload {}

export interface IPostModelSaveReviewInput {
  postID: number;
  postInternetAccessReviewID: number;
  postFinanceReviewID: number;
}

export interface IBaseCommentInput {
  text: string;
}

export interface IPostServiceSendCommentInput extends IBaseCommentInput {}

export interface IPostModelSaveCommentInput extends IBaseCommentInput {
  postID: number;
  accountID: number;
}

export interface IPostModelSaveCommentReplyInput extends IBaseCommentInput {
  commentID: number;
  accountID: number;
}

export interface IPostServiceSendCommentReplyInput extends IBaseCommentInput {}

export interface IPostServiceUpdateTravelStoryDraftInput
  extends IBasePostInput {}

export interface IPostServiceUpdateItineraryDraftInput extends IBasePostInput {
  itinerary: IPostItineraryPayload;
  review: IItineraryPostReviewInput;
}
