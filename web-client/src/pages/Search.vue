<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" md="9">
          <v-row>
            <v-col cols="12">
              <search-page-search-toolbar-card></search-page-search-toolbar-card>
            </v-col>
            <v-col cols="12">
              <search-page-people-card></search-page-people-card>
            </v-col>
            <v-col cols="12">
              <search-page-itinerary-posts-card></search-page-itinerary-posts-card>
            </v-col>
            <v-col cols="12">
              <search-page-travel-posts-card></search-page-travel-posts-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3">
          <v-row>
            <v-col cols="12">
              <generic-events-explorer-preview-side-card></generic-events-explorer-preview-side-card>
            </v-col>
            <v-col cols="12">
              <generic-sticky-footer-card></generic-sticky-footer-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import GenericEventsExplorerPreviewSideCard from "@/components/generic/EventsExplorerPreviewSideCard";
import GenericStickyFooterCard from "@/components/generic/StickyFooterCard";
import SearchPageTravelPostsCard from "@/components/search-page/TravelPostsCard";
import SearchPageItineraryPostsCard from "@/components/search-page/ItineraryPostsCard";
import SearchPagePeopleCard from "@/components/search-page/PeopleCard";
import SearchPageSearchToolbarCard from "@/components/search-page/SearchToolbarCard";
export default {
  components: {
    SearchPageSearchToolbarCard,
    SearchPagePeopleCard,
    SearchPageItineraryPostsCard,
    SearchPageTravelPostsCard,
    GenericStickyFooterCard,
    GenericEventsExplorerPreviewSideCard,
  },
};
</script>
