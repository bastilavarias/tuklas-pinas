import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#2980b9",
        accent: "#1d4354",
        secondary: "#f39c12",
        dark: "#313131",
      },
    },
  },
});
