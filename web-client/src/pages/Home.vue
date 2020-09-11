<template>
  <v-app>
    <v-toolbar
      absolute
      color="transparent"
      flat
      width="100%"
      style="z-index: 3"
    >
      <v-app-bar-nav-icon>
        <v-icon large> mdi-map-marker </v-icon>
      </v-app-bar-nav-icon>
      <v-spacer> </v-spacer>
      <v-btn color="transparent" depressed class="text-capitalize">About</v-btn>
      <v-btn color="transparent" depressed class="text-capitalize"
        >Itineraries</v-btn
      >
      <v-btn color="transparent" depressed class="text-capitalize"
        >Contacts</v-btn
      >
      <v-btn color="transparent" depressed class="text-capitalize">FAQs</v-btn>
      <v-btn icon>
        <v-icon large>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <home-landing-page></home-landing-page>
  </v-app>
</template>

<script>
import HomeLandingPage from "@/components/home/LandingPage";
export default {
  name: "Home",
  components: { HomeLandingPage },
};
</script>
