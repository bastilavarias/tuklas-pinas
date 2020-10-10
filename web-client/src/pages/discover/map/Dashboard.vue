<template>
  <v-card color="transparent" flat>
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <v-autocomplete
            single-line
            label="Search Destination"
            filled
            rounded
            append-icon="mdi-magnify"
            hide-details
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-card-text>
    <div class="px-4 d-flex justify-space-between align-center mb-5">
      <span class="subtitle-1 secondary--text">Location</span>
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
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      isEventsExplorerExpanded: false,
    };
  },
};
</script>
