<template>
  <v-card outlined tile>
    <v-card-title class="font-weight-bold">Itinerary</v-card-title>
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
      <template v-slot:item.action="{ item }">
        <v-btn icon @click="isItineraryDetailsDialogOpen = true">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="isItineraryDetailsDialogOpen" width="800">
      <v-card>
        <v-card-title>
          <span class="font-weight-bold">Day 1</span>
          <div class="flex-grow-1"></div>
          <v-btn icon @click="isItineraryDetailsDialogOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>May 21, 2020</v-card-subtitle>
        <v-card-text>
          <v-data-table
            :headers="itineraryTimelineTimestampTableHeaders"
            :items="itineraryTimelineTimestamps"
            hide-default-footer
            :single-expand="singleExpand"
            item-key="time"
            show-expand
          >
            <template v-slot:item.transportation="{ item }">
              {{ item.transportation.type }} -<span title="Fare">
                &#8369; {{ item.transportation.fare }}</span
              >
            </template>
            <template v-slot:item.expenses="{ item }">
              <span>&#8369; {{ item.expenses }}</span>
            </template>
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length">
                <div class="py-3">
                  <span class="d-block subtitle-2 mb-2">Details:</span>
                  <span class="body-2 text-capitalize">
                    {{ item.details }}
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
export default {
  name: "itinerary-post-page-timeline-card",

  data() {
    return {
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
          text: "",
          value: "action",
          align: "right",
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
      isItineraryDetailsDialogOpen: false,
      itineraryTimelineTimestampTableHeaders: [
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
      itineraryTimelineTimestamps: [
        {
          time: "10:00AM",
          destination: "Destination 1",
          transportation: {
            type: "Airplane",
            fare: 500,
          },
          interests: ["Interest 1", "Interest 2"],
          expenses: 500,
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisi et enim dictum dignissim. Proin volutpat risus id efficitur ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum molestie ligula at elit malesuada fermentum. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas a eros a arcu condimentum sollicitudin vitae ut mauris. Ut ut odio non diam varius pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          time: "1:00PM",
          destination: "Destination 2",
          transportation: {
            type: "Train",
            fare: 500,
          },
          interests: ["Interest 1", "Interest 2"],
          expenses: 500,
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisi et enim dictum dignissim. Proin volutpat risus id efficitur ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum molestie ligula at elit malesuada fermentum. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas a eros a arcu condimentum sollicitudin vitae ut mauris. Ut ut odio non diam varius pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          time: "5:00PM",
          destination: "Destination 3",
          transportation: {
            type: "Bike",
            fare: 500,
          },
          interests: ["Interest 1", "Interest 2"],
          expenses: 500,
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisi et enim dictum dignissim. Proin volutpat risus id efficitur ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum molestie ligula at elit malesuada fermentum. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas a eros a arcu condimentum sollicitudin vitae ut mauris. Ut ut odio non diam varius pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
      singleExpand: true,
    };
  },
};
</script>
