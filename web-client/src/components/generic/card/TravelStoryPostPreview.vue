<template>
  <v-card
    outlined
    tile
    :class="`${hasShadow ? 'custom-shadow' : ''} ${className}`"
  >
    <div class="px-4 py-3 d-flex align-start justify-space-between">
      <div class="mr-2">
        <span class="caption"
          ><span class="text-capitalize">{{ displayName }}</span> -
          {{ displayTime }}</span
        >
        <custom-router-link
          :to="{
            name:
              type === 'travel-story'
                ? 'travel-story-post-page'
                : 'itinerary-post-page',
            params: { postID },
          }"
        >
          <span
            class="d-block mb-1 title font-weight-bold secondary--text"
            v-if="title"
            >{{ title }}</span
          >
        </custom-router-link>

        <span class="body-2 d-block mb-3" v-if="text">{{ text }}</span>
      </div>
      <v-avatar :size="40">
        <v-img
          src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
        ></v-img>
      </v-avatar>
    </div>
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
      v-if="type === 'travel-story'"
    >
      <template v-for="(file, index) in files">
        <custom-video-player
          :url="file.url"
          v-if="file.format === 'mp4'"
        ></custom-video-player>
        <v-img
          :key="index"
          height="300"
          :src="file.url"
          :lazy-src="file.url"
          class="d-block mx-auto"
          position="center"
          cover
          v-else
        ></v-img>
      </template>
      <template slot="prev">
        <v-btn fab color="white" small class="next-image-button">
          <v-icon small color="black">mdi-chevron-left</v-icon>
        </v-btn>
      </template>
      <template slot="next" v-if="files.length > 1">
        <v-btn fab color="white" small class="previous-image-button">
          <v-icon small color="black">mdi-chevron-right</v-icon>
        </v-btn>
      </template>
    </carousel>
    <div class="px-4 py-1 d-flex justify-space-between align-center">
      <span class="caption">
        {{ travelEvents.length > 1 ? "Events" : "Event" }}:
        <template
          v-for="(event, index) in travelEvents"
          v-if="travelEvents.length > 1"
        >
          <span :key="index" class="mr-1"> {{ event.name }}, </span>
        </template>
      </span>
    </div>
    <v-divider> </v-divider>
    <div class="px-4 py-1 d-flex justify-space-between align-center">
      <span class="caption"
        >Destination: <span class="font-italic"> Destination </span></span
      >
      <v-icon small color="primary">mdi-map-marker</v-icon>
    </div>
    <v-divider> </v-divider>
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
import CustomVideoPlayer from "@/components/custom/VideoPlayer";
import moment from "moment";

export default {
  name: "generic-travel-story-post-preview-card",
  components: {
    CustomVideoPlayer,
    GenericPostHeaderCard,
    GenericPostShareDialog,
    CustomRouterLink,
    Carousel,
  },
  props: {
    postID: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: false,
    },
    hasShadow: {
      type: Boolean,
      required: false,
    },
    author: {
      type: Object,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    travelEvents: {
      type: Array,
      required: true,
    },
    destinations: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    files: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      rating: 4,
      isShareDialogOpen: false,
    };
  },

  computed: {
    displayName() {
      const { firstName, lastName } = this.author.profile;
      return `${firstName} ${lastName}`;
    },
    displayTime() {
      return this.createdAt
        ? moment(this.createdAt).startOf("hour").fromNow()
        : "";
    },
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
