<template>
  <v-expansion-panels flat hover>
    <template v-for="n in 5">
      <v-expansion-panel :key="n">
        <v-expansion-panel-header>
          <span class="subtitle-2">
            <span>{{ n }}. To Destination Name</span>
            <span class="mx-1">-</span>
            <span class="font-italic">Type of transportation</span>
          </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <span class="body-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </template>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "itinerary-post-page-personal-reviews-card-transportation-content",
};
</script>
