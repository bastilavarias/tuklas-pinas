<template>
  <v-card outlined tile>
    <div class="px-4 py-3 d-flex align-start justify-space-between">
      <div class="mr-2">
        <span class="caption"
          ><span class="text-capitalize">{{
            formatName(author.profile.firstName, author.profile.lastName)
          }}</span>
          - {{ formatRelativeTime(createdAt) }}</span
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
      <v-btn depressed text @click="goToCommentArea">
        <v-icon class="mr-1">mdi-comment-outline</v-icon>
        <span class="caption font-weight-bold">{{ commentsCount }}</span>
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
import CustomVideoPlayer from "@/components/custom/VideoPlayer";
import CustomPostGalleryPreview from "@/components/custom/PostGalleryPreview";
import { REMOVE_POST_REACTION, SEND_POST_REACTION } from "@/store/types/post";
import commonUtilities from "@/common/utilities";
import commonValidation from "@/common/validation";

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
  data() {
    return {
      isShareDialogOpen: false,
      isSendReactionStart: false,
      isRemoveReactionStart: false,
      reactionsLocal: this.reactions,
      reactionsCountLocal: this.reactionsCount,
    };
  },
  mixins: [commonUtilities, commonValidation],
  computed: {
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
    goToCommentArea() {
      this.$vuetify.goTo("#comment-area", { offset: 150 });
    },
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
