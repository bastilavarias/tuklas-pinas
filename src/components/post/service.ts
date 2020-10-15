import { PostServiceCreateTravelStoryInput } from "./typeDefs";

const postService = {
  async createTravelStory(
    accountID: number,
    input: PostServiceCreateTravelStoryInput
  ) {
    console.log(accountID);
    console.log(input);
  },
};

export default postService;
