<template>
  <v-card
    :id="`reply-media-${replyID}`"
    :class="`${className}`"
    flat
    color="transparent"
  >
    <div class="pt-3">
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
    </v-card-actions>
  </v-card>
</template>

<script>
import commonUtilities from "@/common/utilities";

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
  },
  mixins: [commonUtilities],
};
</script>
