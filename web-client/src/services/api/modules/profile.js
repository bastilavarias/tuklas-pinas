import apiService from "@/services/api";

const profileApiService = {
  async update(profileID, formData) {
    const result = await apiService.put(
      `/profile/update/${profileID}`,
      formData
    );
    return result.data || {};
  },
};

export default profileApiService;
