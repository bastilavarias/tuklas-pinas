<template>
  <v-card flat color="white" tile>
    <v-card-title class="font-weight-bold">Travel Map</v-card-title>
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
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import ProfilePageEventsSideCard from "@/components/profile-page/EventsSideCard";
import GenericStickyFooter from "@/components/generic/footer/Sticky";
import { GET_ACCOUNT_DISCOVERY_COORDINATION } from "@/store/types/account";
import commonUtilities from "@/common/utilities";
export default {
  components: {
    GenericStickyFooter,
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
      sampleMarkerLocations: [],
    };
  },

  mixins: [commonUtilities],

  computed: {
    accountID() {
      return parseInt(this.$route.params.accountID) || null;
    },
  },

  methods: {
    async getAccountDiscoveryCoordination() {
      const gotCoordination = await this.$store.dispatch(
        GET_ACCOUNT_DISCOVERY_COORDINATION,
        this.accountID
      );
      this.sampleMarkerLocations = gotCoordination.map(({ coordination }) => ({
        latitude: coordination.x,
        longitude: coordination.y,
      }));
    },
  },

  async created() {
    await this.getAccountDiscoveryCoordination();
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
