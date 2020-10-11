import genericApiService from "@/common/api-service/modules/generic";
import {
  GENERIC_FETCH_NATIONALITIES,
  GENERIC_FETCH_SEXES,
  GENERIC_SET_NATIONALITIES,
  GENERIC_SET_SEXES,
} from "@/store/types/generic";

const genericStore = {
  state: {
    nationalities: [],
    sexes: [],
  },
  mutations: {
    [GENERIC_SET_NATIONALITIES](state, nationalities) {
      state.nationalities = nationalities;
    },
    [GENERIC_SET_SEXES](state, sexes) {
      state.sexes = sexes;
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
    async [GENERIC_FETCH_SEXES]({ commit }) {
      try {
        const sexes = await genericApiService.fetchSexes();
        commit(GENERIC_SET_SEXES, sexes);
      } catch (errors) {
        throw new Error(`[RWV] ApiService ${errors}`);
      }
    },
  },
};

export default genericStore;
