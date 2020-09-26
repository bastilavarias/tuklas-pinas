<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-5">
      <span class="subtitle-1">Itinerary</span>
      <div>
        <v-btn icon v-if="layout !== 'default'" @click="layout = 'default'">
          <v-icon>mdi-card-outline</v-icon>
        </v-btn>
        <v-btn icon v-if="layout !== 'list'" @click="layout = 'list'">
          <v-icon>mdi-view-list-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-sort</v-icon>
        </v-btn>
        <v-btn icon @click="isItineraryPostEditorOpen = true">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>
    <v-row dense>
      <template v-for="n in 6">
        <v-col cols="12" md="6" :key="n">
          <itinerary-post-editor-day-card></itinerary-post-editor-day-card>
        </v-col>
      </template>
    </v-row>
    <itinerary-post-editor-dialog
      :is-open.sync="isItineraryPostEditorOpen"
    ></itinerary-post-editor-dialog>
  </div>
</template>

<script>
import ItineraryPostEditorDialog from "@/components/itinerary-post-editor/Dialog";
import ItineraryPostEditorDayCard from "@/components/itinerary-post-editor/DayCard";
export default {
  name: "itinerary-post-editor-dropzone",

  components: { ItineraryPostEditorDayCard, ItineraryPostEditorDialog },

  data() {
    return {
      layout: "default",
      isItineraryPostEditorOpen: false,
    };
  },
};
</script>
