<template>
  <v-app>
    <v-app-bar
      app
      fixed
      :color="isScrollingDown ? 'black' : 'transparent'"
      flat
      width="100%"
      style="z-index: 3"
    >
      <v-app-bar-nav-icon>
        <v-icon large color="white"> mdi-map-marker </v-icon>
      </v-app-bar-nav-icon>
      <v-spacer> </v-spacer>
      <v-btn color="transparent" depressed class="text-capitalize white--text"
        >About</v-btn
      >
      <v-btn color="transparent" depressed class="text-capitalize white--text"
        >Itineraries</v-btn
      >
      <v-btn color="transparent" depressed class="text-capitalize white--text"
        >Contacts</v-btn
      >
      <v-btn color="transparent" depressed class="text-capitalize white--text"
        >FAQs</v-btn
      >
      <v-btn icon>
        <v-icon large color="white">mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <home-landing-header></home-landing-header>
    <home-content></home-content>
  </v-app>
</template>

<script>
import HomeLandingHeader from "@/components/home/LandingHeader";
import HomeContent from "@/components/home/Content";
export default {
  name: "Home",
  components: { HomeContent, HomeLandingHeader },

  data() {
    return {
      isScrollingDown: false,
    };
  },

  computed: {},

  methods: {
    scroll() {
      window.onscroll = () => {
        if (window.pageYOffset > 5) {
          this.isScrollingDown = true;
          return;
        }
        this.isScrollingDown = false;
      };
    },
  },

  mounted() {
    this.scroll();
  },
};
</script>
