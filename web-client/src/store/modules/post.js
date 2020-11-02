import {
  CREATE_ITINERARY_POST,
  CREATE_TRAVEL_STORY_POST,
} from "@/store/types/post";
import postService from "@/services/api/modules/post";
import { SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS } from "@/store/types/generic";

const postStore = {
  actions: {
    async [CREATE_TRAVEL_STORY_POST]({ commit }, form) {
      try {
        const {
          title,
          text,
          destinationsID,
          categories,
          travelEventsID,
          files,
        } = form;
        const formData = new FormData();
        formData.append("title", title);
        formData.append("text", text);
        destinationsID.map((id, index) =>
          formData.append(`destinationsID[${index}]`, id)
        );
        if (categories.length > 0) {
          categories.map((id, index) =>
            formData.append(`categories[${index}]`, id)
          );
        } else {
          formData.append("categories[0]", "");
        }
        travelEventsID.map((id, index) =>
          formData.append(`travelEventsID[${index}]`, id)
        );
        files.map((file) => formData.append("files", file));
        const result = await postService.createTravelStory(formData);
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
        const uploadFilesResult = await postService.uploadFiles(formData);
        const uploadedPostFiles = uploadFilesResult.data;
        const form = {
          title,
          text,
          destinationsID,
          travelEventsID,
          categories,
          files: uploadedPostFiles.files,
          itinerary,
          review,
        };
        const createdItineraryPost = await postService.createItinerary(
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
  },
};

export default postStore;
