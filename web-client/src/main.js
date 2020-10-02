import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueMasonry from "vue-masonry-css";
import VueFileAgent from "vue-file-agent";
import "vue-file-agent/dist/vue-file-agent.css";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

Vue.config.productionTip = false;
Vue.use(VueMasonry);
Vue.use(VueFileAgent);
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
