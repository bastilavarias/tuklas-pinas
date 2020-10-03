<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-5">
      <span class="subtitle-1">Itinerary</span>
      <div>
        <custom-tooltip-button
          icon="mdi-sort"
          text="Sort"
        ></custom-tooltip-button>
        <custom-tooltip-button
          icon="mdi-plus"
          text="Create New Day"
          :action="() => (this.isTimelineDialogOpen = true)"
        ></custom-tooltip-button>
      </div>
    </div>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="itineraryTimelineDataTableHeaders"
          :items="itineraryTimeline"
          hide-default-footer
        >
          <template v-slot:item.day="{ item }">
            <span class="font-weight-bold">Day {{ item.day }}</span>
          </template>
          <template v-slot:item.numberOfDestinations="{ item }">
            <span class="text-capitalize">{{ item.numberOfDestinations }}</span>
          </template>
          <template v-slot:item.totalExpenses="{ item }">
            <span>&#8369; {{ item.totalExpenses }}</span>
          </template>
          <template v-slot:item.actions="{ item }">
            <custom-tooltip-button
              icon="mdi-pencil-outline"
              text="Edit"
            ></custom-tooltip-button>
            <custom-tooltip-button
              icon="mdi-trash-can-outline"
              text="Remove"
            ></custom-tooltip-button>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <itinerary-post-editor-timeline-dialog
      :is-open.sync="isTimelineDialogOpen"
    ></itinerary-post-editor-timeline-dialog>
  </div>
</template>

<script>
import ItineraryPostEditorTimelineDialog from "@/components/itinerary-post-editor/timeline-field/Dialog";
import CustomTooltipButton from "@/components/custom/TooltipButton";
export default {
  name: "itinerary-post-editor-timeline-field",

  components: { CustomTooltipButton, ItineraryPostEditorTimelineDialog },

  data() {
    return {
      isTimelineDialogOpen: false,
      itineraryTimelineDataTableHeaders: [
        {
          text: "Day",
          value: "day",
          sortable: true,
          align: "left",
        },
        {
          text: "# of Destinations",
          value: "numberOfDestinations",
          sortable: false,
        },
        {
          text: "Total Expenses",
          value: "totalExpenses",
          sortable: true,
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
        },
      ],
      itineraryTimeline: [
        {
          day: 1,
          numberOfDestinations: "3 Destinations",
          totalExpenses: 5000,
        },
        {
          day: 2,
          numberOfDestinations: "3 Destinations",
          totalExpenses: 5000,
        },
        {
          day: 3,
          numberOfDestinations: "3 Destinations",
          totalExpenses: 5000,
        },
      ],
    };
  },
};
</script>
