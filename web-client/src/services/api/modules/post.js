import apiService from "@/services/api";

const postService = {
  async createTravelStory(formData) {
    return await apiService.post("/post/create-travel-story", formData);
  },
};

export default postService;
