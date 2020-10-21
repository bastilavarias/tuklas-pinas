import {
  PostModelSaveCategoryInput,
  PostModelSaveDestinationInput,
  PostModelSaveDetailsInput,
  PostModelSaveFileDetailsInput,
  PostModelSaveItineraryDayInput,
  PostModelSaveItineraryDayTimestampInput,
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
    await Promise.all(
      input.destinationsID.map(async (id) => {
        const saveDestinationInput: PostModelSaveDestinationInput = {
          postID: savedPostDetails.id,
          destinationID: id,
        };
        await postModel.saveDestination(saveDestinationInput);
      })
    );
    await Promise.all(
      input.categories.map(async (name) => {
        const saveCategoryInput: PostModelSaveCategoryInput = {
          postID: savedPostDetails.id,
          name,
        };
        if (name) await postModel.saveCategory(saveCategoryInput);
      })
    );
    await Promise.all(
      input.travelEventsID.map(async (id) => {
        const saveTravelEventInput: PostModelSaveTravelEventInput = {
          postID: savedPostDetails.id,
          travelEventID: id,
        };
        await postModel.saveTravelEvent(saveTravelEventInput);
      })
    );

    const cloudinaryFolder = "posts";
    const uploadedFilesMeta = await Promise.all(
      input.files.map(
        async (file) => await cloudinaryService.upload(file, cloudinaryFolder)
      )
    );
    await Promise.all(
      uploadedFilesMeta.map(async (meta) => {
        const fileData = await input.files.find(
          (file) => file.filename === meta.fileName
        );
        const savePostFileDetailsInput: PostModelSaveFileDetailsInput = {
          postID: savedPostDetails.id,
          publicID: meta.publicID,
          fileName: meta.fileName,
          url: meta.url,
          format: meta.format,
          // @ts-ignore
          data: fileData,
        };
        await postModel.saveFileDetails(savePostFileDetailsInput);
      })
    );
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
    await Promise.all(
      input.destinationsID.map(async (id) => {
        const saveDestinationInput: PostModelSaveDestinationInput = {
          postID: savedPostDetails.id,
          destinationID: id,
        };
        await postModel.saveDestination(saveDestinationInput);
      })
    );
    await Promise.all(
      input.categories.map(async (name) => {
        const saveCategoryInput: PostModelSaveCategoryInput = {
          postID: savedPostDetails.id,
          name,
        };
        if (name) await postModel.saveCategory(saveCategoryInput);
      })
    );
    await Promise.all(
      input.travelEventsID.map(async (id) => {
        const saveTravelEventInput: PostModelSaveTravelEventInput = {
          postID: savedPostDetails.id,
          travelEventID: id,
        };
        await postModel.saveTravelEvent(saveTravelEventInput);
      })
    );
    await Promise.all(
      input.itinerary.map(async (item) => {
        const savePostItineraryDayInput: PostModelSaveItineraryDayInput = {
          postID: savedPostDetails.id,
          date: item.date,
          destinationsCount: item.destinationsCount,
          expenses: item.expenses,
        };
        const savedItinerary = await postModel.saveItineraryDay(
          savePostItineraryDayInput
        );
        await item.timestamps.map(async (timestamp) => {
          const savePostItineraryDayTimestampInput: PostModelSaveItineraryDayTimestampInput = {
            postItineraryID: savedItinerary.id,
            time: timestamp.time,
            fare: timestamp.fare,
            expenses: timestamp.expenses,
            otherDetails: timestamp.otherDetails,
            destinationID: timestamp.destinationID,
            transportation: timestamp.transportation,
          };
          await postModel.saveItineraryDayTimestamp(
            savePostItineraryDayTimestampInput
          );
        });
      })
    );
    const cloudinaryFolder = "posts";
    const uploadedFilesMeta = await Promise.all(
      input.files.map(
        async (file) => await cloudinaryService.upload(file, cloudinaryFolder)
      )
    );
    await Promise.all(
      uploadedFilesMeta.map(async (meta) => {
        const fileData = await input.files.find(
          (file) => file.filename === meta.fileName
        );
        const savePostFileDetailsInput: PostModelSaveFileDetailsInput = {
          postID: savedPostDetails.id,
          publicID: meta.publicID,
          fileName: meta.fileName,
          url: meta.url,
          format: meta.format,
          // @ts-ignore
          data: fileData,
        };
        await postModel.saveFileDetails(savePostFileDetailsInput);
      })
    );
    return postModel.getDetails(savedPostDetails.id);
  },
};

export default postService;
