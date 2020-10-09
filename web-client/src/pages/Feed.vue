<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-row>
          <v-col cols="12">
            <generic-mini-profile-side-card></generic-mini-profile-side-card>
          </v-col>
          <v-col cols="12">
            <generic-top-categories-side-card></generic-top-categories-side-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <v-tabs
              v-model="tab"
              color="primary"
              background-color="#f2f2f2"
              class="mb-10"
            >
              <template v-for="(tab, index) in tabSelections">
                <v-tab :key="index">
                  <span class="text-capitalize secondary--text subtitle-1">
                    {{ tab }}
                  </span>
                </v-tab>
              </template>
            </v-tabs>
            <template v-for="n in [1]">
              <generic-travel-story-post-preview
                :key="n"
                class-name="mb-5"
              ></generic-travel-story-post-preview>
            </template>
            <template v-for="n in [2]">
              <generic-itinerary-post-preview
                :key="n"
                class-name="mb-5"
              ></generic-itinerary-post-preview>
            </template>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <v-row>
          <v-col cols="12">
            <generic-mini-events-explorer-side-card></generic-mini-events-explorer-side-card>
          </v-col>
          <v-col cols="12">
            <generic-suggested-people-side-card></generic-suggested-people-side-card>
          </v-col>
          <v-col cols="12">
            <generic-sticky-footer-card></generic-sticky-footer-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GenericTravelStoryPostPreview from "@/components/generic/TravelStoryPostPreview";
import GenericItineraryPostPreview from "@/components/generic/ItineraryPostPreview";
import GenericStickyFooterCard from "@/components/generic/StickyFooterCard";
import GenericMiniProfileSideCard from "@/components/generic/card/MiniProfile";
import GenericTopCategoriesSideCard from "@/components/generic/card/TopCategories";
import GenericMiniEventsExplorerSideCard from "@/components/generic/card/MiniEventsExplorer";
import GenericSuggestedPeopleSideCard from "@/components/generic/card/SuggestedPeople";
export default {
  components: {
    GenericSuggestedPeopleSideCard,
    GenericMiniEventsExplorerSideCard,
    GenericTopCategoriesSideCard,
    GenericMiniProfileSideCard,
    GenericStickyFooterCard,
    GenericItineraryPostPreview,
    GenericTravelStoryPostPreview,
  },
  data() {
    return {
      tab: null,
      tabSelections: ["Relevant", "New", "Trending"],
    };
  },
};
</script>
