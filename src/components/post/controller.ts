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
        files: [],
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
        files: [],
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

  async sendReaction(request: Request, response: Response) {
    try {
      // @ts-ignore
      const accountID = request.user.id;
      const postID = parseInt(request.params.postID) || 0;
      const type = request.params.type || "";
      const result = await postService.sendReaction(postID, accountID, type);
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async sendCommentReaction(request: Request, response: Response) {
    try {
      // @ts-ignore
      const accountID = request.user.id;
      const commentID = parseInt(request.params.commentID) || 0;
      const type = request.params.type || "";
      const result = await postService.sendCommentReaction(
        commentID,
        accountID,
        type
      );
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async sendCommentReplyReaction(request: Request, response: Response) {
    try {
      // @ts-ignore
      const accountID = request.user.id;
      const replyID = parseInt(request.params.replyID) || 0;
      const type = request.params.type || "";
      const result = await postService.sendCommentReplyReaction(
        replyID,
        accountID,
        type
      );
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async fetch(request: Request, response: Response) {
    try {
      const sort = request.params.sort || "";
      const skip = parseInt(request.params.skip) || 0;
      const result = await postService.fetch(sort, skip);
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async fetchComments(request: Request, response: Response) {
    try {
      const postID = parseInt(request.params.postID) || 0;
      const sort = request.params.sort || "";
      const skip = parseInt(request.params.skip) || 0;
      const result = await postService.fetchComments(postID, sort, skip);
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async fetchCommentReplies(request: Request, response: Response) {
    try {
      const commentID = parseInt(request.params.commentID) || 0;
      const skip = parseInt(request.params.skip) || 0;
      const result = await postService.fetchCommentReplies(commentID, skip);
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

  async removeReaction(request: Request, response: Response) {
    try {
      // @ts-ignore
      const accountID = request.user.id;
      const postID = parseInt(request.params.postID) || 0;
      const result = await postService.removeReaction(postID, accountID);
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async removeCommentReaction(request: Request, response: Response) {
    try {
      // @ts-ignore
      const accountID = request.user.id;
      const commentID = parseInt(request.params.commentID) || 0;
      const result = await postService.removeCommentReaction(
        commentID,
        accountID
      );
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  async removeCommentReplyReaction(request: Request, response: Response) {
    try {
      // @ts-ignore
      const accountID = request.user.id;
      const replyID = parseInt(request.params.replyID) || 0;
      const result = await postService.removeCommentReplyReaction(
        replyID,
        accountID
      );
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
