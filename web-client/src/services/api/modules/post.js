import apiService from "@/services/api";

const postApiService = {
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
    const result = await apiService.post("/post/upload-files", formData);
    return result.data || [];
  },

  async fetchNewPosts(skip) {
    const result = await apiService.get(`/post/new-posts/${skip}`);
    return result.data || [];
  },
};

export default postApiService;
