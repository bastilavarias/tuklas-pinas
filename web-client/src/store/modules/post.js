import {
  CREATE_ITINERARY_POST,
  CREATE_TRAVEL_STORY_POST,
  FETCH_NEW_POSTS,
  FETCH_POST_COMMENTS,
  GET_POST_SOFT_DETAILS,
  SEND_POST_COMMENT,
  SEND_POST_COMMENT_REPLY,
  SEND_POST_REACTION,
} from "@/store/types/post";
import postApiService from "@/services/api/modules/post";
import { SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS } from "@/store/types/generic";
import apiService from "@/services/api";

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
    async [FETCH_NEW_POSTS]({ commit }, skip) {
      try {
        return await postApiService.fetchNew(skip);
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
  },
};

export default postStore;
