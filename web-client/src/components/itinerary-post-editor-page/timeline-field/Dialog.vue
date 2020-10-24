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
        <v-row dense>
          <v-col cols="12">
            <custom-date-picker
              :date.sync="date"
              label="Date *"
              outlined
              single-line
            ></custom-date-picker>
          </v-col>
          <v-col cols="12">
            <div class="d-flex justify-space-between align-center">
              <span class="subtitle-1">Timestamps</span>
              <custom-tooltip-button
                icon="mdi-plus"
                text="Add New Timestamp"
                :action="openTimestampFormDialog"
              ></custom-tooltip-button>
            </div>
            <v-data-table
              :headers="timestampTableHeaders"
              :items="sortedTimestamps"
              hide-default-footer
              :single-expand="singleExpand"
              item-key="time"
              show-expand
            >
              <template v-slot:top> </template>
              <template v-slot:item.time="{ item }">
                {{ formatTime(item.time) }}
              </template>
              <template v-slot:item.destination="{ item }">
                {{ getDestinationName(item.destinationID) }}
              </template>
              <template v-slot:item.transportation="{ item }">
                {{ item.transportation }} -<span title="Fare">
                  &#8369; {{ item.fare }}</span
                >
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
                        >You have no other details specified.</span
                      >
                    </span>
                  </div>
                </td>
              </template>
              <template v-slot:item.actions="{ item }">
                <custom-tooltip-button
                  icon="mdi-pencil-outline"
                  text="Update"
                  :action="() => openUpdateTimestampDialog(item)"
                ></custom-tooltip-button>
                <custom-tooltip-button
                  icon="mdi-trash-can-outline"
                  text="Remove"
                  :action="() => openRemoveTimestampDialog(item)"
                ></custom-tooltip-button>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="secondary">Create</v-btn>
      </v-card-actions>
    </v-card>
    <itinerary-post-editor-page-timeline-timestamp-form-dialog
      :is-open.sync="isTimestampFormDialogOpen"
      :timestamps.sync="timestamps"
      :selected-timestamp="selectedTimestamp"
      :operation="timestampFormDialogOperation"
    ></itinerary-post-editor-page-timeline-timestamp-form-dialog>
    <custom-alert-dialog
      :is-open.sync="isCustomAlertDialogOpen"
      type="warning"
      title="Remove Timestamp"
      text="Removing this timestamp is irreversible. Confirm anyway?"
      :action="() => removeTimestampDialog()"
    ></custom-alert-dialog>
  </v-dialog>
</template>

<script>
import CustomFileDropzone from "@/components/custom/FileDropzone";
import CustomTooltipButton from "@/components/custom/TooltipButton";
import ItineraryPostEditorPageTimelineTimestampFormDialog from "@/components/itinerary-post-editor-page/timeline-field/TimestampFormDialog";
import CustomDatePicker from "@/components/custom/DatePicker";
import commonUtilities from "@/common/utilities";
import CustomAlertDialog from "@/components/custom/AlertDialog";

export default {
  name: "itinerary-post-editor-page-timeline-dialog",
  components: {
    CustomAlertDialog,
    CustomDatePicker,
    ItineraryPostEditorPageTimelineTimestampFormDialog,
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
      isOpenLocal: this.isOpen,
      timestampTableHeaders: [
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
      singleExpand: true,
      isTimestampFormDialogOpen: false,
      date: null,
      timestamps: [],
      selectedTimestamp: {},
      timestampFormDialogOperation: "add",
      isCustomAlertDialogOpen: false,
    };
  },
  mixins: [commonUtilities],
  computed: {
    genericDestinations() {
      return this.$store.state.generic.destinations;
    },
    sortedTimestamps() {
      return this.timestamps.sort((flat, next) =>
        flat.time < next.time ? -1 : flat.time > next.time ? 1 : 0
      );
    },
  },
  watch: {
    isOpen(val) {
      this.isOpenLocal = val;
    },
    isOpenLocal(val) {
      this.$emit("update:isOpen", val);
    },
  },
  methods: {
    getDestinationName(destinationID) {
      const foundDestination = this.genericDestinations.find(
        (destination) => destination.id === destinationID
      );
      return foundDestination.name;
    },
    openTimestampFormDialog() {
      this.timestampFormDialogOperation = "add";
      this.selectedTimestamp = {};
      this.isTimestampFormDialogOpen = true;
    },
    openUpdateTimestampDialog(timestamp) {
      this.timestampFormDialogOperation = "update";
      this.selectedTimestamp = timestamp;
      this.isTimestampFormDialogOpen = true;
    },
    openRemoveTimestampDialog(timestamp) {
      this.selectedTimestamp = timestamp;
      this.isCustomAlertDialogOpen = true;
    },
    removeTimestampDialog() {
      this.timestamps = this.timestamps.filter(
        (timestamp) => timestamp.time !== this.selectedTimestamp.time
      );
      this.selectedTimestamp = {};
      this.isCustomAlertDialogOpen = false;
    },
  },
};
</script>
