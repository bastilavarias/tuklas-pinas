<template>
  <v-dialog v-model="isOpenLocal" width="1000">
    <v-card>
      <v-card-title>
        <span>Create Day 1 </span>
        <div class="flex-grow-1"></div>
        <v-btn icon @click="isOpenLocal = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle>Lorem ipsum dolor sit amet.</v-card-subtitle>
      <v-card-text>
        <div class="d-flex justify-space-between align-center">
          <span class="subtitle-1">Timestamps</span>
          <div>
            <custom-tooltip-button
              icon="mdi-sort"
              text="Sort"
            ></custom-tooltip-button>
            <custom-tooltip-button
              icon="mdi-plus"
              text="Add New Timestamp"
              :action="() => (this.isTimestampDialogOpen = true)"
            ></custom-tooltip-button>
          </div>
        </div>
        <v-data-table
          :headers="itineraryTimelineTimestampTableHeaders"
          :items="itineraryTimelineTimestamps"
          hide-default-footer
          :single-expand="singleExpand"
          item-key="time"
          show-expand
        >
          <template v-slot:top> </template>
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
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="secondary">Create</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="isTimestampDialogOpen" width="500">
      <v-card>
        <v-card-title>Timestamp #1</v-card-title>
        <v-card-subtitle>Lorem ipsum dolor sit amet.</v-card-subtitle>
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-text-field outlined single-line label="Time *"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                single-line
                label="Destination *"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="8">
              <v-text-field
                outlined
                single-line
                label="Transportation"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field outlined single-line label="Fare"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                outlined
                single-line
                label="Places of Interests"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                single-line
                label="Expenses *"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                outlined
                single-line
                label="Other Details"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="secondary">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>

<script>
import CustomFileDropzone from "@/components/custom/FileDropzone";
import CustomTooltipButton from "@/components/custom/TooltipButton";
export default {
  name: "itinerary-post-editor-page-timeline-dialog",

  components: {
    CustomTooltipButton,
    CustomFileDropzone,
  },

  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      isOpenLocal: false,
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
        {
          text: "Actions",
          value: "actions",
          sortable: false,
        },
        { text: "", value: "data-table-expand" },
      ],
      itineraryTimelineTimestamps: [
        {
          time: "10:00AM",
          destination: "Destination 1",
          transportation: "Train",
          fare: 500,
          interests: ["Interest 1", "Interest 2"],
          expenses: 500,
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisi et enim dictum dignissim. Proin volutpat risus id efficitur ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum molestie ligula at elit malesuada fermentum. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas a eros a arcu condimentum sollicitudin vitae ut mauris. Ut ut odio non diam varius pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          time: "1:00PM",
          destination: "Destination 2",
          transportation: "Train",
          fare: 500,
          interests: ["Interest 1", "Interest 2"],
          expenses: 500,
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisi et enim dictum dignissim. Proin volutpat risus id efficitur ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum molestie ligula at elit malesuada fermentum. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas a eros a arcu condimentum sollicitudin vitae ut mauris. Ut ut odio non diam varius pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          time: "5:00PM",
          destination: "Destination 3",
          transportation: "Train",
          fare: 500,
          interests: ["Interest 1", "Interest 2"],
          expenses: 500,
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisi et enim dictum dignissim. Proin volutpat risus id efficitur ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum molestie ligula at elit malesuada fermentum. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas a eros a arcu condimentum sollicitudin vitae ut mauris. Ut ut odio non diam varius pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
      singleExpand: true,
      isTimestampDialogOpen: false,
    };
  },

  watch: {
    isOpen(newValue) {
      this.isOpenLocal = newValue;
    },

    isOpenLocal(newValue) {
      this.$emit("update:isOpen", newValue);
    },
  },

  created() {
    this.isOpenLocal = this.isOpen;
  },
};
</script>
