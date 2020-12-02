import { SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS } from "@/store/types/generic";
import geolocationService from "@/services/geolocation";
import {
  CREATE_DISCOVERY,
  DISCOVERY_SEARCH_GEOLOCATIONS,
} from "@/store/types/discovery";
import discoveryApiService from "@/services/api/modules/discovery";

const discoveryStore = {
  actions: {
    async [DISCOVERY_SEARCH_GEOLOCATIONS]({ commit }, query) {
      try {
        return await geolocationService.search(query);
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },

    async [CREATE_DISCOVERY](
      { commit },
      { latitude, longitude, text, rating, files }
    ) {
      try {
        const formData = new FormData();
        files.map((file) => formData.append("files", file));
        formData.append("text", text);
        formData.append("rating", rating);
        const createdDiscovery = await discoveryApiService.create(
          latitude,
          longitude,
          formData
        );
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Adding your experience done!",
          color: "success",
        });
        return createdDiscovery;
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

export default discoveryStore;
