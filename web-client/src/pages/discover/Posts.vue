<template>
  <v-card color="transparent" flat>
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <v-autocomplete
            single-line
            label="Search Destination"
            outlined
            append-icon="mdi-magnify"
          ></v-autocomplete>
        </v-col>
        <v-col>
          <div class="d-flex justify-space-between align-center mb-5">
            <span class="subtitle-1 secondary--text">Manila</span>
            <span>
              <span class="mr-1">28°</span>
              <v-icon>mdi-weather-cloudy</v-icon>
            </span>
          </div>
          <div class="d-flex justify-space-between align-center">
            <template v-for="n in 5">
              <div :key="n" class="text-center">
                <v-avatar color="primary" class="mb-2">
                  <v-icon color="white">mdi-food-apple-outline</v-icon>
                </v-avatar>
                <span class="caption d-block">Event</span>
              </div>
            </template>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="d-flex justify-space-between align-center mb-5">
            <span class="subtitle-1 secondary--text font-weight-bold"
              >Posts</span
            >
            <span>
              <custom-tooltip-button
                icon="mdi-sort"
                text="Sort Posts"
              ></custom-tooltip-button>
              <custom-tooltip-button
                icon="mdi-filter"
                text="Filter Posts"
              ></custom-tooltip-button>
            </span>
          </div>
          <template v-for="n in 5">
            <discover-post-preview-item
              :key="n"
              :type="n % 2 == 0 ? 'itinerary' : 'travel-story'"
            ></discover-post-preview-item>
            <v-divider v-if="n !== 5"> </v-divider>
          </template>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import CustomTooltipButton from "@/components/custom/TooltipButton";
import DiscoverPostPreviewItem from "@/components/discover/PostPreviewItem";
export default {
  components: { DiscoverPostPreviewItem, CustomTooltipButton },
};
</script>
