<template>
  <section class="py-10 grey--background" id="home-popular-itineraries-section">
    <v-container>
      <div class="text-center mb-10">
        <h1 class="display-1 mb-1">Popular Itineraries</h1>
        <div class="custom-divider"></div>
      </div>
      <v-row>
        <template v-for="n in 3">
          <v-col cols="12" :md="n === 3 ? '12' : '6'" lg="4" :key="n">
            <itinerary-post-preview></itinerary-post-preview>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ItineraryPostPreview from "@/components/ItineraryPostPreview";
export default {
  name: "home-popular-itineraries-section",
  components: { ItineraryPostPreview },
};
</script>
