import {
  CREATE_ITINERARY_POST,
  CREATE_TRAVEL_STORY_POST,
  FETCH_POSTS,
  FETCH_POST_COMMENT_REPLIES,
  FETCH_POST_COMMENTS,
  GET_POST_SOFT_DETAILS,
  REMOVE_POST_COMMENT_REACTION,
  REMOVE_POST_COMMENT_REPLY_REACTION,
  REMOVE_POST_REACTION,
  SEND_POST_COMMENT,
  SEND_POST_COMMENT_REACTION,
  SEND_POST_COMMENT_REPLY,
  SEND_POST_COMMENT_REPLY_REACTION,
  SEND_POST_REACTION,
  SAVE_TRAVEL_STORY_POST_DRAFT,
  FETCH_TRAVEL_STORY_POST_DRAFTS_PREVIEW,
  GET_TRAVEL_STORY_POST_DETAILS,
  UPDATE_TRAVEL_STORY_POST_DRAFT,
  SAVE_ITINERARY_POST_DRAFT,
  GET_ITINERARY_POST_DETAILS,
  UPDATE_ITINERARY_POST_DRAFT,
} from "@/store/types/post";
import postApiService from "@/services/api/modules/post";
import { SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS } from "@/store/types/generic";
import { FETCH_ITINERARY_POST_DRAFTS_PREVIEW } from "@/store/types/post";

