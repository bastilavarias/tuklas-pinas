<template>
  <section class="discover-page-map">
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
          @click="$router.push({ name: 'discover-page-map-post-details' })"
        >
        </l-marker>
      </template>
    </l-map>
    <v-navigation-drawer
      width="400"
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
import DiscoverPagePostsToolbar from "@/components/discover-page/PostsToolbar";
import GenericItineraryPostSearchPreviewListItem from "@/components/generic/list-item/ItineraryPostSearchPreview";
import GenericTravelStoryPostSearchPreviewListItem from "@/components/generic/list-item/TravelStoryPostSearchPreview";

export default {
  components: {
    GenericTravelStoryPostSearchPreviewListItem,
    GenericItineraryPostSearchPreviewListItem,
    DiscoverPagePostsToolbar,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
  },
  data() {
    return {
      latLng: latLng,
      zoom: 6,
      center: latLng(14.63, 120.977),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOptions: {
        zoomSnap: 0.5,
        zoomControl: false,
      },
      isSideDrawerOpen: false,
      showMap: true,
      sampleMarkerLocations: [
        {
          latitude: 9.834949,
          longitude: 118.738358,
        },
        {
          latitude: 20.448507,
          longitude: 121.97081,
        },
        {
          latitude: 14.599512,
          longitude: 120.984222,
        },
        {
          latitude: 10.315699,
          longitude: 123.885437,
        },
      ],
    };
  },
};
</script>

<style scoped>
.discover-page-map {
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
</style>
