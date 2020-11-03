<template>
  <v-card outlined tile>
    <v-card-title class="font-weight-bold">Itinerary</v-card-title>
    <v-data-table
      :headers="daysTableHeaders"
      :items="itinerary.days"
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
      <template v-slot:item.destinationsCount="{ item }">
        <span class="text-capitalize"
          >{{ item.destinationsCount }} Destination<span
            v-if="item.destinationsCount > 1"
            >s</span
          ></span
        >
      </template>
      <template v-slot:item.expenses="{ item }">
        <span>{{ formatMoney(item.expenses) }}</span>
      </template>
      <template v-slot:item.action="{ item }">
        <custom-tooltip-button
          text="Next"
          icon="mdi-chevron-right"
          :action="() => openItineraryDayDialog(item)"
        ></custom-tooltip-button>
      </template>
    </v-data-table>
    <v-dialog v-model="isDayDialogOpen" width="800">
      <v-card>
        <v-card-title>
          <span class="font-weight-bold">Day {{ selectedDay.day }}</span>
          <div class="flex-grow-1"></div>
          <v-btn icon @click="isItineraryDetailsDialogOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>{{ formatDate(selectedDay.date) }}</v-card-subtitle>
        <v-card-text>
          <v-data-table
            :headers="timestampsTableHeaders"
            :items="selectedDay.timestamps"
            hide-default-footer
            :single-expand="singleExpand"
            item-key="time"
            show-expand
          >
            <template v-slot:item.time="{ item }">
              {{ formatTime(item.time) }}
            </template>
            <template v-slot:item.transportation="{ item }">
              {{ item.transportation }} -<span title="Fare">{{
                formatMoney(item.fare)
              }}</span>
            </template>
            <template v-slot:item.destination="{ item }">
              <span class="text-capitalize">{{ item.destination.name }}</span>
            </template>
            <template v-slot:item.interests="{ item }">
              <template v-for="(interest, index) in item.interests">
                <v-chip small color="primary" class="ma-1" :key="index">{{
                  interest.name
                }}</v-chip>
              </template>
            </template>
            <template v-slot:item.expenses="{ item }">
              <span>&#8369; {{ item.expenses }}</span>
            </template>
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length">
                <div class="py-3">
                  <span class="d-block subtitle-2 mb-2">Other Details:</span>
                  <span class="body-2">
                    <span v-if="item.otherDetails" class="text-capitalize">{{
                      item.otherDetails
                    }}</span>
                    <span v-if="!item.otherDetails" class="font-italic"
                      >No other details.</span
                    >
                  </span>
                </div>
              </td>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import commonUtilities from "@/common/utilities";
import CustomTooltipButton from "@/components/custom/TooltipButton";

export default {
  name: "post-details-page-itinerary-table-card",
  components: { CustomTooltipButton },
  props: {
    itinerary: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      daysTableHeaders: [
        {
          text: "Day",
          value: "date",
          sortable: true,
          align: "left",
        },
        {
          text: "Destinations",
          value: "destinationsCount",
          sortable: true,
        },
        {
          text: "Expenses",
          value: "expenses",
          sortable: true,
        },
        {
          text: "",
          value: "action",
          sortable: false,
          align: "right",
        },
      ],
      singleExpand: true,
      selectedDay: [],
      isDayDialogOpen: false,
      timestampsTableHeaders: [
        {
          text: "Time",
          value: "time",
          sortable: true,
          align: "left",
        },
        {
          text: "Destination",
          value: "destination",
          sortable: false,
        },
        {
          text: "Transportation",
          value: "transportation",
          sortable: false,
        },
        {
          text: "Places of Interest",
          value: "interests",
          sortable: false,
        },
        {
          text: "Expenses",
          value: "expenses",
          sortable: true,
        },
        { text: "", value: "data-table-expand" },
      ],
    };
  },
  mixins: [commonUtilities],
  methods: {
    openItineraryDayDialog(day) {
      this.selectedDay = day;
      this.isDayDialogOpen = true;
    },
  },
};
</script>
