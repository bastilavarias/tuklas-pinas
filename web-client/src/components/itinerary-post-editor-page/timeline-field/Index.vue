<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-5">
      <span class="subtitle-1">Itinerary</span>
      <custom-tooltip-button
        icon="mdi-plus"
        text="Create New Day"
        :action="() => (this.isItineraryDayFormDialogOpen = true)"
      ></custom-tooltip-button>
    </div>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="itineraryDaysTableHeaders"
          :items="itineraryLocal.days"
          hide-default-footer
        >
          <template v-slot:item.date="{ item }">
            <v-list-item-content>
              <v-list-item-subtitle class="grey--text"
                >{{ formatDate(item.date) }}
              </v-list-item-subtitle>
              <v-list-item-subtitle class="font-weight-bold">
                Day {{ item.day }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </template>
          <template v-slot:item.totalDestinations="{ item }">
            <span class="text-capitalize"
              >{{ totalDestinations(item.timestamps) }} Destination<span
                v-if="totalDestinations(item.timestamps) > 1"
                >s</span
              ></span
            >
          </template>
          <template v-slot:item.totalExpenses="{ item }">
            <span>{{ formatMoney(totalExpenses(item.timestamps)) }}</span>
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
    <itinerary-post-editor-page-timeline-dialog
      :is-open.sync="isItineraryDayFormDialogOpen"
      :days.sync="itineraryLocal.days"
    ></itinerary-post-editor-page-timeline-dialog>
  </div>
</template>

<script>
import CustomTooltipButton from "@/components/custom/TooltipButton";
import ItineraryPostEditorPageTimelineDialog from "@/components/itinerary-post-editor-page/timeline-field/Dialog";
import commonUtilities from "@/common/utilities";
export default {
  name: "itinerary-post-editor-page-timeline-field",
  components: { ItineraryPostEditorPageTimelineDialog, CustomTooltipButton },
  props: {
    itinerary: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isItineraryDayFormDialogOpen: false,
      itineraryDaysTableHeaders: [
        {
          text: "Day",
          value: "date",
          sortable: true,
          align: "left",
        },
        {
          text: "Total Destinations",
          value: "totalDestinations",
          sortable: true,
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
      itineraryLocal: this.itinerary,
      selectedDay: {},
    };
  },
  mixins: [commonUtilities],
  watch: {
    itinerary(val) {
      this.itineraryLocal = val;
    },
    itineraryLocal(val) {
      this.$emit("update:itinerary", val);
    },
  },
  methods: {
    totalDestinations(timestamps) {
      const total = timestamps.length;
      return total ? total : 0;
    },
    totalExpenses(timestamps) {
      const total = timestamps
        .map((timestamp) => parseInt(timestamp.expenses))
        .reduce((flat, next) => flat + next, 0);
      return total ? total : 0;
    },
  },
};
</script>
