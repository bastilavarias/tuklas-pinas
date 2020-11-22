import apiService from "@/services/api";

const postApiService = {
  async createTravelStory(postID, form) {
    return await apiService.post(`/post/create-travel-story/${postID}`, form);
  },

  async saveTravelStoryDraftDetails(postID, form) {
    const result = await apiService.post(
      `/post/save-travel-story-draft/${postID}`,
      form
    );
    return result.data || {};
  },

  async saveItineraryDraftDetails(postID, form) {
    const result = await apiService.post(
      `/post/save-itinerary-draft/${postID}`,
      form
    );
    return result.data || {};
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

  async sendReaction(postID, type) {
    const result = await apiService.post(
      `/post/send-reaction/${postID}/${type}`
    );
    return result.data || {};
  },

  async sendCommentReaction(commentID, type) {
    const result = await apiService.post(
      `/post/send-comment-reaction/${commentID}/${type}`
    );
    return result.data || {};
  },

  async sendCommentReplyReaction(replyID, type) {
    const result = await apiService.post(
      `/post/send-comment-reply-reaction/${replyID}/${type}`
    );
    return result.data || {};
  },

  async removeReaction(postID) {
    const result = await apiService.delete(`/post/remove-reaction/${postID}`);
    return result.data.isRemoved || {};
  },

  async removeCommentReaction(commentID) {
    const result = await apiService.delete(
      `/post/remove-comment-reaction/${commentID}`
    );
    return result.data.isRemoved || {};
  },

  async removeCommentReplyReaction(replyID) {
    const result = await apiService.delete(
      `/post/remove-comment-reply-reaction/${replyID}`
    );
    return result.data.isRemoved || {};
  },

  async uploadFiles(formData) {
    const result = await apiService.post("/post/upload-files", formData);
    return result.data || [];
  },

  async fetch(type, skip) {
    const result = await apiService.get(`/post/posts/${type}/${skip}`);
    return result.data || [];
  },

  async fetchComments(postID, sort, skip) {
    const result = await apiService.get(
      `/post/comments/${postID}/${sort}/${skip}`
    );
    return result.data || [];
  },

  async fetchCommentReplies(commentID, skip) {
    const result = await apiService.get(
      `/post/comment-replies/${commentID}/${skip}`
    );
    return result.data || [];
  },

  async fetchTravelStoryDraftsPreview(authorID) {
    const result = await apiService.get(
      `/post/drafts-preview/travel-story/${authorID}`
    );
    return result.data || [];
  },

  async fetchItineraryDraftsPreview(authorID) {
    const result = await apiService.get(
      `/post/drafts-preview/itinerary/${authorID}`
    );
    return result.data || [];
  },

  async getSoftDetails(postID, type) {
    const result = await apiService.get(`/post/soft-details/${postID}/${type}`);
    return result.data || {};
  },

  async getTravelStoryDetails(postID) {
    const result = await apiService.get(`/post/travel-story/${postID}`);
    return result.data || {};
  },

  async getItineraryDetails(postID) {
    const result = await apiService.get(`/post/itinerary/${postID}`);
    return result.data || {};
  },

  async updateTravelStoryDraft(postID, isDraft, form) {
    return await apiService.put(
      `/post/update-travel-story-draft/${postID}/${isDraft}`,
      form
    );
  },

  async updateItineraryDraft(postID, isDraft, form) {
    return await apiService.put(
      `/post/update-itinerary-draft/${postID}/${isDraft}`,
      form
    );
  },

  async updateFiles(postID, formData) {
    const result = await apiService.put(
      `/post/update-files/${postID}`,
      formData
    );
    return result.data || [];
  },
};

export default postApiService;
