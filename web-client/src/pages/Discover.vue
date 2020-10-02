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
      <l-marker :lat-lng="withPopup">
        <l-popup>
          <div @click="innerClick">
            I am a popup
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>
      <l-marker :lat-lng="withTooltip">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div @click="innerClick">
            I am a tooltip
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
    <v-navigation-drawer
      width="400"
      permanent
      class="grey-background"
      :mini-variant.sync="isSideDrawerOpen"
    >
      <v-row dense>
        <v-col cols="12">
          <v-card outlined tile>
            <v-list-item class="px-2" v-if="isSideDrawerOpen">
              <v-list-item-action>
                <custom-tooltip-button
                  icon="mdi-chevron-right"
                  text="Open Side Drawer"
                ></custom-tooltip-button>
              </v-list-item-action>
            </v-list-item>
            <v-card-text v-if="!isSideDrawerOpen">
              <v-text-field
                single-line
                label="Search destination here"
                outlined
                append-icon="mdi-magnify"
                append-outer-icon="mdi-chevron-left"
                @click:append-outer="isSideDrawerOpen = true"
              ></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card outlined tile>
            <template v-for="n in 2">
              <v-list-item :key="n">
                <v-list-item-icon
                  ><v-icon color="secondary">mdi-map</v-icon></v-list-item-icon
                >
                <v-list-item-content>
                  <v-list-item-title>My Travels</v-list-item-title>
                  <v-list-item-subtitle
                    >Lorem ipsum dolor sit amet.</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-divider v-if="n !== 2"></v-divider>
            </template>
          </v-card>
        </v-col>
        <v-col cols="12" v-if="!isSideDrawerOpen">
          <v-card outlined tile>
            <v-card-title>Posts in this area</v-card-title>
            <template v-for="n in 2">
              <v-list-item :key="n">
                <v-list-item-icon
                  ><v-icon color="secondary">mdi-map</v-icon></v-list-item-icon
                >
                <v-list-item-content>
                  <v-list-item-title>My Travels</v-list-item-title>
                  <v-list-item-subtitle
                    >Lorem ipsum dolor sit amet.</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-divider v-if="n !== 2"></v-divider>
            </template>
          </v-card>
        </v-col>
      </v-row>
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
      zoom: 13,
      center: latLng(14.6206, 120.966),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(14.6206, 120.966),
      withTooltip: latLng(47.41322, -1.219482),
      currentZoom: 11.5,
      currentCenter: latLng(14.6206, 120.966),
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
