<template>
  <section>
    <v-row>
      <v-col cols="12" md="3">
        <feed-user-profile-preview></feed-user-profile-preview>
      </v-col>
      <v-col cols="12" md="6">
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
        <template v-for="n in [1, 2, 3]">
          <travel-story-post-preview
            :key="n"
            class-name="mb-5"
          ></travel-story-post-preview>
        </template>
        <template v-for="n in [4, 5, 6]">
          <itinerary-post-preview
            :key="n"
            class-name="mb-5"
          ></itinerary-post-preview>
        </template>
      </v-col>
      <v-col cols="12" md="3">
        <h1>Some shits</h1>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import TravelStoryPostPreview from "@/components/TravelStoryPostPreview";
import ItineraryPostPreview from "@/components/ItineraryPostPreview";
import FeedUserProfilePreview from "@/components/feed/UserProfilePreview";
export default {
  components: {
    FeedUserProfilePreview,
    ItineraryPostPreview,
    TravelStoryPostPreview,
  },
  data() {
    return {
      tab: null,
      tabSelections: ["Relevant", "New", "Trending"],
    };
  },
};
</script>
