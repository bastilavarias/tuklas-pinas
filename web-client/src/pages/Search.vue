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
              <generic-mini-events-explorer-side-card></generic-mini-events-explorer-side-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <generic-basic-footer></generic-basic-footer>
  </section>
</template>
<script>
import SearchPageTravelPostsCard from "@/components/search-page/TravelPostsCard";
import SearchPageItineraryPostsCard from "@/components/search-page/ItineraryPostsCard";
import SearchPagePeopleCard from "@/components/search-page/PeopleCard";
import SearchPageSearchToolbarCard from "@/components/search-page/SearchToolbarCard";
import GenericMiniEventsExplorerSideCard from "@/components/generic/card/MiniEventsExplorer";
import GenericBasicFooter from "@/components/generic/footer/Basic";
import GenericStickyFooter from "@/components/generic/footer/Sticky";
export default {
  components: {
    GenericStickyFooter,
    GenericBasicFooter,
    GenericMiniEventsExplorerSideCard,
    SearchPageSearchToolbarCard,
    SearchPagePeopleCard,
    SearchPageItineraryPostsCard,
    SearchPageTravelPostsCard,
  },
};
</script>
