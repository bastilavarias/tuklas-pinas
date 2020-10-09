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
      <v-app-bar-nav-icon>
        <v-icon large color="white"> mdi-map-marker </v-icon>
      </v-app-bar-nav-icon>
      <v-spacer> </v-spacer>
      <v-btn color="primary" class="text-capitalize" :to="{ name: 'sign-in' }"
        >Sign In</v-btn
      >
      <v-btn
        :color="isScrollingDown ? 'primary' : 'white'"
        text
        class="text-capitalize"
        :to="{ name: 'signup' }"
        >Signup</v-btn
      >
    </v-app-bar>
    <home-page-header></home-page-header>
    <home-page-popular-itineraries-div></home-page-popular-itineraries-div>
    <home-page-search-destination-div></home-page-search-destination-div>
    <home-page-highest-rated-guides-div></home-page-highest-rated-guides-div>
    <generic-about-local-tour-guides-div></generic-about-local-tour-guides-div>
    <home-page-featured-travel-stories-div></home-page-featured-travel-stories-div>
    <generic-how-it-works-div></generic-how-it-works-div>
    <generic-basic-footer></generic-basic-footer>
  </v-app>
</template>

<script>
import CommonUtilities from "@/common/utilities";
import HomePageHeader from "@/components/home-page/Header";
import HomePagePopularItinerariesDiv from "@/components/home-page/PopularItinerariesDiv";
import HomePageSearchDestinationDiv from "@/components/home-page/SearchDestinationDiv";
import HomePageHighestRatedGuidesDiv from "@/components/home-page/HighestRatedGuidesDiv";
import GenericAboutLocalTourGuidesDiv from "@/components/generic/div/AboutLocalTourGuides";
import HomePageFeaturedTravelStoriesDiv from "@/components/home-page/FeaturedTravelStoriesSection";
import GenericHowItWorksDiv from "@/components/generic/div/HowItWorksSection";
import GenericBasicFooter from "@/components/generic/footer/Basic";

export default {
  name: "Home",

  mixins: [CommonUtilities],

  components: {
    GenericBasicFooter,
    GenericHowItWorksDiv,
    HomePageFeaturedTravelStoriesDiv,
    GenericAboutLocalTourGuidesDiv,
    HomePageHighestRatedGuidesDiv,
    HomePageSearchDestinationDiv,
    HomePagePopularItinerariesDiv,
    HomePageHeader,
  },
};
</script>
