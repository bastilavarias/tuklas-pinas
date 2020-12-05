import { SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS } from "@/store/types/generic";
import geolocationService from "@/services/geolocation";
import {
  CREATE_DISCOVERY,
  DISCOVERY_GET_PLACE_DETAILS,
  DISCOVERY_SEARCH_GEOLOCATIONS,
  FETCH_DISCOVERIES,
  SET_DISCOVERIES,
} from "@/store/types/discovery";
import discoveryApiService from "@/services/api/modules/discovery";

const discoveryStore = {
  state: {
    list: [],
  },

  mutations: {
    [SET_DISCOVERIES](state, discoveries) {
      state.list = discoveries;
    },
  },

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
      { placeName, country, latitude, longitude, text, rating, files }
    ) {
      try {
        const formData = new FormData();
        files.map((file) => formData.append("files", file));
        formData.append("text", text);
        formData.append("rating", rating);
        const createdDiscovery = await discoveryApiService.create(
          placeName,
          country,
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

    async [FETCH_DISCOVERIES]({ commit }) {
      try {
        const fetchedDiscoveries = await discoveryApiService.fetchDiscoveries();
        commit(SET_DISCOVERIES, fetchedDiscoveries);
        return fetchedDiscoveries;
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },

    async [DISCOVERY_GET_PLACE_DETAILS]({ commit }, { latitude, longitude }) {
      try {
        return await discoveryApiService.getPlaceDetails(latitude, longitude);
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
