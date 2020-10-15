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
