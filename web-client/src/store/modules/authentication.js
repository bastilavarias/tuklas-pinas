import {
  AUTHENTICATION_SET_SIGNUP_ERROR,
  AUTHENTICATION_SIGNUP,
} from "@/store/types/authentication";
import tokenService from "@/services/token";
import authenticationApiService from "@/services/api/modules/authentication";

const authenticationStore = {
  state: {
    isAuthenticated: !!tokenService.getToken(),
    token: tokenService.getToken(),
  },

  mutations: {
    [AUTHENTICATION_SET_SIGNUP_ERROR](state, error) {
      state.signupError = Object.assign({}, error);
    },
  },

  actions: {
    async [AUTHENTICATION_SIGNUP]({ commit }, inputs) {
      try {
        const result = await authenticationApiService.signup(inputs);
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
