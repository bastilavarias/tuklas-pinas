import { CREATE_TRAVEL_STORY_POST } from "@/store/types/post";
import postService from "@/services/api/modules/post";

const postStore = {
  actions: {
    async [CREATE_TRAVEL_STORY_POST](_, form) {
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
        categories.map((category) => formData.append("categories", category));
        travelEventsID.map((id) => formData.append("travelEventsID", id));
        files.map((file) => formData.append("files", file));
        const result = await postService.createTravelStory(formData);
        return result.data ? result.data : {};
      } catch (error) {
        return {};
      }
    },
  },
};

export default postStore;
