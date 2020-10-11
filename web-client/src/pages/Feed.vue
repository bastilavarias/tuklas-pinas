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
            <template v-for="n in [1, 2]">
              <generic-travel-story-post-preview-card
                :key="n"
                class-name="mb-5"
              ></generic-travel-story-post-preview-card>
            </template>
            <template v-for="n in [3, 4]">
              <generic-itinerary-post-preview-card
                :key="n"
                class-name="mb-5"
              ></generic-itinerary-post-preview-card>
            </template>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3" ref="stickyParent">
        <v-row>
          <v-col cols="12">
            <generic-mini-events-explorer-side-card></generic-mini-events-explorer-side-card>
          </v-col>
          <v-col cols="12">
            <generic-suggested-people-side-card></generic-suggested-people-side-card>
          </v-col>
          <v-col cols="12" ref="stickyParent">
            <div
              :style="{
                position: 'relative',
                height: `${stickyParentHeight}px`,
              }"
            >
              <generic-sticky-footer></generic-sticky-footer>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GenericMiniProfileSideCard from "@/components/generic/card/MiniProfile";
import GenericTopCategoriesSideCard from "@/components/generic/card/TopCategories";
import GenericMiniEventsExplorerSideCard from "@/components/generic/card/MiniEventsExplorer";
import GenericSuggestedPeopleSideCard from "@/components/generic/card/SuggestedPeople";
import GenericItineraryPostPreviewCard from "@/components/generic/card/ItineraryPostPreview";
import GenericStickyFooter from "@/components/generic/footer/Sticky";
import GenericTravelStoryPostPreviewCard from "@/components/generic/card/TravelStoryPostPreview";
import CommonUtilities from "@/common/utilities";
export default {
  components: {
    GenericTravelStoryPostPreviewCard,
    GenericStickyFooter,
    GenericItineraryPostPreviewCard,
    GenericSuggestedPeopleSideCard,
    GenericMiniEventsExplorerSideCard,
    GenericTopCategoriesSideCard,
    GenericMiniProfileSideCard,
  },
  data() {
    return {
      tab: null,
      tabSelections: ["Relevant", "New", "Trending"],
    };
  },
  mounted() {
    this.matchHeight();
  },
  mixins: [CommonUtilities],
};
</script>
