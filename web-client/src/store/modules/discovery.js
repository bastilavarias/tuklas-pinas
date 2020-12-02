import { SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS } from "@/store/types/generic";
import geolocationService from "@/services/geolocation";
import { DISCOVERY_SEARCH_GEOLOCATIONS } from "@/store/types/discovery";

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
  },
};

export default discoveryStore;
