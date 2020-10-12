import apiService from "@/services/api";

const authenticationApiService = {
  async signup(inputs) {
    return await apiService.post("/authentication/signup", inputs);
  },
};

export default authenticationApiService;
