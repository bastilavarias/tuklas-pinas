<template>
  <v-expansion-panels flat>
    <v-expansion-panel>
      <v-expansion-panel-header>Activities</v-expansion-panel-header>
      <v-expansion-panel-content>
        <itinerary-post-editor-summary-field-activities-table></itinerary-post-editor-summary-field-activities-table>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Transportation</v-expansion-panel-header>
      <v-expansion-panel-content>
        <itinerary-post-editor-summary-field-transportation-table></itinerary-post-editor-summary-field-transportation-table>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import ItineraryPostEditorSummaryFieldActivitiesTable from "@/components/itinerary-post-editor/summary-field/tables/Activities";
import ItineraryPostEditorSummaryFieldTransportationTable from "@/components/itinerary-post-editor/summary-field/tables/Transporation";
export default {
  name: "itinerary-post-editor-summary-field",
  components: {
    ItineraryPostEditorSummaryFieldTransportationTable,
    ItineraryPostEditorSummaryFieldActivitiesTable,
  },
};
</script>
