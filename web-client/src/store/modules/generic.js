import genericApiService from "@/services/api/modules/generic";
import {
  FETCH_GENERIC_DESTINATIONS,
  FETCH_GENERIC_NATIONALITIES,
  FETCH_GENERIC_SEXES,
  FETCH_GENERIC_TRAVEL_EVENTS,
  SET_GENERIC_DESTINATIONS,
  SET_GENERIC_NATIONALITIES,
  SET_GENERIC_SEXES,
  SET_GENERIC_TRAVEL_EVENTS,
} from "@/store/types/generic";

const genericStore = {
  state: {
    nationalities: [],
    sexes: [],
    destinations: [],
    travelEvents: [],
  },
  mutations: {
    [SET_GENERIC_NATIONALITIES](state, nationalities) {
      state.nationalities = nationalities;
    },
    [SET_GENERIC_SEXES](state, sexes) {
      state.sexes = sexes;
    },
    [SET_GENERIC_SEXES](state, sexes) {
      state.sexes = sexes;
    },
    [SET_GENERIC_DESTINATIONS](state, destinations) {
      state.destinations = destinations;
    },
    [SET_GENERIC_TRAVEL_EVENTS](state, travelEvents) {
      state.travelEvents = travelEvents;
    },
  },
  actions: {
    async [FETCH_GENERIC_NATIONALITIES]({ commit }) {
      try {
        const result = await genericApiService.fetchNationalities();
        const nationalities = result ? result.data : [];
        commit(SET_GENERIC_NATIONALITIES, nationalities);
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },
    async [FETCH_GENERIC_SEXES]({ commit }) {
      try {
        const result = await genericApiService.fetchSexes();
        const sexes = result ? result.data : [];
        commit(SET_GENERIC_SEXES, sexes);
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },
    async [FETCH_GENERIC_DESTINATIONS]({ commit }) {
      try {
        const result = await genericApiService.fetchDestinations();
        const destinations = result ? result.data : [];
        commit(SET_GENERIC_DESTINATIONS, destinations);
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },
    async [FETCH_GENERIC_TRAVEL_EVENTS]({ commit }) {
      try {
        const result = await genericApiService.fetchTravelEvents();
        const travelEvents = result ? result.data : [];
        commit(SET_GENERIC_TRAVEL_EVENTS, travelEvents);
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },
  },
};

export default genericStore;
