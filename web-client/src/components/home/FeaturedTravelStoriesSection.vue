<template>
  <section class="py-10 grey-background" id="home-travel-stories-section">
    <v-container>
      <div class="text-center mb-10">
        <h1 class="display-1 mb-1">Featured Travel Stories</h1>
        <div class="custom-divider"></div>
      </div>
      <v-row>
        <template v-for="n in 3">
          <v-col cols="12" :md="n === 3 ? '12' : '6'" lg="4" :key="n">
            <generic-travel-story-post-preview
              has-shadow
            ></generic-travel-story-post-preview>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ItineraryPostPreview from "@/components/generic/ItineraryPostPreview";
import GenericTravelStoryPostPreview from "@/components/generic/TravelStoryPostPreview";
export default {
  name: "home-featured-travel-stories-section",
  components: { GenericTravelStoryPostPreview, ItineraryPostPreview },
};
</script>
