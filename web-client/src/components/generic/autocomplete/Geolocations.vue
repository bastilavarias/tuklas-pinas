<template>
  <v-autocomplete
    v-model="geoLocationLocal"
    :items.sync="locations"
    outlined
    :search-input.sync="search"
    :loading="isSearchStart"
    :filter="(v) => v"
    @keyup="searchDestinations"
    placeholder="Search Destination"
    item-text="display_name"
    :disabled="isSearchStart"
    single-line
    :label="label"
    filled
    rounded
    append-icon="mdi-magnify"
    hide-details
    clearable
    return-object
    ref="geolocation"
    no-data-text="No available GeoLocations."
    :dark="dark"
  >
  </v-autocomplete>
</template>

<script>
import { DISCOVERY_SEARCH_GEOLOCATIONS } from "@/store/types/discovery";

let timeout = null;
export default {
  name: "generic-geolocations-autocomplete",
  props: {
    label: {
      type: String,
      required: true,
    },
    geoLocation: {
      type: Object | null,
      required: true,
    },
    dark: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      search: null,
      isSearchStart: false,
      locations: [],
      geoLocationLocal: this.geoLocation,
    };
  },
  computed: {
    genericDestinations() {
      return this.$store.state.generic.destinations;
    },
  },
  watch: {
    geoLocation(val) {
      this.geoLocationLocal = val;
    },
    geoLocationLocal(val) {
      if (!val) this.locations = [];
      this.$emit("update:geoLocation", val);
    },
  },
  methods: {
    async searchDestinations() {
      if (this.search === null) return;
      clearTimeout(timeout);
      timeout = setTimeout(async () => {
        this.isSearchStart = true;
        this.locations = await this.$store.dispatch(
          DISCOVERY_SEARCH_GEOLOCATIONS,
          this.search
        );
        this.isSearchStart = false;
      }, 600);
    },
  },
};
</script>
