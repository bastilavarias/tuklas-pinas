<template>
  <v-card outlined tile>
    <generic-post-header-card type="travel-story"></generic-post-header-card>
    <travel-story-post-page-detail-card-gallery-preview></travel-story-post-page-detail-card-gallery-preview>
    <v-card-actions>
      <v-btn depressed text>
        <v-icon class="mr-1">mdi-heart-outline</v-icon>
        <span class="caption font-weight-bold">1K+</span>
      </v-btn>
      <v-btn depressed text>
        <v-icon class="mr-1">mdi-comment-outline</v-icon>
        <span class="caption font-weight-bold">1K+</span>
      </v-btn>
      <div class="flex-grow-1"></div>
      <v-btn depressed text @click="isShareDialogOpen = true">
        <v-icon class="mr-1">mdi-share-outline</v-icon>
        <span class="caption font-weight-bold">1K+</span>
      </v-btn>
    </v-card-actions>
    <generic-post-share-dialog
      :is-open.sync="isShareDialogOpen"
    ></generic-post-share-dialog>
  </v-card>
</template>

<script>
import TravelStoryPostPageDetailCardGalleryPreview from "@/components/travel-story-post-page/detail-card/GalleryPreview";
import GenericPostShareDialog from "@/components/generic/dialog/PostShare";
import GenericPostHeaderCard from "@/components/generic/card/PostHeader";
export default {
  name: "travel-story-post-page-detail-card",
  components: {
    GenericPostHeaderCard,
    GenericPostShareDialog,
    TravelStoryPostPageDetailCardGalleryPreview,
  },
  data() {
    return {
      isShareDialogOpen: false,
    };
  },
};
</script>
