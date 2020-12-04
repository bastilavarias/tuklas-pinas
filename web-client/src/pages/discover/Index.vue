<template>
  <section class="discover-page-map">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      height="100%"
      class="map"
      ref="map"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <template v-for="(discovery, index) in discoveries">
        <l-marker
          :key="index"
          :lat-lng="latLng(discovery.coordination.x, discovery.coordination.y)"
          @click="goToPlaceDetails(discovery)"
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
import { FETCH_DISCOVERIES } from "@/store/types/discovery";

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
      discoveries: [],
    };
  },
  computed: {
    latitude() {
      return this.$route.params.latitude;
    },
    longitude() {
      return this.$route.params.longitude;
    },
    routeName() {
      return this.$route.name;
    },
  },
  watch: {
    routeName(val) {
      if (val === "discover-dashboard-page") {
        try {
          this.center = latLng(14.63, 120.977);
          setTimeout(() => (this.zoom = 6), 500);
        } catch (_) {}
      }
    },
    latitude() {
      if (this.routeName === "discover-place-details-page") {
        this.center = latLng(this.latitude, this.longitude);
        setTimeout(() => (this.zoom = 8), 500);
      }
    },
  },
  methods: {
    async fetchDiscoveries() {
      this.showMap = false;
      this.discoveries = await this.$store.dispatch(FETCH_DISCOVERIES);
      this.showMap = true;
    },
    async goToPlaceDetails({ placeName, country, coordination }) {
      await this.$router.push({
        name: "discover-place-details-page",
        params: {
          placeName,
          country,
          latitude: coordination.x,
          longitude: coordination.y,
        },
      });
    },
  },
  async created() {
    if (this.routeName === "discover-place-details-page") {
      this.center = latLng(this.latitude, this.longitude);
      setTimeout(() => (this.zoom = 8), 500);
    }
    await this.fetchDiscoveries();
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
