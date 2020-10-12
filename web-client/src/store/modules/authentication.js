import { AUTHENTICATION_SIGNUP } from "@/store/types/authentication";
import tokenService from "@/services/token";
import authenticationApiService from "@/services/api/modules/authentication";

const authenticationStore = {
  state: {
    isAuthenticated: !!tokenService.getToken(),
    token: tokenService.getToken(),
  },

  actions: {
    async [AUTHENTICATION_SIGNUP](context, inputs) {
      try {
        const result = await authenticationApiService.signup(inputs);
        const token = result.data.token ? result.data.token : "";
        tokenService.saveToken(token);
        return token;
      } catch (errors) {
        throw new Error(`[RWV] ApiService ${errors}`);
      }
    },
  },
};

export default authenticationStore;
