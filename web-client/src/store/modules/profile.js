import { UPDATE_PROFILE } from "@/store/types/profile";
import { SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS } from "@/store/types/generic";
import profileApiService from "@/services/api/modules/profile";

const profileStore = {
  actions: {
    async [UPDATE_PROFILE](
      { commit },
      {
        profileID,
        firstName,
        lastName,
        nationality,
        sex,
        birthDate,
        displayImage,
        coverPhoto,
      }
    ) {
      try {
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("nationality", nationality);
        formData.append("birthDate", birthDate);
        formData.append("sex", sex);
        formData.append("displayImage", displayImage);
        formData.append("coverPhoto", coverPhoto);
        // [displayImage, coverPhoto].map((image) =>
        //   formData.append(`images`, image)
        // );
        const updatedProfile = await profileApiService.update(
          profileID,
          formData
        );
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Update profile done!",
          color: "success",
        });
        return updatedProfile;
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

export default profileStore;
