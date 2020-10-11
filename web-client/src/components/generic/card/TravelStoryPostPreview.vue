<template>
  <v-card
    outlined
    tile
    :class="`${hasShadow ? 'custom-shadow' : ''} ${className}`"
  >
    <generic-post-header-card
      clickable
      type="travel-story"
    ></generic-post-header-card>
    <carousel
      :items="1"
      dots
      :nav="false"
      :autoplay="false"
      :mouse-drag="false"
      touch-drag
      pull-drag
      free-drag
      style="position: relative"
    >
      <template v-for="(image, index) in images">
        <v-img
          :key="index"
          height="300"
          :src="image"
          class="d-block mx-auto"
          position="center"
          cover
        ></v-img>
      </template>
      <template slot="prev">
        <v-btn fab color="white" small class="next-image-button">
          <v-icon small color="black">mdi-chevron-left</v-icon>
        </v-btn>
      </template>
      <template slot="next">
        <v-btn fab color="white" small class="previous-image-button">
          <v-icon small color="black">mdi-chevron-right</v-icon>
        </v-btn>
      </template>
    </carousel>
    <div>
      <div class="px-4 py-1 d-flex justify-space-between align-center">
        <span class="caption">Event: Project 81</span>
      </div>
      <v-divider> </v-divider>
      <div class="px-4 py-1 d-flex justify-space-between align-center">
        <span class="caption"
          >Destination: <span class="font-italic"> Destination </span></span
        >
        <v-icon small color="primary">mdi-map-marker</v-icon>
      </div>
      <v-divider> </v-divider>
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
import Carousel from "vue-owl-carousel";
import CustomRouterLink from "@/components/custom/RouterLink";
import GenericPostShareDialog from "@/components/generic/dialog/PostShare";
import GenericPostHeaderCard from "@/components/generic/card/PostHeader";

export default {
  name: "generic-travel-story-post-preview-card",
  components: {
    GenericPostHeaderCard,
    GenericPostShareDialog,
    CustomRouterLink,
    Carousel,
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
