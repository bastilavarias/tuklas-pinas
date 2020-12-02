import apiService from "@/services/api";

const discoveryApiService = {
  async create({ latitude, longitude, text, rating, files }) {
    const result = await apiService.post(
      `/discovery/create/${latitude}/${longitude}`,
      { text, rating, files }
    );
    return result.data || {};
  },
};

export default discoveryApiService;
