import {
  IPostItineraryPayload,
  IPostModelSaveCategoryInput,
  IPostModelSaveDestinationInput,
  IPostModelSaveDetailsInput,
  IPostModelSaveFilePayload,
  IPostModelSaveItineraryDayPayload,
  IPostModelSaveItineraryDayTimestampPayload,
  IPostModelSaveItineraryPayload,
  IPostModelSaveTravelEventInput,
  IPostServiceCreateTravelStoryInput,
  IPostServiceCreateItineraryInput,
  IItineraryPostReviewInput,
  IPostModelSaveReviewInput,
  IPostModelUpdateDetailsPayload,
  IPostServiceSendCommentInput,
  IPostModelSaveCommentInput,
  IPostServiceSendCommentReplyInput,
  IPostModelSaveCommentReplyInput,
  IPostServiceSaveTravelStoryDraftInput,
  IPostServiceUpdateTravelStoryDraftInput,
  IPostServiceSaveItineraryDraftInput,
  IPostServiceUpdateItineraryDraftInput,
} from "./typeDefs";
import cloudinaryService from "../cloudinary/service";
import postModel from "./model";
import Post from "../../database/entities/Post";
import PostComment from "../../database/entities/PostComment";
import PostCommentReply from "../../database/entities/PostCommentReply";
import PostReaction from "../../database/entities/PostReaction";
import PostCommentReaction from "../../database/entities/PostCommentReaction";
import PostCommentReplyReaction from "../../database/entities/PostCommentReplyReaction";
import utilityService from "../utility/service";

