<template>
  <v-card color="transparent" flat>
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <generic-geolocations-autocomplete
            label="Search Destination"
            :geoLocation.sync="geoLocation"
          ></generic-geolocations-autocomplete>
        </v-col>
      </v-row>
    </v-card-text>
    <div class="mb-5">
      <div class="px-4 d-flex justify-space-between align-center mb-5">
        <span class="subtitle-2 secondary--text">Location</span>
        <span>
          <span class="mr-1">28°</span>
          <v-icon>mdi-weather-cloudy</v-icon>
        </span>
      </div>
      <v-row dense>
        <template v-for="n in 3">
          <v-col cols="3" :key="n">
            <div class="text-center">
              <v-avatar color="primary" class="mb-2">
                <v-icon color="white">mdi-food-apple-outline</v-icon>
              </v-avatar>
              <span class="caption d-block">Event {{ n }}</span>
            </div>
          </v-col>
        </template>
        <v-col cols="3" v-if="!isEventsExplorerExpanded">
          <div
            class="text-center cursor-pointer"
            @click="isEventsExplorerExpanded = true"
          >
            <v-avatar color="secondary" class="mb-2">
              <v-icon color="white">mdi-dots-horizontal-circle</v-icon>
            </v-avatar>
            <span class="caption d-block">More</span>
          </div>
        </v-col>
        <v-col cols="3" v-if="isEventsExplorerExpanded">
          <div
            class="text-center cursor-pointer"
            @click="isEventsExplorerExpanded = false"
          >
            <v-avatar color="secondary" class="mb-2">
              <v-icon color="white">mdi-chevron-up</v-icon>
            </v-avatar>
            <span class="caption d-block">Less</span>
          </div>
        </v-col>
        <template v-for="n in 5" v-if="isEventsExplorerExpanded">
          <v-col cols="3" :key="n + 3">
            <div class="text-center">
              <v-avatar color="primary" class="mb-2">
                <v-icon color="white">mdi-food-apple-outline</v-icon>
              </v-avatar>
              <span class="caption d-block">Event {{ n + 3 }}</span>
            </div>
          </v-col>
        </template>
      </v-row>
    </div>
    <div>
      <div class="px-4 d-flex justify-space-between align-center mb-5">
        <span class="subtitle-2 secondary--text">Featured Posts</span>
        <div class="flex-grow-1"></div>
        <v-chip>
          <v-icon left> mdi-tune </v-icon>
          <span class="font-weight-medium">Filters</span>
        </v-chip>
      </div>
      <template v-for="n in [8, 9]">
        <generic-travel-story-post-search-preview-list-item
          :key="n"
        ></generic-travel-story-post-search-preview-list-item>
      </template>
      <template v-for="n in [10, 11]">
        <generic-itinerary-post-search-preview-list-item
          :key="n"
        ></generic-itinerary-post-search-preview-list-item>
      </template>
    </div>
  </v-card>
</template>

<script>
import GenericTravelStoryPostSearchPreviewListItem from "@/components/generic/list-item/TravelStoryPostSearchPreview";
import GenericItineraryPostSearchPreviewListItem from "@/components/generic/list-item/ItineraryPostSearchPreview";
import GenericGeolocationsAutocomplete from "@/components/generic/autocomplete/Geolocations";
export default {
  components: {
    GenericGeolocationsAutocomplete,
    GenericItineraryPostSearchPreviewListItem,
    GenericTravelStoryPostSearchPreviewListItem,
  },
  data() {
    return {
      isEventsExplorerExpanded: false,
      geoLocation: null,
    };
  },
  watch: {
    async geoLocation(val) {
      const { display_name, address, lat, lon } = val;
      if (display_name && lat && lon) {
        await this.$router.push({
          name: "discover-place-details-page",
          params: {
            placeName: display_name,
            country: address.country,
            latitude: lat,
            longitude: lon,
          },
        });
      }
    },
  },
};
</script>
