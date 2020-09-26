<template>
  <v-card flat color="transparent">
    <v-card-title>
      <span>Internet Access Review</span>
    </v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <v-textarea label="Review" single-line outlined></v-textarea>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "itinerary-post-editor-personal-internet-access-review-form",
};
</script>
