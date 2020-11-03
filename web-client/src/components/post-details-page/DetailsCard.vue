<template>
  <v-card outlined tile>
    <div class="px-4 py-3 d-flex align-start justify-space-between">
      <div class="mr-2">
        <span class="caption"
          ><span class="text-capitalize">{{ displayName }}</span> -
          {{ displayTime }}</span
        >
        <span class="d-block mb-1 title font-weight-bold secondary--text">{{
          title
        }}</span>
        <span class="body-2 d-block mb-3" v-if="text">{{ text }}</span>
      </div>
      <v-avatar :size="40">
        <v-img
          src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
        ></v-img>
      </v-avatar>
    </div>
    <carousel
      v-if="type === 'travel-story'"
      :items="1"
      :dots="false"
      :nav="false"
      :autoplay="false"
      :mouse-drag="false"
      touch-drag
      pull-drag
      free-drag
      style="position: relative"
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
    <masonry
      v-if="type === 'itinerary' && files.length > 1"
      :cols="2"
      :gutter="0"
    >
      <template v-for="(file, index) in files">
        <custom-video-player
          v-if="file.format === 'mp4'"
          :url="file.url"
        ></custom-video-player>
        <v-img
          :key="index"
          width="100%"
          height="auto"
          :src="file.url"
          :laz-src="file.url"
          v-else
        ></v-img>
      </template>
    </masonry>
    <v-img
      v-if="type === 'itinerary' && files.length === 1"
      :src="files[0].url"
      :lazy-src="files[0].url"
      width="100%"
      height="auto"
    ></v-img>
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
import GenericPostHeaderCard from "@/components/generic/card/PostHeader";
import GenericPostShareDialog from "@/components/generic/dialog/PostShare";
import moment from "moment";
import CustomVideoPlayer from "@/components/custom/VideoPlayer";
import Carousel from "vue-owl-carousel";
export default {
  name: "post-details-page-details-card",
  components: {
    CustomVideoPlayer,
    GenericPostShareDialog,
    GenericPostHeaderCard,
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
    files: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
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
