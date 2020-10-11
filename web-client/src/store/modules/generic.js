import genericApiService from "@/common/api-service/modules/generic";
import {
  GENERIC_FETCH_NATIONALITIES,
  GENERIC_SET_NATIONALITIES,
} from "@/store/types/generic";

const genericStore = {
  state: {
    nationalities: [],
  },
  mutations: {
    [GENERIC_SET_NATIONALITIES](state, nationalities) {
      state.nationalities = nationalities;
    },
  },
  actions: {
    async [GENERIC_FETCH_NATIONALITIES]({ commit }) {
      try {
        const nationalities = await genericApiService.fetchNationalities();
        commit(GENERIC_SET_NATIONALITIES, nationalities);
      } catch (errors) {
        throw new Error(`[RWV] ApiService ${errors}`);
      }
    },
  },
};

export default genericStore;
