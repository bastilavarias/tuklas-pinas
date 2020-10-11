import Vue from "vue";
import Vuex from "vuex";
import genericStore from "@/store/modules/generic";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    generic: genericStore,
  },
});
