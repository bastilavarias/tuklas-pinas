import { Request, Response } from "express";
import postService from "./service";
import {
  PostServiceCreateItineraryInput,
  PostServiceCreateTravelStoryInput,
} from "./typeDefs";

const postController = {
  async createTravelStory(request: Request, response: Response) {
    try {
      // @ts-ignore
      const accountID = request.user.id;
      const input: PostServiceCreateTravelStoryInput = request.body;
      // @ts-ignore
      input.files = request.files;
      const result = await postService.createTravelStory(accountID, input);
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async createItinerary(request: Request, response: Response) {
    try {
      // @ts-ignore
      const accountID = request.user.id;
      const input: PostServiceCreateItineraryInput = request.body;
      // @ts-ignore
      // input.files = request.files;
      const result = await postService.createItinerary(accountID, input);
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },
};

export default postController;
