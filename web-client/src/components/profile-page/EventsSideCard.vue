<template>
  <v-card>
    <v-card-title class="font-weight-bold">Events</v-card-title>
    <v-card-text>
      <template v-for="(event, index) in events">
        <v-chip :key="index" class="ma-1" :color="event.color">
          <v-icon left>{{ event.icon }}</v-icon>
          <span class="font-weight-bold"> {{ event.text }} </span>
        </v-chip>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "profile-page-events-side-card",
  data() {
    return {
      events: [
        {
          text: "Project 81",
          icon: "mdi-hiking",
          color: "primary",
        },
        {
          text: "Chasing Waterfalls",
          icon: "mdi-hiking",
          color: "primary",
        },
        {
          text: "Food Trippers",
          icon: "mdi-hiking",
          color: "primary",
        },
        {
          text: "Backpackers",
          icon: "mdi-hiking",
          color: "primary",
        },
        {
          text: "Mountaineers",
          icon: "mdi-hiking",
          color: "primary",
        },
        {
          text: "Solo Trip",
          icon: "mdi-hiking",
          color: "primary",
        },
        {
          text: "Couple Adventure",
          icon: "mdi-hiking",
          color: "primary",
        },
        {
          text: "Barkada Adventure",
          icon: "mdi-hiking",
          color: "primary",
        },
      ],
    };
  },
};
</script>
