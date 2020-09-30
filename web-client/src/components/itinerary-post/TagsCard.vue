<template>
  <v-card tile outlined>
    <div class="px-4 py-1">
      <span class="subtitle-2 ma-1 d-block">Events</span>
      <template v-for="n in 5">
        <v-chip :key="n" class="ma-1 text-capitalize"> Event 1 </v-chip>
      </template>
    </div>
    <v-divider></v-divider>
    <div class="px-4 py-1">
      <span class="subtitle-2 ma-1 d-block">Tour Guides</span>
      <template v-for="n in 3">
        <v-chip class="ma-1" :key="n">
          <v-avatar left>
            <v-icon>mdi-account-circle</v-icon>
          </v-avatar>
          Tour Guide 1
        </v-chip>
      </template>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "itinerary-post-tags-card",
};
</script>
