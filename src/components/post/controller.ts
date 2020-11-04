import { Request, Response } from "express";
import postService from "./service";
import {
  IPostServiceCreateItineraryInput,
  IPostServiceCreateTravelStoryInput,
  IPostServiceSendCommentInput,
} from "./typeDefs";

const postController = {
  async createTravelStory(request: Request, response: Response) {
    try {
      const postID = parseInt(request.params.postID) || 0;
      const input: IPostServiceCreateTravelStoryInput = {
        title: request.body.title || "",
        text: request.body.text || "",
        destinationsID: request.body.destinationsID || [],
        travelEventsID: request.body.travelEventsID || [],
        categories: request.body.categories || [],
        files: request.body.files || [],
      };
      const result = await postService.createTravelStory(postID, input);
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async createItinerary(request: Request, response: Response) {
    try {
      const postID = parseInt(request.params.postID) || 0;
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

  async sendComment(request: Request, response: Response) {
    try {
      // @ts-ignore
      const accountID = request.user.id;
      const postID = parseInt(request.params.postID) || 0;
      const input: IPostServiceSendCommentInput = {
        text: request.body.text || "",
      };
      const result = await postService.sendComment(accountID, postID, input);
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async sendCommentReply(request: Request, response: Response) {
    try {
      // @ts-ignore
      const accountID = request.user.id;
      const commentID = parseInt(request.params.commentID) || 0;
      const input: IPostServiceSendCommentInput = {
        text: request.body.text || "",
      };
      const result = await postService.sendCommentReply(
        accountID,
        commentID,
        input
      );
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async fetchNew(request: Request, response: Response) {
    try {
      const skip = parseInt(request.params.skip) || 0;
      const result = await postService.fetchNew(skip);
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async getSoftDetails(request: Request, response: Response) {
    try {
      const postID = parseInt(request.params.postID) || 0;
      const type = request.params.type || "";
      const result = await postService.getSoftDetails(postID, type);
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
