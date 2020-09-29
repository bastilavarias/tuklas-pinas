<template>
  <v-card outlined tile>
    <v-card-title>Itinerary</v-card-title>
    <v-expansion-panels accordion flat :value="0">
      <template v-for="n in 5">
        <v-expansion-panel :key="n">
          <v-expansion-panel-header>
            <div class="d-flex justify-space-between align-center">
              <span class="body-2">
                <span class="font-weight-bold">Day {{ n }}</span>
                <span class="mx-1">-</span>
                <span class="font-italic">Lorem ipsum dolor sit amet.</span>
              </span>
              <span class="body-2"> May 1{{ n }}, 2000 </span>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-data-table
              :headers="dataTableHeaders"
              :items="itineraryTimeline"
              item-key="name"
              show-expand
              hide-default-footer
            >
              <template v-slot:item.time="{ item }">
                <span>
                  <v-icon small class="mr-1">mdi-clock-outline</v-icon>
                  <span>{{ item.time }}</span>
                </span>
              </template>
              <template v-slot:item.totalExpenses="{ item }">
                <span>&#8369; {{ item.totalExpenses }}</span>
              </template>
              <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length"></td>
              </template>
            </v-data-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </template>
    </v-expansion-panels>
  </v-card>
</template>

<script>
export default {
  name: "itinerary-post-timeline-card",

  data() {
    return {
      dataTableHeaders: [
        {
          text: "Time",
          align: "start",
          value: "time",
          sortable: true,
        },
        {
          text: "Destination",
          value: "destination",
          sortable: false,
        },
        {
          text: "Total Expenses",
          value: "totalExpenses",
          sortable: true,
        },
        { text: "", value: "data-table-expand" },
      ],
      itineraryTimeline: [
        {
          time: "10:00AM",
          destination: "Destination Name",
          totalExpenses: 40.0,
        },
      ],
      tab: null,
      tabs: [
        {
          text: "Restaurant",
          icon: "mdi-silverware",
        },
        {
          text: "Lodging",
          icon: "mdi-bed",
        },
        {
          text: "Transportation",
          icon: "mdi-train-car",
        },
        {
          text: "Activity",
          icon: "mdi-hiking",
        },
      ],
    };
  },
};
</script>
