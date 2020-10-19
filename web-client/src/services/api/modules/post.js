import apiService from "@/services/api";

const postService = {
  async createTravelStory(input) {
    return await apiService.post("/post/create-travel-story", input);
  },
};

export default postService;
