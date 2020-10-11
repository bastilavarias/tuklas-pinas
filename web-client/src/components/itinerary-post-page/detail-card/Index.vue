<template>
  <v-card outlined tile>
    <generic-post-header-card type="itinerary"></generic-post-header-card>
    <itinerary-post-page-detail-card-gallery-preview></itinerary-post-page-detail-card-gallery-preview>
    <v-card-actions>
      <v-btn depressed text>
        <v-icon class="mr-1">mdi-heart-outline</v-icon>
        <span class="caption font-weight-bold">1K+</span>
      </v-btn>
      <v-btn depressed text>
        <v-icon class="mr-1">mdi-comment-outline</v-icon>
        <span class="caption font-weight-bold">1K+</span>
      </v-btn>
      <v-btn depressed text @click="isShareDialogOpen = true">
        <v-icon class="mr-1">mdi-share-outline</v-icon>
        <span class="caption font-weight-bold">1K+</span>
      </v-btn>
      <div class="flex-grow-1"></div>
      <v-btn depressed text>
        <v-icon class="mr-1">mdi-bookmark-outline</v-icon>
        <span class="caption font-weight-bold">1K+</span>
      </v-btn>
    </v-card-actions>
    <generic-post-share-dialog
      :is-open.sync="isShareDialogOpen"
    ></generic-post-share-dialog>
  </v-card>
</template>

<script>
import ItineraryPostPageDetailCardGalleryPreview from "@/components/itinerary-post-page/detail-card/GalleryPreview";
import GenericPostHeaderCard from "@/components/generic/card/PostHeader";
import GenericPostShareDialog from "@/components/generic/dialog/PostShare";
export default {
  name: "itinerary-post-page-detail-card",
  components: {
    GenericPostShareDialog,
    GenericPostHeaderCard,
    ItineraryPostPageDetailCardGalleryPreview,
  },
  data() {
    return {
      isShareDialogOpen: false,
    };
  },
};
</script>
