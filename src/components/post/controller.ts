import { Request, Response } from "express";
import postService from "./service";
import {
  IPostServiceCreateItineraryInput,
  IPostServiceCreateTravelStoryInput,
} from "./typeDefs";

const postController = {
  async createTravelStory(request: Request, response: Response) {
    try {
      // @ts-ignore
      const accountID = request.user.id;
      const input: IPostServiceCreateTravelStoryInput = request.body;
      const result = await postService.createTravelStory(accountID, input);
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async createItinerary(request: Request, response: Response) {
    try {
      const postID = parseInt(request.body.postID) || 0;
      const input: IPostServiceCreateItineraryInput = {
        title: request.body.title || "",
        text: request.body.text || "",
        destinationsID: request.body.destinationsID || [],
        travelEventsID: request.body.travelEventsID || [],
        categories: request.body.categories || [],
        files: request.body.files || [],
        itinerary: request.body.itinerary || [],
        review: request.body.review || [],
      };
      const result = await postService.createItinerary(postID, input);
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async uploadFiles(request: Request, response: Response) {
    try {
      // @ts-ignore
      const accountID = request.user.id;
      // @ts-ignore
      const files: Express.Multer.File[] = request.files;
      const result = await postService.uploadFiles(accountID, files);
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },
};

export default postController;
