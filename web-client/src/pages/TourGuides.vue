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
                  <generic-tour-guide-profile-preview-card></generic-tour-guide-profile-preview-card>
                </v-col>
              </template>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <generic-about-local-tour-guides-div></generic-about-local-tour-guides-div>
    <generic-basic-footer></generic-basic-footer>
  </section>
</template>

<script>
import CustomTooltipButton from "@/components/custom/TooltipButton";
import TourGuidesPageHeader from "@/components/tour-guides-page/Header";
import TourGuidesPageSearchToolbarCard from "@/components/tour-guides-page/SearchToolbarCard";
import GenericAboutLocalTourGuidesDiv from "@/components/generic/div/AboutLocalTourGuides";
import GenericBasicFooter from "@/components/generic/footer/Basic";
import GenericTourGuideProfilePreviewCard from "@/components/generic/card/TourGuideProfilePreview";
export default {
  components: {
    GenericTourGuideProfilePreviewCard,
    GenericBasicFooter,
    GenericAboutLocalTourGuidesDiv,
    TourGuidesPageSearchToolbarCard,
    TourGuidesPageHeader,
    CustomTooltipButton,
  },
};
</script>
