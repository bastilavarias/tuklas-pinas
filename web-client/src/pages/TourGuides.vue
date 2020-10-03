<template>
  <section>
    <tour-guides-header></tour-guides-header>
    <div id="tour-guides-content">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-toolbar>
              <v-autocomplete
                outlined
                single-line
                label="Search Destination"
                dense
                hide-details
                append-icon="mdi-magnify"
              ></v-autocomplete>
              <v-spacer></v-spacer>
              <custom-tooltip-button
                icon="mdi-filter"
                text="Filter Tour Guides"
              ></custom-tooltip-button>
              <custom-tooltip-button
                icon="mdi-sort"
                text="Sort Tour Guides"
              ></custom-tooltip-button>
            </v-toolbar>
          </v-col>
          <v-col>
            <v-row dense>
              <v-col cols="12">
                <span class="subtitle-1">Results</span>
              </v-col>
              <template v-for="n in 9">
                <v-col cols="12" md="4" :key="n">
                  <generic-tour-guide-profile-preview></generic-tour-guide-profile-preview>
                </v-col>
              </template>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <generic-about-local-tour-guides-section></generic-about-local-tour-guides-section>
    <generic-footer></generic-footer>
  </section>
</template>

<script>
import GenericFooter from "@/components/generic/Footer";
import GenericAboutLocalTourGuidesSection from "@/components/generic/section/AboutLocalTourGuides";
import TourGuidesHeader from "@/components/tour-guides/Header";
import CustomTooltipButton from "@/components/custom/TooltipButton";
import GenericTourGuideProfilePreview from "@/components/generic/TourGuideProfilePreview";
export default {
  components: {
    GenericTourGuideProfilePreview,
    CustomTooltipButton,
    TourGuidesHeader,
    GenericAboutLocalTourGuidesSection,
    GenericFooter,
  },
};
</script>
