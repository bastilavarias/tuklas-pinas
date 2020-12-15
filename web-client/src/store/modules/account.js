import { GET_ACCOUNT_POSTS } from "@/store/types/account";
import { SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS } from "@/store/types/generic";
import accountApiService from "@/services/api/modules/account";

const accountStore = {
  actions: {
    async [GET_ACCOUNT_POSTS]({ commit }, accountID) {
      try {
        return accountApiService.getPosts(accountID);
      } catch (error) {
        commit(SET_GENERIC_GLOBAL_SNACKBAR_CONFIGS, {
          isOpen: true,
          text: "Something went wrong to the server. Please try again.",
          color: "error",
        });
      }
    },
  },
};

export default accountStore;
