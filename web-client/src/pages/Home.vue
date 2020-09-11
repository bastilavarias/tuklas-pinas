<template>
  <v-app>
    <v-app-bar
      app
      fixed
      :color="isScrollingDown ? 'primary' : 'transparent'"
      :flat="!isScrollingDown"
      width="100%"
      style="z-index: 3"
    >
      <v-app-bar-nav-icon>
        <v-icon large color="white"> mdi-map-marker </v-icon>
      </v-app-bar-nav-icon>
      <v-spacer> </v-spacer>
      <v-btn color="transparent" depressed class="text-capitalize white--text"
        >Travel Stories</v-btn
      >
      <v-btn color="transparent" depressed class="text-capitalize white--text"
        >Itineraries</v-btn
      >
      <v-btn color="transparent" depressed class="text-capitalize white--text"
        >Hire a Guide</v-btn
      >
      <v-btn color="transparent" depressed class="text-capitalize white--text"
        >FAQs</v-btn
      >
    </v-app-bar>
    <home-landing-header></home-landing-header>
    <home-search-destination-section></home-search-destination-section>
  </v-app>
</template>

<script>
import HomeLandingHeader from "@/components/home/LandingHeader";
import HomeSearchDestinationSection from "@/components/home/SearchDestinationSection";
export default {
  name: "Home",
  components: { HomeSearchDestinationSection, HomeLandingHeader },

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
