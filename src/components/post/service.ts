import {
  IPostItineraryInput,
  IPostModelSaveCategoryInput,
  IPostModelSaveDestinationInput,
  IPostModelSaveDetailsInput,
  IPostModelSaveFileInput,
  IPostModelSaveItineraryDayInput,
  IPostModelSaveItineraryDayTimestampInput,
  IPostModelSaveItineraryInput,
  IPostModelSaveTravelEventInput,
  IPostServiceCreateTravelStoryInput,
  IPostServiceCreateItineraryInput,
  IPostServiceCreateItineraryReview,
  IPostModelSaveReviewInput,
  IPostModelUpdateDetailsInput,
  IGenericSoftPost,
  IPostServiceSendCommentInput,
  IPostModelSaveCommentInput,
} from "./typeDefs";
import cloudinaryService from "../cloudinary/service";
import postModel from "./model";
import Post from "../../database/entities/Post";
import PostComment from "../../database/entities/PostComment";

const postService = {
  async createTravelStory(
    postID: number,
    input: IPostServiceCreateTravelStoryInput
  ): Promise<Post> {
    const updateDetailsInput: IPostModelUpdateDetailsInput = {
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
    return postModel.getTravelStorySoftDetails(updatedDetails.id);
  },

  async createItinerary(
    postID: number,
    input: IPostServiceCreateItineraryInput
  ): Promise<Post> {
    const updateDetailsInput: IPostModelUpdateDetailsInput = {
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
    await this.saveReviews(updatedDetails.id, input.review);
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

  async fetchNew(skip: number) {
    return await postModel.fetchNew(skip);
  },

  async getSoftDetails(
    postID: number,
    type: string
  ): Promise<IGenericSoftPost> {
    return type === "travel-story"
      ? await postModel.getTravelStorySoftDetails(postID)
      : await postModel.getItinerarySoftDetails(postID);
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
    return postModel.getBaseSoftDetails(savedPostDetails.id);
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
        const savePostFileInput: IPostModelSaveFileInput = {
          postID,
          publicID: meta.publicID,
          fileName: meta.fileName,
          url: meta.url,
          format: meta.format,
          // @ts-ignore
          data: fileData,
        };
        await postModel.saveFile(savePostFileInput);
      })
    );
  },

  async saveItineraryDetails(postID: number, itinerary: IPostItineraryInput) {
    const savePostItineraryInput: IPostModelSaveItineraryInput = {
      postID,
      totalDestinations: itinerary.totalDestinations,
      totalExpenses: itinerary.totalExpenses,
    };
    const savedPostItinerary = await postModel.saveItinerary(
      savePostItineraryInput
    );
    await Promise.all(
      itinerary.days.map(async (item) => {
        const savePostItineraryDayInput: IPostModelSaveItineraryDayInput = {
          postItineraryID: savedPostItinerary.id,
          date: item.date,
          day: item.day,
          destinationsCount: item.destinationsCount,
          expenses: item.expenses,
        };
        const savedItineraryDay = await postModel.saveItineraryDay(
          savePostItineraryDayInput
        );
        await Promise.all(
          item.timestamps.map(async (timestamp) => {
            const savePostItineraryDayTimestampInput: IPostModelSaveItineraryDayTimestampInput = {
              postItineraryDayID: savedItineraryDay.id,
              time: timestamp.time,
              transportation: timestamp.transportation,
              fare: timestamp.fare,
              expenses: timestamp.expenses,
              otherDetails: timestamp.otherDetails,
              destinationID: timestamp.destinationID,
            };
            const savedItineraryDayTimestamp = await postModel.saveItineraryDayTimestamp(
              savePostItineraryDayTimestampInput
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

  async saveReviews(postID: number, review: IPostServiceCreateItineraryReview) {
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
};

export default postService;
