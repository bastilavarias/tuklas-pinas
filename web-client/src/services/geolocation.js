import apiService from "@/services/api";

const geolocationService = {
  async search(query) {
    const url = `https://nominatim.openstreetmap.org/search/${query}?format=json&addressdetails=1&limit=5`;
    const result = await apiService.get(url);
    return result.data || [];
  },
};

export default geolocationService;
