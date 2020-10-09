<template>
  <section>
    <tour-guides-page-header></tour-guides-page-header>
    <div id="tour-guides-content">
      <v-container>
        <v-row>
          <v-col cols="12">
            <tour-guides-page-search-toolbar-card></tour-guides-page-search-toolbar-card>
          </v-col>
          <v-col>
            <v-row dense>
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
    <generic-about-local-tour-guides-div></generic-about-local-tour-guides-div>
    <generic-footer></generic-footer>
  </section>
</template>

<script>
import GenericFooter from "@/components/generic/Footer";
import CustomTooltipButton from "@/components/custom/TooltipButton";
import GenericTourGuideProfilePreview from "@/components/generic/TourGuideProfilePreview";
import TourGuidesPageHeader from "@/components/tour-guides-page/Header";
import TourGuidesPageSearchToolbarCard from "@/components/tour-guides-page/SearchToolbarCard";
import GenericAboutLocalTourGuidesDiv from "@/components/generic/div/AboutLocalTourGuides";
export default {
  components: {
    GenericAboutLocalTourGuidesDiv,
    TourGuidesPageSearchToolbarCard,
    TourGuidesPageHeader,
    GenericTourGuideProfilePreview,
    CustomTooltipButton,
    GenericFooter,
  },
};
</script>
