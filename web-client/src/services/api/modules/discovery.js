import apiService from "@/services/api";

const discoveryApiService = {
  async create(latitude, longitude, formData) {
    const result = await apiService.post(
      `/discovery/create/${latitude}/${longitude}`,
      formData
    );
    return result.data || {};
  },
};

export default discoveryApiService;
