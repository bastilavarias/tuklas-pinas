<template>
  <v-card outlined tile>
    <div class="px-4 py-3 d-flex align-start justify-space-between">
      <div class="mr-2">
        <span class="caption">Sebastian Curtis T. Lavarias - 6 hrs ago</span>
        <span class="d-block mb-1 title font-weight-bold secondary--text"
          >Lorem ipsum dolor sit amet.</span
        >
        <span class="body-2"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          deserunt excepturi facilis laboriosam molestias neque placeat. Alias
          beatae eius quisquam.</span
        >
      </div>
      <v-avatar :size="40">
        <v-img
          src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
        ></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "itinerary-post-detail-card",
};
</script>
