<template>
  <v-row>
    <v-col cols="12" md="3">
      <v-row>
        <v-col cols="12">
          <profile-page-events-side-card></profile-page-events-side-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="9">
      <v-row>
        <v-col cols="12">
          <v-card outlined>
            <v-card-title class="font-weight-bold">Travel Map</v-card-title>
            <v-toolbar flat>
              <v-text-field
                append-icon="mdi-magnify"
                single-line
                hide-details
                dense
                filled
                rounded
                flat
                label="Search"
                class="mr-3"
              ></v-text-field>
              <v-chip>
                <v-icon left> mdi-tune </v-icon>
                <span class="font-weight-medium">Filters</span>
              </v-chip>
            </v-toolbar>
            <v-card-text>
              <div class="map-holder">
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
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import ProfilePageEventsSideCard from "@/components/profile-page/EventsSideCard";
export default {
  components: {
    ProfilePageEventsSideCard,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
  },
  data() {
    return {
      latLng: latLng,
      zoom: 5,
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
          latitude: 8.928487,
          longitude: 837.791459,
        },
        {
          latitude: 13.742053,
          longitude: 844.274466,
        },
        {
          latitude: 11.888853,
          longitude: 841.4381,
        },
        {
          latitude: 10.898042,
          longitude: 843.98863,
        },
      ],
    };
  },
};
</script>

<style scoped>
.map-holder {
  height: 500px;
  position: relative;
}

.map {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0 !important;
}
</style>
