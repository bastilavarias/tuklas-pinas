<template>
  <v-row>
    <v-col cols="12" md="3">
      <v-row>
        <v-col cols="12">
          <profile-page-events-side-card></profile-page-events-side-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="6">
      <v-row>
        <v-col cols="12">
          <profile-page-posts-card></profile-page-posts-card>
        </v-col>
        <v-col cols="12">
          <template v-for="n in [1]">
            <generic-travel-story-post-preview-card
              :key="n"
              class-name="mb-5"
            ></generic-travel-story-post-preview-card>
          </template>
          <template v-for="n in [2]">
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
          <generic-suggested-people-side-card></generic-suggested-people-side-card>
        </v-col>
        <v-col cols="12">
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
</template>
<script>
import ProfilePagePostsCard from "@/components/profile-page/PostsCard";
import ProfilePageEventsSideCard from "@/components/profile-page/EventsSideCard";
import GenericSuggestedPeopleSideCard from "@/components/generic/card/SuggestedPeople";
import GenericItineraryPostPreviewCard from "@/components/generic/card/ItineraryPostPreview";
import GenericStickyFooter from "@/components/generic/footer/Sticky";
import GenericTravelStoryPostPreviewCard from "@/components/generic/card/PostPreview";
import commonUtilities from "@/common/utilities";
export default {
  components: {
    GenericTravelStoryPostPreviewCard,
    GenericStickyFooter,
    GenericItineraryPostPreviewCard,
    GenericSuggestedPeopleSideCard,
    ProfilePageEventsSideCard,
    ProfilePagePostsCard,
  },
  mixins: [commonUtilities],
};
</script>
