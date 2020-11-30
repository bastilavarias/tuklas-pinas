import Vue from "vue";
import Vuex from "vuex";
import genericStore from "@/store/modules/generic";
import authenticationStore from "@/store/modules/authentication";
import postStore from "@/store/modules/post";
import profileStore from "@/store/modules/profile";
import discoverStore from "@/store/modules/discover";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    generic: genericStore,
    authentication: authenticationStore,
    post: postStore,
    profile: profileStore,
    discover: discoverStore,
  },
});
