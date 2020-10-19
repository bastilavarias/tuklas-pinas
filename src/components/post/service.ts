import {
  PostModelSaveDestinationInput,
  PostModelSaveDetailsInput,
  PostModelSaveFileDetailsInput,
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
