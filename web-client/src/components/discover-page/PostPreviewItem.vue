<template>
  <div>
    <div class="px-4 pt-3">
      <div class="d-flex align-start justify-space-between">
        <div class="mr-2">
          <span class="caption">Sebastian Curtis T. Lavarias - 6 hrs ago</span>
        </div>
        <v-avatar :size="40">
          <v-img
            src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
          ></v-img>
        </v-avatar>
      </div>
    </div>
    <v-list-item three-line>
      <v-list-item-avatar :size="75" tile>
        <v-img :src="files[0].url" :lazy-src="files[0].url"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-subtitle class="caption">
          {{ postType }}</v-list-item-subtitle
        >
        <v-list-item-title>
          <span class="font-weight-bold d-block">{{ title || "" }}</span>
          <span>{{ text || "" }}</span>
        </v-list-item-title>
        <v-list-item-subtitle>
          <span class="d-flex align-center">
            <span class="mr-3">
              <v-icon small class="mr-1">mdi-heart</v-icon>
              <span>{{ reactionsCount }}</span>
            </span>
            <span class="mr-3">
              <v-icon small class="mr-1">mdi-comment</v-icon>
              <span>{{ commentsCount }}</span>
            </span>
          </span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "discover-page-post-preview-item",
  props: {
    type: {
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
    reactionsCount: {
      type: Number,
      required: true,
    },
    commentsCount: {
      type: Number,
      required: true,
    },
    files: {
      type: Array,
      required: true,
    },
  },
  computed: {
    postType() {
      return this.type === "itinerary" ? "Itinerary" : "Travel Story";
    },
  },
};
</script>
