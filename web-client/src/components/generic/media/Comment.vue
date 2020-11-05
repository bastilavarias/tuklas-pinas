<template>
  <v-card
    :id="`comment-media-${commentID}`"
    :class="`${className}`"
    flat
    color="transparent"
  >
    <div class="px-4 pt-3">
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
            src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
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
      <v-btn depressed text @click="shouldShowReplyField = true">
        <v-icon class="mr-1">mdi-reply-outline</v-icon>
        <span class="caption font-weight-bold">{{ repliesCountLocal }}</span>
      </v-btn>
    </v-card-actions>
    <div class="pl-10 pr-3 pt-3">
      <v-row dense>
        <v-col cols="12" v-if="shouldShowReplyField">
          <v-card outlined tile>
            <div class="px-4 pt-3">
              <span class="caption"
                >Type your comment as
                <span class="text-capitalize">{{
                  formatName(
                    credentials.profile.firstName,
                    credentials.profile.lastName
                  )
                }}</span>
              </span>
            </div>
            <v-card-text>
              <v-row no-gutters>
                <v-col cols="12">
                  <v-textarea
                    label="Type your reply here"
                    single-line
                    outlined
                    v-model="reply"
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <div class="d-flex align-center justify-space-between">
                    <div class="flex-grow-1"></div>
                    <v-btn
                      color="secondary"
                      text
                      class="text-capitalize mr-2"
                      @click="shouldShowReplyField = false"
                      >Cancel</v-btn
                    >
                    <v-btn
                      color="secondary"
                      :disabled="!isReplyValid"
                      @click="sendReply"
                      :loading="isSendReplyStart"
                      >Reply</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <template v-for="(reply, index) in repliesLocal">
            <generic-comment-reply-media
              :key="index"
              class-name="pb-1"
              :replyID="reply.id"
              :created-at="reply.createdAt"
              :author="reply.author"
              :text="reply.text"
              :reactions.sync="reply.reactions"
              :reactions-count.sync="reply.reactionsCount"
            >
            </generic-comment-reply-media>
          </template>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import commonUtilities from "@/common/utilities";
import {
  REMOVE_POST_COMMENT_REACTION,
  SEND_POST_COMMENT_REACTION,
  SEND_POST_COMMENT_REPLY,
} from "@/store/types/post";
import commonValidation from "@/common/validation";
import GenericCommentReplyMedia from "@/components/generic/media/CommentReply";

export default {
  name: "generic-comment-media",
  components: { GenericCommentReplyMedia },
  props: {
    commentID: {
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
    replies: {
      type: Array,
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
    repliesCount: {
      type: Number,
      required: true,
    },
  },
  mixins: [commonUtilities, commonValidation],
  data() {
    return {
      shouldShowReplyField: false,
      isSendReplyStart: false,
      reply: "",
      repliesLocal: this.replies,
      reactionsLocal: this.reactions,
      reactionsCountLocal: this.reactionsCount,
      repliesCountLocal: this.repliesCount,
      isSendReactionStart: false,
      isRemoveReactionStart: false,
    };
  },
  computed: {
    credentials() {
      return this.$store.state.authentication.credentials;
    },
    isReplyValid() {
      return this.reply;
    },
    isUserReacted() {
      const foundUser = this.reactionsLocal.find(
        (reaction) => reaction.account.id === this.credentials.id
      );
      return this.validateObject(foundUser);
    },
  },
  watch: {
    replies(val) {
      this.repliesLocal = val;
    },
    repliesLocal(val) {
      this.$emit("update:replies", val);
    },
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
    repliesCount(val) {
      this.repliesCountLocal = val;
    },
    repliesCountLocal(val) {
      this.$emit("update:repliesCount", val);
    },
  },
  methods: {
    async sendReply() {
      this.isSendReplyStart = true;
      const payload = {
        commentID: this.commentID,
        text: this.reply,
      };
      const sentReply = await this.$store.dispatch(
        SEND_POST_COMMENT_REPLY,
        payload
      );
      this.isSendReplyStart = false;
      this.repliesLocal = [sentReply, ...this.repliesLocal];
      this.repliesCountLocal += 1;
      this.shouldShowReplyField = false;
      this.reply = "";
    },
    async sendReaction() {
      this.isSendReactionStart = true;
      const payload = {
        commentID: this.commentID,
        type: "heart",
      };
      const sentReaction = await this.$store.dispatch(
        SEND_POST_COMMENT_REACTION,
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
        REMOVE_POST_COMMENT_REACTION,
        this.commentID
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
