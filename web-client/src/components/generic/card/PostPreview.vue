<template>
  <v-card
    outlined
    tile
    :class="`${hasShadow ? 'custom-shadow' : ''} ${className}`"
  >
    <div class="px-4 pt-3 d-flex align-start justify-space-between">
      <div class="mr-2">
        <span class="caption">
          <custom-router-link
            :to="{
              name: 'profile-general-page',
              params: { accountID: author.id },
            }"
          >
            <span
              class="text-capitalize black--text text-decoration-underline"
              >{{
                formatName(author.profile.firstName, author.profile.lastName)
              }}</span
            >
          </custom-router-link>

          - Posted {{ displayPostType }}
          {{ formatRelativeTime(createdAt) }}</span
        >
      </div>
      <v-avatar :size="40">
        <v-img
          :src="author.profile.image.display"
          :lazy-src="author.profile.image.display"
        ></v-img>
      </v-avatar>
    </div>
    <div class="px-4 pb-3">
      <div class="mb-1">
        <custom-router-link
          :to="{ name: 'post-details-page', params: { postID, type } }"
          v-if="title"
        >
          <span class="d-block title font-weight-bold secondary--text">{{
            title
          }}</span>
        </custom-router-link>
      </div>
      <div class="mb-3" v-if="text">
        <span class="body-2">
          {{ text }}
        </span>
      </div>
    </div>
    <custom-post-gallery-preview
      :type="type"
      :files="files"
    ></custom-post-gallery-preview>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        depressed
        text
        @click="react"
        :disabled="isSendReactionStart || isRemoveReactionStart"
      >
        <v-icon class="mr-1" :color="isUserReacted ? 'error' : ''">{{
          isUserReacted ? "mdi-heart" : "mdi-heart-outline"
        }}</v-icon>
        <span class="caption font-weight-bold">{{ reactionsCountLocal }}</span>
      </v-btn>
      <v-btn
        depressed
        text
        :to="{
          name: 'post-details-page',
          params: { postID, type, section: 'comment-area' },
        }"
      >
        <v-icon class="mr-1">mdi-comment-outline</v-icon>
        <span class="caption font-weight-bold">{{ commentsCount }}</span>
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
import CustomVideoPlayer from "@/components/custom/video-player/VideoPlayer";
import CustomPostGalleryPreview from "@/components/custom/PostGalleryPreview";
import commonUtilities from "@/common/utilities";
import { REMOVE_POST_REACTION, SEND_POST_REACTION } from "@/store/types/post";
import commonValidation from "@/common/validation";

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
    reactionsCount: {
      type: Number,
      required: true,
    },
    commentsCount: {
      type: Number,
      required: true,
    },
    reactions: {
      type: Array,
      required: true,
    },
  },
  mixins: [commonUtilities, commonValidation],
  data() {
    return {
      rating: 4,
      isShareDialogOpen: false,
      isSendReactionStart: false,
      isRemoveReactionStart: false,
      reactionsLocal: this.reactions,
      reactionsCountLocal: this.reactionsCount,
    };
  },
  computed: {
    displayPostType() {
      const postType = {
        "travel-story": "a Travel Story",
        itinerary: "an Itinerary",
      };
      return postType[this.type];
    },
    credentials() {
      return this.$store.state.authentication.credentials;
    },
    isUserReacted() {
      const foundUser = this.reactionsLocal.find(
        (reaction) => reaction.account.id === this.credentials.id
      );
      return this.validateObject(foundUser);
    },
  },
  watch: {
    reactions(val) {
      this.reactionsLocal = val;
    },
    reactionsLocal(val) {
      this.$emit("update:reactions", val);
    },
    reactionsCount(val) {
      this.reactionsCountLocal = val;
    },
    reactionsCountLocal(val) {
      this.$emit("update:reactionsCount", val);
    },
  },
  methods: {
    async sendReaction() {
      this.isSendReactionStart = true;
      const payload = {
        postID: this.postID,
        type: "heart",
      };
      const sentReaction = await this.$store.dispatch(
        SEND_POST_REACTION,
        payload
      );
      const isReactionValid = this.validateObject(sentReaction);
      if (isReactionValid) {
        this.reactionsLocal = [...this.reactionsLocal, sentReaction];
        this.reactionsCountLocal += 1;
      }
      this.isSendReactionStart = false;
    },
    async removeReaction() {
      this.isRemoveReactionStart = true;
      const isReactionRemoved = await this.$store.dispatch(
        REMOVE_POST_REACTION,
        this.postID
      );
      if (isReactionRemoved) {
        this.reactionsLocal = this.reactionsLocal.filter(
          (reaction) => reaction.account.id !== this.credentials.id
        );
        this.reactionsCountLocal -= 1;
      }
      this.isRemoveReactionStart = false;
    },
    async react() {
      if (this.isUserReacted) {
        return await this.removeReaction();
      }
      await this.sendReaction();
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
