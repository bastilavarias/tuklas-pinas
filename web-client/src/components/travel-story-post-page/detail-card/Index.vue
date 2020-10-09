<template>
  <v-card outlined tile>
    <div class="px-4 py-3 d-flex align-start justify-space-between">
      <div class="mr-2">
        <span class="caption">Sebastian Curtis T. Lavarias - 6 hrs ago</span>
        <span class="d-block mb-1 title font-weight-bold secondary--text"
          >Lorem ipsum dolor sit amet.</span
        >
        <span class="body-2 d-block mb-3"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          deserunt excepturi facilis laboriosam molestias neque placeat. Alias
          beatae eius quisquam.</span
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
    <travel-story-post-page-detail-card-gallery-preview></travel-story-post-page-detail-card-gallery-preview>
    <v-card-actions>
      <v-btn depressed text>
        <v-icon class="mr-1">mdi-heart-outline</v-icon>
        <span class="caption font-weight-bold">1K+</span>
      </v-btn>
      <v-btn depressed text>
        <v-icon class="mr-1">mdi-comment-outline</v-icon>
        <span class="caption font-weight-bold">1K+</span>
      </v-btn>
      <div class="flex-grow-1"></div>
      <v-btn depressed text>
        <v-icon class="mr-1">mdi-share-outline</v-icon>
        <span class="caption font-weight-bold">1K+</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import TravelStoryPostPageDetailCardGalleryPreview from "@/components/travel-story-post-page/detail-card/GalleryPreview";
export default {
  name: "travel-story-post-page-detail-card",
  components: {
    TravelStoryPostPageDetailCardGalleryPreview,
  },
};
</script>