const postStore = {
  actions: {
    async [CREATE_TRAVEL_STORY_POST](
      { commit },
      { title, text, destinationsID, categories, travelEventsID, files }
    ) {
      try {
        const formData = new FormData();
        files.map((file) => formData.append("files", file));
        const uploadedPostFiles = await postApiService.uploadFiles(formData);
        const form = {
          title,
          text,
          destinationsID,
          travelEventsID,
          categories,
        };
        const result = await postApiService.createTravelStory(
          uploadedPostFiles.id,
          form
        );
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Creating travel story done!",
          color: "success",
        });
        return result.data ? result.data : {};
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },

    async [SAVE_TRAVEL_STORY_POST_DRAFT](
      { commit },
      { title, text, destinationsID, categories, travelEventsID, files }
    ) {
      try {
        const formData = new FormData();
        files.map((file) => formData.append("files", file));
        const uploadedPostFiles = await postApiService.uploadFiles(formData);
        const form = {
          title,
          text,
          destinationsID,
          travelEventsID,
          categories,
        };
        const savedPostDetails = await postApiService.saveTravelStoryDraftDetails(
          uploadedPostFiles.id,
          form
        );
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Saving travel story draft done!",
          color: "success",
        });
        return savedPostDetails;
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [CREATE_ITINERARY_POST](
      { commit },
      {
        title,
        text,
        destinationsID,
        categories,
        travelEventsID,
        files,
        itinerary,
        review,
      }
    ) {
      try {
        const formData = new FormData();
        files.map((file) => formData.append("files", file));
        const uploadedPostFiles = await postApiService.uploadFiles(formData);
        const form = {
          title,
          text,
          destinationsID,
          travelEventsID,
          categories,
          itinerary,
          review,
        };
        const createdItineraryPost = await postApiService.createItinerary(
          uploadedPostFiles.id,
          form
        );
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Creating itinerary done!",
          color: "success",
        });
        return createdItineraryPost || {};
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [SAVE_ITINERARY_POST_DRAFT](
      { commit },
      {
        title,
        text,
        destinationsID,
        categories,
        travelEventsID,
        files,
        itinerary,
        review,
      }
    ) {
      try {
        const formData = new FormData();
        files.map((file) => formData.append("files", file));
        const uploadedPostFiles = await postApiService.uploadFiles(formData);
        const form = {
          title,
          text,
          destinationsID,
          travelEventsID,
          categories,
          itinerary,
          review,
        };
        const savedPostDetails = await postApiService.saveItineraryDraftDetails(
          uploadedPostFiles.id,
          form
        );
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Saving itinerary draft done!",
          color: "success",
        });
        return savedPostDetails || {};
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },

    async [SEND_POST_COMMENT]({ commit }, { postID, text }) {
      try {
        const form = { text };
        const sentComment = await postApiService.sendComment(postID, form);
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Comment successfully sent!",
          color: "success",
        });
        return sentComment || {};
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [SEND_POST_COMMENT_REPLY]({ commit }, { commentID, text }) {
      try {
        const form = { text };
        const sentComment = await postApiService.sendCommentReply(
          commentID,
          form
        );
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Reply successfully sent!",
          color: "success",
        });
        return sentComment || {};
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [SEND_POST_REACTION]({ commit }, { postID, type }) {
      try {
        const sentReaction = await postApiService.sendReaction(postID, type);
        return sentReaction || {};
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [SEND_POST_COMMENT_REACTION]({ commit }, { commentID, type }) {
      try {
        const sentReaction = await postApiService.sendCommentReaction(
          commentID,
          type
        );
        return sentReaction || {};
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [SEND_POST_COMMENT_REPLY_REACTION]({ commit }, { replyID, type }) {
      try {
        const sentReaction = await postApiService.sendCommentReplyReaction(
          replyID,
          type
        );
        return sentReaction || {};
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [FETCH_POSTS]({ commit }, { type, skip }) {
      try {
        return await postApiService.fetch(type, skip);
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [FETCH_POST_COMMENTS]({ commit }, { postID, sort, skip }) {
      try {
        return await postApiService.fetchComments(postID, sort, skip);
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [FETCH_POST_COMMENT_REPLIES]({ commit }, { commentID, skip }) {
      try {
        return await postApiService.fetchCommentReplies(commentID, skip);
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [FETCH_TRAVEL_STORY_POST_DRAFTS_PREVIEW]({ commit }, authorID) {
      try {
        return await postApiService.fetchTravelStoryDraftsPreview(authorID);
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [FETCH_ITINERARY_POST_DRAFTS_PREVIEW]({ commit }, authorID) {
      try {
        return await postApiService.fetchItineraryDraftsPreview(authorID);
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [GET_POST_SOFT_DETAILS]({ commit }, { postID, type }) {
      try {
        return await postApiService.getSoftDetails(postID, type);
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [GET_TRAVEL_STORY_POST_DETAILS]({ commit }, postID) {
      try {
        return await postApiService.getTravelStoryDetails(postID);
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [GET_ITINERARY_POST_DETAILS]({ commit }, postID) {
      try {
        return await postApiService.getItineraryDetails(postID);
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [REMOVE_POST_REACTION]({ commit }, postID) {
      try {
        const isRemoved = await postApiService.removeReaction(postID);
        return isRemoved || false;
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [REMOVE_POST_COMMENT_REACTION]({ commit }, commentID) {
      try {
        const isRemoved = await postApiService.removeCommentReaction(commentID);
        return isRemoved || false;
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [REMOVE_POST_COMMENT_REPLY_REACTION]({ commit }, replyID) {
      try {
        const isRemoved = await postApiService.removeCommentReplyReaction(
          replyID
        );
        return isRemoved || false;
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [UPDATE_TRAVEL_STORY_POST_DRAFT](
      { commit },
      {
        postID,
        isDraft,
        title,
        text,
        destinationsID,
        categories,
        travelEventsID,
        files,
      }
    ) {
      try {
        const formData = new FormData();
        files.map((file) => formData.append("files", file));
        const updatedPostFiles = await postApiService.updateFiles(
          postID,
          formData
        );
        const form = {
          title,
          text,
          destinationsID,
          travelEventsID,
          categories,
        };
        const result = await postApiService.updateTravelStoryDraft(
          updatedPostFiles.id,
          isDraft,
          form
        );
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Updating travel story draft done!",
          color: "success",
        });
        return result.data ? result.data : {};
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
    async [UPDATE_ITINERARY_POST_DRAFT](
      { commit },
      {
        postID,
        isDraft,
        title,
        text,
        destinationsID,
        categories,
        travelEventsID,
        files,
        itinerary,
        review,
      }
    ) {
      try {
        const formData = new FormData();
        files.map((file) => formData.append("files", file));
        const updatedPostFiles = await postApiService.updateFiles(
          postID,
          formData
        );
        const form = {
          title,
          text,
          destinationsID,
          travelEventsID,
          categories,
          itinerary,
          review,
        };
        const result = await postApiService.updateItineraryDraft(
          updatedPostFiles.id,
          isDraft,
          form
        );
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Updating itinerary draft done!",
          color: "success",
        });
        return result.data ? result.data : {};
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
  },
};

export default postStore;
