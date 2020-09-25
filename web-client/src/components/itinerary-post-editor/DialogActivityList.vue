<template>
  <div>
    <div class="d-flex justify-space-between align-center">
      <span class="subtitle-1">Activities</span>
      <div>
        <v-btn icon>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>
    <template v-for="n in 5">
      <v-list-item :key="n">Lorem ipsum dolor.</v-list-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "itinerary-post-editor-dialog-activity-list",
};
</script>
