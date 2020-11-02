import apiService from "@/services/api";

const postService = {
  async createTravelStory(postID, formData) {
    return await apiService.post(
      `/post/create-travel-story/${postID}`,
      formData
    );
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
