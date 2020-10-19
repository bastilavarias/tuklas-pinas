import apiService from "@/services/api";

const genericApiService = {
  async fetchNationalities() {
    return await apiService.get("/generic/nationalities");
  },

  async fetchSexes() {
    return await apiService.get("/generic/sexes");
  },

  async fetchDestinations() {
    return await apiService.get("/generic/destinations");
  },

  async fetchTravelEvents() {
    return await apiService.get("/generic/travel-events");
  },
};

export default genericApiService;
