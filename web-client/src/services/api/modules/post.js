import apiService from "@/services/api";

const postService = {
  async createTravelStory(formData) {
    return await apiService.post("/post/create-travel-story", formData);
  },
  async createItinerary(postID, form) {
    const result = await apiService.post(
      `/post/create-itinerary/${postID}`,
      form
    );
    return result.data || {};
  },
  async uploadFiles(formData) {
    return await apiService.post("/post/upload-files", formData);
  },
};

export default postService;
