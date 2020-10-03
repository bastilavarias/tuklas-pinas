<template>
  <section class="discover">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      height="100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
      class="map"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker :lat-lng="latLng(14.6206, 120.966)"> </l-marker>
    </l-map>
    <v-navigation-drawer
      width="450"
      permanent
      :mini-variant.sync="isSideDrawerOpen"
    >
      <router-view></router-view>
    </v-navigation-drawer>
  </section>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import CustomTooltipButton from "@/components/custom/TooltipButton";

export default {
  name: "Example",
  components: {
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
      center: latLng(14.6206, 120.966),
      currentZoom: 11.5,
      currentCenter: latLng(14.6206, 120.966),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
        zoomControl: false,
      },
      showMap: true,
      isSideDrawerOpen: false,
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
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
