import {
  AUTHENTICATION_SIGN_IN,
  AUTHENTICATION_SIGNUP,
} from "@/store/types/authentication";
import tokenService from "@/services/token";
import authenticationApiService from "@/services/api/modules/authentication";

const authenticationStore = {
  state: {
    isAuthenticated: !!tokenService.getToken(),
    token: tokenService.getToken(),
  },

  mutations: {},

  actions: {
    async [AUTHENTICATION_SIGNUP]({ commit }, input) {
      try {
        const result = await authenticationApiService.signup(input);
        const token = result.data.token ? result.data.token : "";
        tokenService.saveToken(token);
        return { token, error: { email: "" } };
      } catch (error) {
        return { token: "", error: error.response.data };
      }
    },

    async [AUTHENTICATION_SIGN_IN]({ commit }, input) {
      try {
        const result = await authenticationApiService.signIn(input);
        const token = result.data.token ? result.data.token : "";
        tokenService.saveToken(token);
        return { token, error: { email: "" } };
      } catch (error) {
        return { token: "", error: error.response.data };
      }
    },
  },
};

export default authenticationStore;
