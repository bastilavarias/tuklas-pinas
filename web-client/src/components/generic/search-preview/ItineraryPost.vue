<template>
  <div>
    <div class="px-4 pt-3">
      <div class="d-flex align-start justify-space-between">
        <div class="mr-2">
          <span class="caption">Sebastian Curtis T. Lavarias - 6 hrs ago</span>
        </div>
        <v-avatar :size="40">
          <v-img
            src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
          ></v-img>
        </v-avatar>
      </div>
    </div>
    <v-list-item three-line>
      <v-list-item-avatar :size="75" tile>
        <v-img
          src="https://images.pexels.com/photos/2604843/pexels-photo-2604843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        ></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-subtitle>
          <v-icon small class="mr-1">mdi-map-marker-outline</v-icon>
          <span class="caption">Destination Name</span>
        </v-list-item-subtitle>
        <v-list-item-title class="font-weight-bold">
          <span class="d-block">Itinerary Name</span>
          <span class="d-flex align-start">
            <span class="primary--text caption mr-1"> ({{ rating }}) </span>
            <v-rating
              v-model="rating"
              color="primary"
              background-color="grey"
              dense
              hover
              size="15"
              readonly
              class="mr-1"
            ></v-rating>
            <span class="grey--text caption mr-2"> (63) </span>
          </span></v-list-item-title
        >
        <v-list-item-subtitle>18 Destinations • 4 Events</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "generic-itinerary-post-search-preview",
  data() {
    return {
      rating: 4,
    };
  },
};
</script>
