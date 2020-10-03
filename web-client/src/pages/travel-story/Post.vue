<template>
  <v-container>
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
            <travel-story-post-detail-card></travel-story-post-detail-card>
          </v-col>
          <v-col cols="12">
            <travel-story-post-tags-card></travel-story-post-tags-card>
          </v-col>
          <v-col cols="12">
            <v-card outlined tile>
              <div class="px-4 pt-3">
                <span class="caption"
                  >Type your comment as Sebastian Curtis T. Lavarias</span
                >
              </div>
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-textarea
                      label="Type your comment here"
                      single-line
                      outlined
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <div class="d-flex align-center justify-space-between">
                      <div class="flex-grow-1"></div>
                      <v-btn color="secondary">Comment</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card outlined tile>
              <v-card-title>
                <span>Comments</span>
                <div class="flex-grow-1"></div>
                <div>
                  <v-btn icon>
                    <v-icon>mdi-sort</v-icon>
                  </v-btn>
                </div>
              </v-card-title>
              <template v-for="n in 5">
                <generic-comment-media :key="n" class-name="pb-1">
                  <template v-for="n2 in 5">
                    <generic-comment-reply-media
                      :key="n2"
                    ></generic-comment-reply-media>
                    <v-divider v-if="n2 !== 5"></v-divider>
                  </template>
                </generic-comment-media>
                <v-divider v-if="n !== 5"></v-divider>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <v-row>
          <v-col cols="12">
            <generic-events-explorer-preview-side-card></generic-events-explorer-preview-side-card>
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
    <router-view></router-view>
  </v-container>
</template>

<script>
import FeedPeopleCard from "@/components/feed/PeopleCard";
import GenericStickyFooterCard from "@/components/generic/StickyFooterCard";
import Carousel from "vue-owl-carousel";
import CustomRouterLink from "@/components/custom/RouterLink";
import GenericCommentMedia from "@/components/generic/comment/Media";
import GenericCommentReplyMedia from "@/components/generic/comment/ReplyMedia";
import GenericProfilePreviewCard from "@/components/generic/ProfilePreviewCard";
import GenericTopCategoriesSideCard from "@/components/generic/TopCategoriesSideCard";
import TravelStoryPostDetailCard from "@/components/travel-story/detail-card/Index";
import TravelStoryPostTagsCard from "@/components/travel-story/TagsCard";
import GenericEventsExplorerPreviewSideCard from "@/components/generic/EventsExplorerPreviewSideCard";

export default {
  components: {
    GenericEventsExplorerPreviewSideCard,
    TravelStoryPostTagsCard,
    TravelStoryPostDetailCard,
    GenericTopCategoriesSideCard,
    GenericProfilePreviewCard,
    GenericCommentReplyMedia,
    GenericCommentMedia,
    CustomRouterLink,
    GenericStickyFooterCard,
    FeedPeopleCard,
    Carousel,
  },

  data() {
    return {
      images: [
        "https://images.pexels.com/photos/902288/pexels-photo-902288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2604843/pexels-photo-2604843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1076240/pexels-photo-1076240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/210367/pexels-photo-210367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2475386/pexels-photo-2475386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1364554/pexels-photo-1364554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ],
      rating: 4,
      isGalleryDialogOpen: false,
    };
  },
};
</script>

<style scoped>
.next-image-button,
.previous-image-button {
  position: absolute;
  z-index: 2;
}

.next-image-button {
  top: 40%;
  left: 1%;
}

.previous-image-button {
  top: 40%;
  right: 1%;
}
</style>
