<template>
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
          params: { postID: 1 },
        }"
        v-if="clickable"
      >
        <span
          class="d-block mb-1 title font-weight-bold secondary--text"
          v-if="title"
          >{{ title }}</span
        >
      </custom-router-link>
      <span
        class="d-block mb-1 title font-weight-bold secondary--text"
        v-if="!clickable"
        >{{ title }}</span
      >
      <span class="body-2 d-block mb-3" v-if="text">{{ text }}</span>
    </div>
    <v-avatar :size="40">
      <v-img
        src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
      ></v-img>
    </v-avatar>
  </div>
</template>

<script>
import CustomRouterLink from "@/components/custom/RouterLink";
import moment from "moment";

export default {
  name: "generic-post-header-card",
  components: { CustomRouterLink },
  props: {
    clickable: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String,
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
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>
