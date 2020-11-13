<template>
  <v-card
    :id="`reply-media-${replyID}`"
    :class="`${className}`"
    flat
    color="transparent"
  >
    <div class="pt-3 pl-4">
      <div class="d-flex align-start justify-space-between mb-2">
        <div class="mr-2">
          <div class="caption">
            <span class="text-capitalize">{{
              formatName(author.profile.firstName, author.profile.lastName)
            }}</span>
            - {{ formatRelativeTime(createdAt) }}
          </div>
          <div class="mb-3">
            <span class="subtitle-2 text-justify">{{ text }}</span>
          </div>
        </div>
        <v-avatar :size="40">
          <v-img
            :src="author.profile.image.display"
            :lazy-src="author.profile.image.display"
          ></v-img>
        </v-avatar>
      </div>
    </div>
    <v-card-actions>
      <v-btn
        depressed
        text
        :disabled="isSendReactionStart || isRemoveReactionStart"
        @click="react"
      >
        <v-icon class="mr-1" :color="isUserReacted ? 'error' : ''">{{
          isUserReacted ? "mdi-heart" : "mdi-heart-outline"
        }}</v-icon>
        <span class="caption font-weight-bold">{{ reactionsCountLocal }}</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import commonUtilities from "@/common/utilities";
import commonValidation from "@/common/validation";
import {
  REMOVE_POST_COMMENT_REACTION,
  REMOVE_POST_COMMENT_REPLY_REACTION,
  SEND_POST_COMMENT_REPLY_REACTION,
} from "@/store/types/post";

export default {
  name: "generic-comment-reply-media",

  props: {
    replyID: {
      type: Number,
      required: true,
    },
    className: {
      type: String,
      required: false,
    },
    text: {
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
    reactions: {
      type: Array,
      required: true,
    },
    reactionsCount: {
      type: Number,
      required: true,
    },
  },
  mixins: [commonUtilities, commonValidation],
  data() {
    return {
      reactionsLocal: this.reactions,
      reactionsCountLocal: this.reactionsCount,
      isSendReactionStart: false,
      isRemoveReactionStart: false,
    };
  },
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
    async sendReaction() {
      this.isSendReactionStart = true;
      const payload = {
        replyID: this.replyID,
        type: "heart",
      };
      const sentReaction = await this.$store.dispatch(
        SEND_POST_COMMENT_REPLY_REACTION,
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
        REMOVE_POST_COMMENT_REPLY_REACTION,
        this.replyID
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
