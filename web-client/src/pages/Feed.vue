<template>
  <section>
    <v-row>
      <v-col cols="12" md="3">
        <v-row>
          <v-col cols="12">
            <generic-profile-preview-card></generic-profile-preview-card>
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
              <generic-travel-story-post-preview
                :key="n"
                class-name="mb-5"
              ></generic-travel-story-post-preview>
            </template>
            <template v-for="n in [4, 5]">
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
            <feed-events-preview-card></feed-events-preview-card>
          </v-col>
          <v-col cols="12">
            <feed-people-card></feed-people-card>
          </v-col>
          <v-col cols="12">
            <generic-sticky-footer-card></generic-sticky-footer-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import FeedPeopleCard from "@/components/feed/PeopleCard";
import FeedEventsPreviewCard from "@/components/feed/EventsPreviewCard";
import GenericTravelStoryPostPreview from "@/components/generic/TravelStoryPostPreview";
import GenericItineraryPostPreview from "@/components/generic/ItineraryPostPreview";
import GenericStickyFooterCard from "@/components/generic/StickyFooterCard";
import GenericProfilePreviewCard from "@/components/generic/ProfilePreviewCard";
import GenericTopCategoriesSideCard from "@/components/generic/TopCategoriesSideCard";
export default {
  components: {
    GenericTopCategoriesSideCard,
    GenericProfilePreviewCard,
    GenericStickyFooterCard,
    GenericItineraryPostPreview,
    GenericTravelStoryPostPreview,
    FeedEventsPreviewCard,
    FeedPeopleCard,
  },
  data() {
    return {
      tab: null,
      tabSelections: ["Relevant", "New", "Trending"],
    };
  },
};
</script>
