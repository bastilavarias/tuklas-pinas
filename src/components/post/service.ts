import {
  Itinerary,
  PostModelSaveCategoryInput,
  PostModelSaveDestinationInput,
  PostModelSaveDetailsInput,
  PostModelSaveFileInput,
  PostModelSaveItineraryDayInput,
  PostModelSaveItineraryDayTimestampInput,
  PostModelSaveItineraryInput,
  PostModelSaveTravelEventInput,
  PostServiceCreateItineraryInput,
  PostServiceCreateTravelStoryInput,
} from "./typeDefs";
import cloudinaryService from "../cloudinary/service";
import postModel from "./model";
import Post from "../../database/entities/Post";

const postService = {
  async createTravelStory(
    accountID: number,
    input: PostServiceCreateTravelStoryInput
  ): Promise<Post> {
    const savePostDetailsInput: PostModelSaveDetailsInput = {
      title: input.title,
      text: input.text,
      type: "travel-story",
      isDraft: false,
      accountID,
    };
    const savedPostDetails = await postModel.saveDetails(savePostDetailsInput);
    await this.saveDestinations(savedPostDetails.id, input.destinationsID);
    await this.saveCategories(savedPostDetails.id, input.categories);
    await this.saveTravelEvents(savedPostDetails.id, input.travelEventsID);
    await this.saveFiles(savedPostDetails.id, input.files);
    return postModel.getDetails(savedPostDetails.id);
  },

  async createItinerary(
    accountID: number,
    input: PostServiceCreateItineraryInput
  ): Promise<Post> {
    const savePostDetailsInput: PostModelSaveDetailsInput = {
      title: input.title,
      text: input.text,
      type: "itinerary",
      isDraft: false,
      accountID,
    };
    const savedPostDetails = await postModel.saveDetails(savePostDetailsInput);
    await this.saveDestinations(savedPostDetails.id, input.destinationsID);
    await this.saveCategories(savedPostDetails.id, input.categories);
    await this.saveTravelEvents(savedPostDetails.id, input.travelEventsID);
    await this.saveItineraryDetails(savedPostDetails.id, input.itinerary);
    return postModel.getDetails(savedPostDetails.id);
  },

  async saveDestinations(postID: number, destinationsID: number[]) {
    await Promise.all(
      destinationsID.map(async (id) => {
        const saveDestinationInput: PostModelSaveDestinationInput = {
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
        const saveCategoryInput: PostModelSaveCategoryInput = {
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
        const saveTravelEventInput: PostModelSaveTravelEventInput = {
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
        const savePostFileInput: PostModelSaveFileInput = {
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

  async saveItineraryDetails(postID: number, itinerary: Itinerary) {
    const savePostItineraryInput: PostModelSaveItineraryInput = {
      postID,
      totalDestinations: itinerary.totalDestinations,
      totalExpenses: itinerary.totalExpenses,
    };
    const savedPostItinerary = await postModel.saveItinerary(
      savePostItineraryInput
    );
    await Promise.all(
      itinerary.days.map(async (item) => {
        const savePostItineraryDayInput: PostModelSaveItineraryDayInput = {
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
            const savePostItineraryDayTimestampInput: PostModelSaveItineraryDayTimestampInput = {
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
};

export default postService;
