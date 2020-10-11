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
            <itinerary-post-page-detail-card></itinerary-post-page-detail-card>
          </v-col>
          <v-col cols="12">
            <itinerary-post-page-timeline-card></itinerary-post-page-timeline-card>
          </v-col>
          <v-col cols="12">
            <itinerary-post-page-personal-reviews-card></itinerary-post-page-personal-reviews-card>
          </v-col>
          <v-col cols="12">
            <itinerary-post-page-tags-card></itinerary-post-page-tags-card>
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
      <v-col cols="12" md="3" ref="stickyParent">
        <v-row>
          <v-col cols="12">
            <generic-mini-events-explorer-side-card></generic-mini-events-explorer-side-card>
          </v-col>
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
    <router-view></router-view>
  </v-container>
</template>

<script>
import GenericMiniProfileSideCard from "@/components/generic/card/MiniProfile";
import GenericTopCategoriesSideCard from "@/components/generic/card/TopCategories";
import ItineraryPostPageDetailCard from "@/components/itinerary-post-page/detail-card/Index";
import ItineraryPostPageTimelineCard from "@/components/itinerary-post-page/TimelineCard";
import ItineraryPostPagePersonalReviewsCard from "@/components/itinerary-post-page/personal-reviews-card/Index";
import ItineraryPostPageTagsCard from "@/components/itinerary-post-page/TagsCard";
import GenericCommentMedia from "@/components/generic/media/Comment";
import GenericCommentReplyMedia from "@/components/generic/media/CommentReply";
import GenericMiniEventsExplorerSideCard from "@/components/generic/card/MiniEventsExplorer";
import GenericSuggestedPeopleSideCard from "@/components/generic/card/SuggestedPeople";
import GenericStickyFooter from "@/components/generic/footer/Sticky";
import CommonUtilities from "@/common/utilities";
export default {
  components: {
    GenericStickyFooter,
    GenericSuggestedPeopleSideCard,
    GenericMiniEventsExplorerSideCard,
    GenericCommentReplyMedia,
    GenericCommentMedia,
    ItineraryPostPageTagsCard,
    ItineraryPostPagePersonalReviewsCard,
    ItineraryPostPageTimelineCard,
    ItineraryPostPageDetailCard,
    GenericTopCategoriesSideCard,
    GenericMiniProfileSideCard,
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
  mixins: [CommonUtilities],
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
