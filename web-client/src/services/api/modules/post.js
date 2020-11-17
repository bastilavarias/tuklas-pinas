import apiService from "@/services/api";

const postApiService = {
  async createTravelStory(postID, formData) {
    return await apiService.post(
      `/post/create-travel-story/${postID}`,
      formData
    );
  },

  async saveTravelStoryDraft(postID, formData) {
    return await apiService.post(
      `/post/save-travel-story-draft/${postID}`,
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

  async getSoftDetails(postID, type) {
    const result = await apiService.get(`/post/soft-details/${postID}/${type}`);
    return result.data || {};
  },
};

export default postApiService;
