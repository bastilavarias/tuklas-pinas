import { PostServiceCreateTravelStoryInput } from "./typeDefs";
import cloudinaryService from "../cloudinary/service";

const postService = {
  async createTravelStory(
    _accountID: number,
    input: PostServiceCreateTravelStoryInput
  ) {
    const cloudinaryFolder = "posts";
    await Promise.all(
      input.files.map(async (file) => {
        await cloudinaryService.upload(file, cloudinaryFolder);
      })
    );
  },
};

export default postService;
