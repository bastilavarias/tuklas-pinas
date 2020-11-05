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

  async sendComment(postID, form) {
    const result = await apiService.post(`/post/send-comment/${postID}`, form);
    return result.data || {};
  },

  async sendCommentReply(commentID, form) {
    const result = await apiService.post(
      `/post/send-comment-reply/${commentID}`,
      form
    );
    return result.data || {};
  },

  async uploadFiles(formData) {
    const result = await apiService.post("/post/upload-files", formData);
    return result.data || [];
  },

  async fetchNew(skip) {
    const result = await apiService.get(`/post/new-posts/${skip}`);
    return result.data || [];
  },

  async fetchComments(postID, type, skip) {
    const result = await apiService.get(
      `/post/comments/${postID}/${type}/${skip}`
    );
    return result.data || [];
  },

  async getSoftDetails(postID, type) {
    const result = await apiService.get(`/post/soft-details/${postID}/${type}`);
    return result.data || {};
  },
};

export default postApiService;
