import { CloudinaryFileMeta } from "../cloudinary/typeDefs";

export interface PostModelSaveDetailsInput {
  title: string;
  text: string;
  isDraft: boolean;
  accountID: number;
}

export interface PostServiceCreateTravelStoryInput {
  title: string;
  text: string;
  isDraft: boolean;
  destinationsID: number[];
  eventsID: number[];
  categories: string[];
  files: Express.Multer.File[];
}

export interface PostModelSaveFileDetailsInput extends CloudinaryFileMeta {
  postID: number;
  data: Buffer;
}

export interface PostModelSaveDestinationInput {
  postID: number;
  destinationID: number;
}
