<template>
  <div>
    <h1 class="title font-weight-bold mb-2">Explore Events</h1>
    <v-row dense>
      <template v-for="(event, index) in events">
        <v-col cols="12" md="6" :key="index">
          <v-card flat min-height="8rem" dark :style="{ position: 'relative' }">
            <div class="event-content d-flex align-center justify-center">
              <div class="text-center">
                <span class="overline">{{ event.name }}</span>
              </div>
            </div>
            <div
              class="background-image"
              :style="{
                backgroundImage: `url(${event.backgroundImage})`,
              }"
            ></div>
            <div class="dark-overlay"></div>
          </v-card>
        </v-col>
      </template>
      <v-col cols="12" md="6">
        <v-card
          flat
          min-height="8rem"
          color="secondary"
          dark
          :to="{ name: 'events-explorer' }"
        >
          <div class="event-content d-flex align-center justify-center">
            <div class="text-center">
              <span class="d-block"
                ><v-icon large>mdi-dots-horizontal-circle</v-icon></span
              >
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "generic-mini-events-explorer-side-card",

  data() {
    return {
      events: [
        {
          backgroundImage: require("@/assets/generic/event-background-images/project-81.jpeg"),
          name: "Project 81",
        },
        {
          backgroundImage: require("@/assets/generic/event-background-images/chasing-waterfalls.jpeg"),
          name: "Chasing Waterfalls",
        },
        {
          backgroundImage: require("@/assets/generic/event-background-images/food-trippers.jpg"),
          name: "Food Trippers",
        },
        {
          backgroundImage: require("@/assets/generic/event-background-images/backpackers.jpg"),
          name: "Backpackers",
        },
        {
          backgroundImage: require("@/assets/generic/event-background-images/mountaineers.jpeg"),
          name: "Mountaineers",
        },
      ],
    };
  },
};
</script>

<style scoped>
.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  z-index: 1;
}

.event-content {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
}
</style>
