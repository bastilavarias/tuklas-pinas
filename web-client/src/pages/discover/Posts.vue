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
      </v-row>
    </v-card-text>
    <div class="mb-5">
      <div class="px-4 d-flex justify-space-between align-center mb-5">
        <span class="subtitle-1 secondary--text">Manila</span>
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
        <span class="subtitle-1 secondary--text font-weight-bold">Posts</span>
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
    </div>
  </v-card>
</template>

<script>
import CustomTooltipButton from "@/components/custom/TooltipButton";
import DiscoverPostPreviewItem from "@/components/discover/PostPreviewItem";
export default {
  components: { DiscoverPostPreviewItem, CustomTooltipButton },
  data() {
    return {
      isEventsExplorerExpanded: false,
    };
  },
};
</script>
