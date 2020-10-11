<template>
  <div class="px-4 py-3 d-flex align-start justify-space-between">
    <div class="mr-2">
      <span class="caption">Sebastian Curtis T. Lavarias - 6 hrs ago</span>
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
        <span class="d-block mb-1 title font-weight-bold secondary--text"
          >Lorem ipsum dolor sit amet.</span
        >
      </custom-router-link>
      <span
        class="d-block mb-1 title font-weight-bold secondary--text"
        v-if="!clickable"
        >Lorem ipsum dolor sit amet.</span
      >
      <span class="body-2 d-block mb-3"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt
        excepturi facilis laboriosam molestias neque placeat. Alias beatae eius
        quisquam.</span
      >
      <div>
        <template v-for="n in 4">
          <v-chip
            label
            color="primary"
            small
            :class="`${n === 1 ? 'mr-1 mb-1' : 'ma-1'} font-weight-bold`"
            :key="n"
            >Category {{ n }}</v-chip
          >
        </template>
      </div>
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
  },
};
</script>
