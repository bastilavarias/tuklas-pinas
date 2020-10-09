<template>
  <v-card outlined>
    <v-card-title class="subtitle-1 font-weight-bold"
      >Travel Story Posts</v-card-title
    >
    <template v-for="n in 5">
      <generic-travel-story-post-search-preview-list-item></generic-travel-story-post-search-preview-list-item>
      <v-divider v-if="n !== 5"></v-divider>
    </template>
    <v-card-actions>
      <v-btn block color="secondary" class="text-capitalize">See All</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import GenericTravelStoryPostSearchPreviewListItem from "@/components/generic/list-item/TravelStoryPostSearchPreview";
export default {
  name: "search-page-travel-posts-card",
  components: { GenericTravelStoryPostSearchPreviewListItem },
};
</script>