const postService = {
  async createTravelStory(
    postID: number,
    input: IPostServiceCreateTravelStoryInput
  ): Promise<Post> {
    const updateDetailsInput: IPostModelUpdateDetailsPayload = {
      title: input.title,
      text: input.text,
      type: "travel-story",
      isDraft: false,
      accountID: 0,
    };
    const updatedDetails = await postModel.updateDetails(
      postID,
      updateDetailsInput
    );
    await this.saveDestinations(updatedDetails.id, input.destinationsID);
    await this.saveCategories(updatedDetails.id, input.categories);
    await this.saveTravelEvents(updatedDetails.id, input.travelEventsID);
    return postModel.getTravelStoryDetails(updatedDetails.id);
  },

  async saveTravelStoryDraft(
    postID: number,
    input: IPostServiceSaveTravelStoryDraftInput
  ): Promise<Post> {
    const updateDetailsInput: IPostModelUpdateDetailsPayload = {
      title: input.title,
      text: input.text,
      type: "travel-story",
      isDraft: true,
      accountID: 0,
    };
    const updatedDetails = await postModel.updateDetails(
      postID,
      updateDetailsInput
    );
    await this.saveDestinations(updatedDetails.id, input.destinationsID);
    await this.saveCategories(updatedDetails.id, input.categories);
    await this.saveTravelEvents(updatedDetails.id, input.travelEventsID);
    return postModel.getTravelStoryDetails(updatedDetails.id);
  },

  async saveItineraryDraft(
    postID: number,
    input: IPostServiceSaveItineraryDraftInput
  ): Promise<Post> {
    const updateDetailsPayload: IPostModelUpdateDetailsPayload = {
      title: input.title,
      text: input.text,
      type: "itinerary",
      isDraft: true,
      accountID: 0,
    };
    const updatedDetails = await postModel.updateDetails(
      postID,
      updateDetailsPayload
    );
    await this.saveDestinations(updatedDetails.id, input.destinationsID);
    await this.saveCategories(updatedDetails.id, input.categories);
    await this.saveTravelEvents(updatedDetails.id, input.travelEventsID);
    await this.saveReview(updatedDetails.id, input.review);
    await this.saveItineraryDetails(updatedDetails.id, input.itinerary);
    return postModel.getItineraryDetails(updatedDetails.id);
  },

  async createItinerary(
    postID: number,
    input: IPostServiceCreateItineraryInput
  ): Promise<Post> {
    const updateDetailsInput: IPostModelUpdateDetailsPayload = {
      title: input.title,
      text: input.text,
      type: "itinerary",
      isDraft: false,
      accountID: 0,
    };
    const updatedDetails = await postModel.updateDetails(
      postID,
      updateDetailsInput
    );
    await this.saveDestinations(updatedDetails.id, input.destinationsID);
    await this.saveCategories(updatedDetails.id, input.categories);
    await this.saveTravelEvents(updatedDetails.id, input.travelEventsID);
    await this.saveItineraryDetails(updatedDetails.id, input.itinerary);
    await this.saveReview(updatedDetails.id, input.review);
    // @ts-ignore
    return postModel.getItinerarySoftDetails(updatedDetails.id);
  },

  async sendComment(
    accountID: number,
    postID: number,
    input: IPostServiceSendCommentInput
  ): Promise<PostComment> {
    const saveCommentInput: IPostModelSaveCommentInput = {
      accountID,
      postID,
      text: input.text,
    };
    return await postModel.saveComment(saveCommentInput);
  },

  async sendCommentReply(
    accountID: number,
    commentID: number,
    input: IPostServiceSendCommentReplyInput
  ): Promise<PostCommentReply> {
    const saveCommentInput: IPostModelSaveCommentReplyInput = {
      accountID,
      commentID,
      text: input.text,
    };
    return await postModel.saveCommentReply(saveCommentInput);
  },

  async sendReaction(
    postID: number,
    accountID: number,
    type: string
  ): Promise<PostReaction> {
    const gotReaction = await postModel.getReactionByPostIDAndAccountID(
      postID,
      accountID
    );
    if (gotReaction) {
      await postModel.deleteReaction(gotReaction.id);
      return gotReaction;
    }
    return await postModel.saveReaction(postID, accountID, type);
  },

  async sendCommentReaction(
    commentID: number,
    accountID: number,
    type: string
  ): Promise<PostCommentReaction> {
    const gotReaction = await postModel.getCommentReactionByCommentIDAndAccountID(
      commentID,
      accountID
    );
    if (gotReaction) {
      await postModel.deleteCommentReaction(gotReaction.id);
      return gotReaction;
    }
    return await postModel.saveCommentReaction(commentID, accountID, type);
  },

  async sendCommentReplyReaction(
    replyID: number,
    accountID: number,
    type: string
  ): Promise<PostCommentReplyReaction> {
    const gotReaction = await postModel.getCommentReactionByReplyIDAndAccountID(
      replyID,
      accountID
    );
    if (gotReaction) {
      await postModel.deleteCommentReplyReaction(gotReaction.id);
      return gotReaction;
    }
    return await postModel.saveCommentReplyReaction(replyID, accountID, type);
  },

  async removeReaction(
    postID: number,
    accountID: number
  ): Promise<{ isRemoved: boolean }> {
    const gotReaction = await postModel.getReactionByPostIDAndAccountID(
      postID,
      accountID
    );
    if (gotReaction) {
      await postModel.deleteReaction(gotReaction.id);
      return {
        isRemoved: true,
      };
    }
    return {
      isRemoved: false,
    };
  },

  async removeCommentReaction(
    commentID: number,
    accountID: number
  ): Promise<{ isRemoved: boolean }> {
    const gotReaction = await postModel.getCommentReactionByCommentIDAndAccountID(
      commentID,
      accountID
    );
    if (gotReaction) {
      await postModel.deleteCommentReaction(gotReaction.id);
      return {
        isRemoved: true,
      };
    }
    return {
      isRemoved: false,
    };
  },

  async removeCommentReplyReaction(
    replyID: number,
    accountID: number
  ): Promise<{ isRemoved: boolean }> {
    const gotReaction = await postModel.getCommentReactionByReplyIDAndAccountID(
      replyID,
      accountID
    );
    if (gotReaction) {
      await postModel.deleteCommentReplyReaction(gotReaction.id);
      return {
        isRemoved: true,
      };
    }
    return {
      isRemoved: false,
    };
  },

  async fetch(sort: string, skip: number): Promise<Post[]> {
    if (sort === "new") return await postModel.fetchNew(skip);
    if (sort === "relevant") return await postModel.fetchRelevant(skip);
    if (sort === "trending") return await postModel.fetchTrending(skip);
    return [];
  },

  async fetchComments(
    postID: number,
    sort: string,
    skip: number
  ): Promise<PostComment[]> {
    if (sort === "new") return postModel.fetchNewComments(postID, skip);
    if (sort === "relevant")
      return postModel.fetchRelevantComments(postID, skip);
    return [];
  },

  async fetchCommentReplies(
    commentID: number,
    skip: number
  ): Promise<PostCommentReply[]> {
    return await postModel.fetchCommentReplies(commentID, skip);
  },

  async fetchTravelStoryDraftsPreview(authorID: number) {
    return await postModel.fetchTravelStoryDraftsPreview(authorID);
  },

  async fetchItineraryDraftsPreview(authorID: number) {
    return await postModel.fetchItineraryDraftsPreview(authorID);
  },

  async getSoftDetails(postID: number, type: string): Promise<Post> {
    return type === "travel-story"
      ? await this.getTravelStoryDetails(postID)
      : await this.getItineraryDetails(postID);
  },

  async getTravelStoryDetails(postID: number): Promise<Post> {
    return await postModel.getTravelStoryDetails(postID);
  },

  async getItineraryDetails(postID: number): Promise<Post> {
    return await postModel.getItineraryDetails(postID);
  },

  async uploadFiles(
    accountID: number,
    files: Express.Multer.File[]
  ): Promise<Post> {
    const savePostDetailsInput: IPostModelSaveDetailsInput = {
      title: "",
      text: "",
      type: "",
      isDraft: false,
      accountID,
    };
    const savedPostDetails = await postModel.saveDetails(savePostDetailsInput);
    await this.saveFiles(savedPostDetails.id, files);
    return postModel.getRawDetails(savedPostDetails.id);
  },

  async saveDestinations(postID: number, destinationsID: number[]) {
    await Promise.all(
      destinationsID.map(async (id) => {
        const saveDestinationInput: IPostModelSaveDestinationInput = {
          postID,
          destinationID: id,
        };
        await postModel.saveDestination(saveDestinationInput);
      })
    );
  },

  async saveCategories(postID: number, categories: string[]) {
    await Promise.all(
      categories.map(async (name) => {
        const saveCategoryInput: IPostModelSaveCategoryInput = {
          postID,
          name,
        };
        if (name) await postModel.saveCategory(saveCategoryInput);
      })
    );
  },

  async saveTravelEvents(postID: number, travelEventsID: number[]) {
    await Promise.all(
      travelEventsID.map(async (id) => {
        const saveTravelEventInput: IPostModelSaveTravelEventInput = {
          postID,
          travelEventID: id,
        };
        await postModel.saveTravelEvent(saveTravelEventInput);
      })
    );
  },

  async saveFiles(postID: number, files: Express.Multer.File[]) {
    const cloudinaryFolder = "posts";
    const uploadedFilesMeta = await Promise.all(
      files.map(
        async (file) => await cloudinaryService.upload(file, cloudinaryFolder)
      )
    );
    await Promise.all(
      uploadedFilesMeta.map(async (meta) => {
        const fileData = await files.find(
          (file) => file.filename === meta.fileName
        );
        const payload: IPostModelSaveFilePayload = {
          publicID: meta.publicID,
          name: fileData!.originalname,
          fileName: "",
          url: meta.url,
          size: fileData!.size,
          type: fileData!.mimetype,
          format: utilityService.selectFileFormat(fileData!.mimetype),
        };
        await postModel.saveFile(postID, payload);
      })
    );
  },

  async saveItineraryDetails(postID: number, itinerary: IPostItineraryPayload) {
    const saveItineraryPayload: IPostModelSaveItineraryPayload = {
      postID,
      totalDestinations: itinerary.totalDestinations,
      totalExpenses: itinerary.totalExpenses,
    };
    const savedPostItinerary = await postModel.saveItinerary(
      saveItineraryPayload
    );
    await Promise.all(
      itinerary.days.map(async (item) => {
        const saveDayPayload: IPostModelSaveItineraryDayPayload = {
          postItineraryID: savedPostItinerary.id,
          date: item.date,
          day: item.day,
          destinationsCount: item.destinationsCount,
          expenses: item.expenses,
        };
        const savedItineraryDay = await postModel.saveItineraryDay(
          saveDayPayload
        );
        await Promise.all(
          item.timestamps.map(async (timestamp) => {
            const saveTimestampPayload: IPostModelSaveItineraryDayTimestampPayload = {
              postItineraryDayID: savedItineraryDay.id,
              time: timestamp.time,
              transportation: timestamp.transportation,
              fare: timestamp.fare,
              expenses: timestamp.expenses,
              otherDetails: timestamp.otherDetails,
              destinationID: timestamp.destinationID,
            };
            const savedItineraryDayTimestamp = await postModel.saveItineraryDayTimestamp(
              saveTimestampPayload
            );
            timestamp.interests.map(
              async (name) =>
                await postModel.saveItineraryDayTimestampInterest(
                  savedItineraryDayTimestamp.id,
                  name
                )
            );
          })
        );
      })
    );
  },

  async updateItineraryDetails(
    itineraryID: number,
    itinerary: IPostItineraryPayload
  ) {
    const updateItineraryPayload: IPostItineraryPayload = {
      totalDestinations: itinerary.totalDestinations,
      totalExpenses: itinerary.totalExpenses,
      days: itinerary.days,
    };
    await postModel.updateItinerary(itineraryID, updateItineraryPayload);
    await Promise.all(
      itinerary.days.map(async (item) => {
        const saveDayPayload: IPostModelSaveItineraryDayPayload = {
          postItineraryID: itineraryID,
          date: item.date,
          day: item.day,
          destinationsCount: item.destinationsCount,
          expenses: item.expenses,
        };
        const savedItineraryDay = await postModel.saveItineraryDay(
          saveDayPayload
        );
        await Promise.all(
          item.timestamps.map(async (timestamp) => {
            const saveTimestampPayload: IPostModelSaveItineraryDayTimestampPayload = {
              postItineraryDayID: savedItineraryDay.id,
              time: timestamp.time,
              transportation: timestamp.transportation,
              fare: timestamp.fare,
              expenses: timestamp.expenses,
              otherDetails: timestamp.otherDetails,
              destinationID: timestamp.destinationID,
            };
            const savedItineraryDayTimestamp = await postModel.saveItineraryDayTimestamp(
              saveTimestampPayload
            );
            timestamp.interests.map(
              async (name) =>
                await postModel.saveItineraryDayTimestampInterest(
                  savedItineraryDayTimestamp.id,
                  name
                )
            );
          })
        );
      })
    );
  },

  async saveReview(postID: number, review: IItineraryPostReviewInput) {
    const savedInternetAccessReview = await postModel.saveInternetAccessReview(
      review.internetAccess
    );
    const savedFinanceReview = await postModel.saveFinanceReview(
      review.finance
    );
    const saveReviewInput: IPostModelSaveReviewInput = {
      postID,
      postInternetAccessReviewID: savedInternetAccessReview.id,
      postFinanceReviewID: savedFinanceReview.id,
    };
    const savedReview = await postModel.saveReview(saveReviewInput);
    await Promise.all(
      review.restaurants.map(
        async (restaurant) =>
          await postModel.saveRestaurantReview(savedReview.id, restaurant)
      )
    );
    await Promise.all(
      review.lodgings.map(
        async (lodging) =>
          await postModel.saveLodgingReview(savedReview.id, lodging)
      )
    );
    await Promise.all(
      review.transportation.map(
        async (item) =>
          await postModel.saveTransportationReview(savedReview.id, item)
      )
    );
    await Promise.all(
      review.activities.map(
        async (activity) =>
          await postModel.saveActivityReview(savedReview.id, activity)
      )
    );
    await Promise.all(
      review.tips.map(
        async (tip) => await postModel.saveTipReview(savedReview.id, tip)
      )
    );
    await Promise.all(
      review.avoids.map(
        async (avoid) => await postModel.saveAvoidReview(savedReview.id, avoid)
      )
    );
  },

  async updateReview(postID: number, review: IItineraryPostReviewInput) {
    const gotReviewRawDetails = await postModel.getReviewRawDetailsByPostID(
      postID
    );
    await postModel.deleteReviewRestaurants(gotReviewRawDetails.id);
    await postModel.deleteReviewLodgings(gotReviewRawDetails.id);
    await postModel.deletePostReviewTransportation(gotReviewRawDetails.id);
    await postModel.deletePostReviewActivities(gotReviewRawDetails.id);
    await postModel.deletePostReviewTips(gotReviewRawDetails.id);
    await postModel.deletePostReviewAvoids(gotReviewRawDetails.id);
    await postModel.updateInternetAccessReview(
      gotReviewRawDetails.internetAccessID,
      review.internetAccess
    );
    await postModel.updateFinanceReview(
      gotReviewRawDetails.financeID,
      review.finance
    );
    await Promise.all(
      review.restaurants.map(
        async (restaurant) =>
          await postModel.saveRestaurantReview(
            gotReviewRawDetails.id,
            restaurant
          )
      )
    );
    await Promise.all(
      review.lodgings.map(
        async (lodging) =>
          await postModel.saveLodgingReview(gotReviewRawDetails.id, lodging)
      )
    );
    await Promise.all(
      review.transportation.map(
        async (item) =>
          await postModel.saveTransportationReview(gotReviewRawDetails.id, item)
      )
    );
    await Promise.all(
      review.activities.map(
        async (activity) =>
          await postModel.saveActivityReview(gotReviewRawDetails.id, activity)
      )
    );
    await Promise.all(
      review.tips.map(
        async (tip) =>
          await postModel.saveTipReview(gotReviewRawDetails.id, tip)
      )
    );
    await Promise.all(
      review.avoids.map(
        async (avoid) =>
          await postModel.saveAvoidReview(gotReviewRawDetails.id, avoid)
      )
    );
  },

  async updateFiles(
    postID: number,
    files: Express.Multer.File[]
  ): Promise<Post> {
    if (files.length > 1) {
      const gotFiles = await postModel.getFiles(postID);
      await Promise.all(
        gotFiles.map(
          async (file) => await cloudinaryService.delete(file.publicID)
        )
      );
      await postModel.deleteFiles(postID);
      await this.saveFiles(postID, files);
    }
    return postModel.getRawDetails(postID);
  },

  async updateTravelStoryDraft(
    postID: number,
    isDraft: boolean,
    input: IPostServiceUpdateTravelStoryDraftInput
  ) {
    const updateDetailsInput: IPostModelUpdateDetailsPayload = {
      title: input.title,
      text: input.text,
      type: "travel-story",
      isDraft,
      accountID: 0,
    };
    const updatedDetails = await postModel.updateDetails(
      postID,
      updateDetailsInput
    );
    await postModel.deleteDestinations(updatedDetails.id);
    await postModel.deleteCategories(updatedDetails.id);
    await postModel.deleteTravelEvents(updatedDetails.id);
    await this.saveDestinations(updatedDetails.id, input.destinationsID);
    await this.saveCategories(updatedDetails.id, input.categories);
    await this.saveTravelEvents(updatedDetails.id, input.travelEventsID);
    return await postModel.getTravelStoryDetails(updatedDetails.id);
  },

  async updateItineraryDraft(
    postID: number,
    isDraft: boolean,
    input: IPostServiceUpdateItineraryDraftInput
  ) {
    const updateDetailsPayload: IPostModelUpdateDetailsPayload = {
      title: input.title,
      text: input.text,
      type: "itinerary",
      isDraft,
      accountID: 0,
    };
    const updatedDetails = await postModel.updateDetails(
      postID,
      updateDetailsPayload
    );
    const gotItineraryRawDetails = await postModel.getItineraryRawDetailsByPostID(
      updatedDetails.id
    );
    await postModel.deleteDestinations(updatedDetails.id);
    await postModel.deleteCategories(updatedDetails.id);
    await postModel.deleteTravelEvents(updatedDetails.id);
    await postModel.deleteItineraryDays(gotItineraryRawDetails.id);
    await this.updateItineraryDetails(
      gotItineraryRawDetails.id,
      input.itinerary
    );
    await this.updateReview(postID, input.review);
    await this.saveDestinations(updatedDetails.id, input.destinationsID);
    await this.saveCategories(updatedDetails.id, input.categories);
    await this.saveTravelEvents(updatedDetails.id, input.travelEventsID);
    return await postModel.getItineraryDetails(postID);
  },
};

export default postService;
