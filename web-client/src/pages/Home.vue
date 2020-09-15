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
    <home-popular-itineraries-section></home-popular-itineraries-section>
    <home-search-destination-section></home-search-destination-section>
    <home-highest-rated-guides-section></home-highest-rated-guides-section>
    <home-about-local-tour-guides-section></home-about-local-tour-guides-section>
    <home-featured-travel-stories-section></home-featured-travel-stories-section>
    <generic-how-it-works-section></generic-how-it-works-section>
    <generic-footer></generic-footer>
  </v-app>
</template>

<script>
import HomeLandingHeader from "@/components/home/LandingHeader";
import HomeSearchDestinationSection from "@/components/home/SearchDestinationSection";
import HomePopularItinerariesSection from "@/components/home/PopularItinerariesSection";
import HomeHighestRatedGuidesSection from "@/components/home/HighestRatedGuidesSection";
import HomeAboutLocalTourGuidesSection from "@/components/home/AboutLocalTourGuidesSection";
import HomeFeaturedTravelStoriesSection from "@/components/home/FeaturedTravelStoriesSection";
import CommonUtilities from "@/common/utilities";
import GenericHowItWorksSection from "@/components/generic/HowItWorksSection";
import GenericFooter from "@/components/generic/Footer";
export default {
  name: "Home",

  mixins: [CommonUtilities],

  components: {
    GenericFooter,
    GenericHowItWorksSection,
    HomeFeaturedTravelStoriesSection,
    HomeAboutLocalTourGuidesSection,
    HomeHighestRatedGuidesSection,
    HomePopularItinerariesSection,
    HomeSearchDestinationSection,
    HomeLandingHeader,
  },
};
</script>
