<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <profile-page-header></profile-page-header>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3">
          <v-row>
            <v-col cols="12">
              <profile-page-about-side-card></profile-page-about-side-card>
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
              <generic-suggested-people-side-card></generic-suggested-people-side-card>
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
import ProfilePageHeader from "@/components/profile-page/Header";
import ProfilePagePostsCard from "@/components/profile-page/PostsCard";
import GenericTravelStoryPostPreview from "@/components/generic/TravelStoryPostPreview";
import GenericItineraryPostPreview from "@/components/generic/ItineraryPostPreview";
import ProfilePageAboutSideCard from "@/components/profile-page/AboutSideCard";
import GenericStickyFooterCard from "@/components/generic/StickyFooterCard";
import GenericSuggestedPeopleSideCard from "@/components/generic/SuggestedPeopleSideCard";
export default {
  components: {
    GenericSuggestedPeopleSideCard,
    GenericStickyFooterCard,
    ProfilePageAboutSideCard,
    GenericItineraryPostPreview,
    GenericTravelStoryPostPreview,
    ProfilePagePostsCard,
    ProfilePageHeader,
  },
};
</script>
