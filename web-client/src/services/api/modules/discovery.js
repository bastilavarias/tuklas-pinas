import apiService from "@/services/api";

const discoveryApiService = {
  async create(placeName, country, latitude, longitude, formData) {
    const result = await apiService.post(
      `/discovery/create/${placeName}/${country}/${latitude}/${longitude}`,
      formData
    );
    return result.data || {};
  },

  async fetchDiscoveries() {
    const result = await apiService.get("/discovery");
    return result.data || [];
  },

  async getPlaceDetails(latitude, longitude) {
    const result = await apiService.get(
      `/discovery/place-details/${latitude}/${longitude}`
    );
    return result.data || {};
  },
};

export default discoveryApiService;
