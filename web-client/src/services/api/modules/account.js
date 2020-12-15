import apiService from "@/services/api";

const accountApiService = {
  async getPosts(accountID) {
    const result = await apiService.get(`/account/posts/${accountID}`);
    return result.data || [];
  },

  async getDiscoveryCoordination(accountID) {
    const result = await apiService.get(
      `/account/discovery-coordination/${accountID}`
    );
    return result.data || [];
  },
};

export default accountApiService;
