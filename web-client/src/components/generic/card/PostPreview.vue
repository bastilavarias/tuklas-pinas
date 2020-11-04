<template>
  <v-card
    outlined
    tile
    :class="`${hasShadow ? 'custom-shadow' : ''} ${className}`"
  >
    <div class="px-4 py-3 d-flex align-start justify-space-between">
      <div class="mr-2">
        <span class="caption"
          ><span class="text-capitalize">{{ displayName }}</span> - Posted
          {{ displayPostType }} {{ displayTime }}</span
        >
        <custom-router-link
          :to="{ name: 'post-details-page', params: { postID, type } }"
          v-if="title"
        >
          <span class="d-block mb-1 title font-weight-bold secondary--text">{{
            title
          }}</span>
        </custom-router-link>

        <span class="body-2 d-block mb-3" v-if="text">{{ text }}</span>
      </div>
      <v-avatar :size="40">
        <v-img
          src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
        ></v-img>
      </v-avatar>
    </div>
    <custom-post-gallery-preview
      :type="type"
      :files="files"
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
import CustomVideoPlayer from "@/components/custom/VideoPlayer";
import moment from "moment";
import CustomPostGalleryPreview from "@/components/custom/PostGalleryPreview";

export default {
  name: "generic-post-preview-card",
  components: {
    CustomPostGalleryPreview,
    CustomVideoPlayer,
    GenericPostHeaderCard,
    GenericPostShareDialog,
    CustomRouterLink,
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
    displayPostType() {
      const postType = {
        "travel-story": "a Travel Story",
        itinerary: "an Itinerary",
      };
      return postType[this.type];
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
