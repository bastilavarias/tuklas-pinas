<template>
  <v-card
    outlined
    tile
    :class="`${hasShadow ? 'custom-shadow' : ''} ${className}`"
  >
    <generic-post-header-card
      clickable
      type="itinerary"
    ></generic-post-header-card>
    <div class="mb-3">
      <masonry :cols="3" :gutter="5">
        <template v-for="(image, index) in images">
          <v-img
            :key="index"
            width="100%"
            height="auto"
            :src="image"
            class="mb-1"
          ></v-img>
        </template>
      </masonry>
    </div>
    <div>
      <div class="px-4 py-1 d-flex justify-space-between align-center">
        <span class="caption">Event: Project 81</span>
      </div>
      <v-divider> </v-divider>
      <div class="px-4 py-1 d-flex justify-space-between align-center">
        <span class="caption"
          >Tour Guide: <span class="font-italic"> Tour Guide Name </span></span
        >
        <v-icon small color="primary">mdi-account-cowboy-hat</v-icon>
      </div>
      <v-divider> </v-divider>
      <div class="px-4 py-1 d-flex justify-space-between align-center">
        <span class="caption"
          >Destination:
          <span class="font-italic"> Destination Name </span></span
        >
        <v-icon small color="primary">mdi-map-marker</v-icon>
      </div>
    </div>
    <v-card-actions>
      <v-btn depressed text>
        <v-icon class="mr-1">mdi-heart-outline</v-icon>
        <span class="caption font-weight-bold">1K+</span>
      </v-btn>
      <v-btn depressed text>
        <v-icon class="mr-1">mdi-comment-outline</v-icon>
        <span class="caption font-weight-bold">1K+</span>
      </v-btn>
      <v-btn depressed text>
        <v-icon class="mr-1">mdi-bookmark-outline</v-icon>
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
import CustomRouterLink from "@/components/custom/RouterLink";
import GenericPostShareDialog from "@/components/generic/dialog/PostShare";
import GenericPostHeaderCard from "@/components/generic/card/PostHeader";
export default {
  name: "generic-itinerary-post-preview-card",
  components: {
    GenericPostHeaderCard,
    GenericPostShareDialog,
    CustomRouterLink,
  },
  props: {
    className: {
      type: String,
      required: false,
    },
    hasShadow: {
      type: Boolean,
      required: false,
    },
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
      isShareDialogOpen: false,
    };
  },
};
</script>
