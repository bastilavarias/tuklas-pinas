<template>
  <v-row dense>
    <v-col cols="12" md="8">
      <v-text-field label="Activity Name" single-line outlined></v-text-field>
    </v-col>
    <v-col cols="12" md="4">
      <v-text-field label="Fee" single-line outlined type="number">
        <template v-slot:prepend-inner>
          <span class="subtitle-2">&#8369;</span>
        </template>
      </v-text-field>
    </v-col>
    <v-col cols="12">
      <v-textarea label="Other Details" single-line outlined></v-textarea>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "itinerary-post-editor-timeline-dialog-timestamp-list-activity-form",
};
</script>
