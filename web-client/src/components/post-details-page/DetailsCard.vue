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
    <custom-post-gallery-preview
      :files="files"
      :type="type"
    ></custom-post-gallery-preview>
    <v-divider></v-divider>
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
import CustomPostGalleryPreview from "@/components/custom/PostGalleryPreview";
export default {
  name: "post-details-page-details-card",
  components: {
    CustomPostGalleryPreview,
    CustomVideoPlayer,
    GenericPostShareDialog,
    GenericPostHeaderCard,
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
