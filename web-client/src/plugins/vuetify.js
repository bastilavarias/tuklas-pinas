import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#2980b9",
        secondary: "#f39c12",
        dark: "#1E272E",
      },
    },
  },
});
