import apiService from "@/services/api";

const discoveryApiService = {
  async create(placeName, country, latitude, longitude, formData) {
    const result = await apiService.post(
      `/discovery/create/${placeName}/${country}/${latitude}/${longitude}`,
      formData
    );
    return result.data || {};
  },
};

export default discoveryApiService;
