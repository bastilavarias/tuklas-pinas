<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <tour-guides-highest-rated-section></tour-guides-highest-rated-section>
            </v-col>
            <v-col cols="12">
              <v-divider></v-divider>
            </v-col>
            <v-col cols="12">
              <tour-guides-discover-more-section></tour-guides-discover-more-section>
            </v-col>
            <v-col cols="12"> </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <generic-about-local-tour-guides-section></generic-about-local-tour-guides-section>
    <generic-footer></generic-footer>
  </section>
</template>

<script>
import GenericFooter from "@/components/generic/Footer";
import TourGuidesHighestRatedSection from "@/components/tour-guides/sections/HighestRated";
import TourGuidesDiscoverMoreSection from "@/components/tour-guides/sections/DiscoverMore";
import GenericAboutLocalTourGuidesSection from "@/components/generic/section/AboutLocalTourGuides";
export default {
  components: {
    GenericAboutLocalTourGuidesSection,
    TourGuidesDiscoverMoreSection,
    TourGuidesHighestRatedSection,
    GenericFooter,
  },
};
</script>
