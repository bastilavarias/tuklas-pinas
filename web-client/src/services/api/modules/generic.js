import apiService from "@/services/api";

const genericApiService = {
  async fetchNationalities() {
    const result = await apiService.get("/generic/nationalities");
    return this.catcher(result.data, []);
  },
  async fetchSexes() {
    const result = await apiService.get("/generic/sexes");
    return this.catcher(result.data, []);
  },
  catcher(value, _catch) {
    return value ? value : _catch;
  },
};

export default genericApiService;
