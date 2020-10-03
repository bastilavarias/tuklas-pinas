<template>
  <section class="discover">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      height="100%"
      class="map"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <template v-for="(location, index) in sampleMarkerLocations">
        <l-marker
          :key="index"
          :lat-lng="latLng(location.latitude, location.longitude)"
        >
        </l-marker>
      </template>
    </l-map>
    <v-navigation-drawer
      width="450"
      permanent
      :mini-variant.sync="isSideDrawerOpen"
    >
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
            <span class="subtitle-1 secondary--text">Destination</span>
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
          <template v-for="n in 4">
            <discover-post-preview-item
              :key="n"
              :type="n % 2 == 0 ? 'itinerary' : 'travel-story'"
            ></discover-post-preview-item>
            <v-divider v-if="n !== 5"> </v-divider>
          </template>
        </div>
      </v-card>
    </v-navigation-drawer>
  </section>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import CustomTooltipButton from "@/components/custom/TooltipButton";
import DiscoverPostPreviewItem from "@/components/discover/PostPreviewItem";

export default {
  name: "Example",
  components: {
    DiscoverPostPreviewItem,
    CustomTooltipButton,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
  },
  data() {
    return {
      latLng: latLng,
      zoom: 15,
      center: latLng(14.63, 120.977),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOptions: {
        zoomSnap: 0.5,
        zoomControl: false,
      },
      showMap: true,
      isSideDrawerOpen: false,
      isEventsExplorerExpanded: false,
      sampleMarkerLocations: [
        {
          latitude: 14.6206,
          longitude: 120.966,
        },
        {
          latitude: 14.63,
          longitude: 120.977,
        },
        {
          latitude: 14.64,
          longitude: 120.966,
        },
        {
          latitude: 14.64,
          longitude: 120.977,
        },
      ],
    };
  },
};
</script>

<style scoped>
.discover {
  height: 100vh;
  width: 100%;
  position: relative;
}

.map {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0 !important;
}

.search-field {
  position: absolute;
  width: 30rem;
  top: 3%;
  left: 50%;
  transform: translate(-50%, -10%);
  z-index: 1;
}
</style>
