<template>
  <v-app>
    <v-app-bar
      app
      fixed
      :color="isScrollingDown ? 'secondary' : 'transparent'"
      :flat="!isScrollingDown"
      width="100%"
      style="z-index: 3"
    >
      <custom-router-link :to="{ name: 'home-page' }">
        <v-icon large color="white"> mdi-map-marker </v-icon>
      </custom-router-link>
      <v-spacer> </v-spacer>
      <v-btn
        color="primary"
        class="text-capitalize"
        :to="{ name: 'sign-in-page' }"
        >Sign In</v-btn
      >
      <v-btn
        :color="isScrollingDown ? 'primary' : 'white'"
        text
        class="text-capitalize"
        :to="{ name: 'signup-page' }"
        >Signup</v-btn
      >
    </v-app-bar>
    <home-page-header></home-page-header>
    <home-page-search-destination-div></home-page-search-destination-div>
    <generic-about-local-tour-guides-div></generic-about-local-tour-guides-div>
    <generic-how-it-works-div></generic-how-it-works-div>
    <generic-basic-footer></generic-basic-footer>
  </v-app>
</template>

<script>
import commonUtilities from "@/common/utilities";
import HomePageHeader from "@/components/home-page/Header";
import HomePageSearchDestinationDiv from "@/components/home-page/SearchDestinationDiv";
import GenericAboutLocalTourGuidesDiv from "@/components/generic/div/AboutLocalTourGuides";
import GenericHowItWorksDiv from "@/components/generic/div/HowItWorksSection";
import GenericBasicFooter from "@/components/generic/footer/Basic";
import CustomRouterLink from "@/components/custom/RouterLink";

export default {
  name: "Home",

  mixins: [commonUtilities],

  components: {
    CustomRouterLink,
    GenericBasicFooter,
    GenericHowItWorksDiv,
    GenericAboutLocalTourGuidesDiv,
    HomePageSearchDestinationDiv,
    HomePageHeader,
  },
};
</script>
