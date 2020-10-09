<template>
  <v-card outlined>
    <v-card-title class="subtitle-1 font-weight-bold"
      >Itinerary Posts</v-card-title
    >
    <template v-for="n in 5">
      <generic-itinerary-post-search-preview-list-item></generic-itinerary-post-search-preview-list-item>
      <v-divider v-if="n !== 5"></v-divider>
    </template>
    <v-card-actions>
      <v-btn block color="secondary" class="text-capitalize">See All</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import GenericItineraryPostSearchPreviewListItem from "@/components/generic/list-item/ItineraryPostSearchPreview";
export default {
  name: "search-page-itinerary-posts-card",
  components: { GenericItineraryPostSearchPreviewListItem },
};
</script>
