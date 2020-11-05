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
      <v-btn depressed text>
        <v-icon class="mr-1">mdi-heart-outline</v-icon>
        <span class="caption font-weight-bold">1K+</span>
      </v-btn>
      <v-btn depressed text @click="shouldShowReplyField = true">
        <v-icon class="mr-1">mdi-reply-outline</v-icon>
        <span class="caption font-weight-bold">1K+</span>
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
import { SEND_POST_COMMENT_REPLY } from "@/store/types/post";
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
  },
  mixins: [commonUtilities, commonValidation],
  data() {
    return {
      shouldShowReplyField: false,
      isSendReplyStart: false,
      reply: "",
      repliesLocal: this.replies,
    };
  },
  computed: {
    credentials() {
      return this.$store.state.authentication.credentials;
    },
    isReplyValid() {
      return this.reply;
    },
  },
  watch: {
    replies(val) {
      this.repliesLocal = val;
    },

    repliesLocal(val) {
      this.$emit("update:replies", val);
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
      this.shouldShowReplyField = false;
      this.reply = "";
    },
  },
};
</script>
