<template>
  <div>
    <div class="d-flex justify-space-between align-center">
      <span class="subtitle-1">Timestamp</span>
      <div>
        <custom-tooltip-button
          icon="mdi-sort"
          text="Sort"
        ></custom-tooltip-button>
        <custom-tooltip-button
          icon="mdi-plus"
          text="Add New Activity"
          :action="() => (this.isDialogOpen = true)"
        ></custom-tooltip-button>
      </div>
    </div>
    <template v-for="n in 6">
      <itinerary-post-editor-timeline-dialog-activity-list-item
        :key="n"
      ></itinerary-post-editor-timeline-dialog-activity-list-item>
      <v-divider v-if="n !== 6"></v-divider>
    </template>
    <v-dialog width="600" v-model="isDialogOpen">
      <v-card>
        <v-card-title>
          <span>Add Activity 1</span>
          <div class="flex-grow-1"></div>
          <v-btn icon @click="isDialogOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>Lorem ipsum dolor sit amet.</v-card-subtitle>
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <span class="subtitle-1">Time & Location</span>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Time *" single-line outlined></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Location *"
                single-line
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text>
          <v-tabs
            v-model="tab"
            show-arrows
            icons-and-text
            center-active
            fixed-tabs
          >
            <template v-for="(tab, index) in tabs">
              <v-tab :key="index">
                <span class="text-capitalize">{{ tab.text }}</span>
                <v-icon>{{ tab.icon }}</v-icon>
              </v-tab>
            </template>
          </v-tabs>
        </v-card-text>
        <v-card-text>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <itinerary-post-editor-timeline-dialog-activity-list-restaurant-form></itinerary-post-editor-timeline-dialog-activity-list-restaurant-form>
            </v-tab-item>
            <v-tab-item>
              <itinerary-post-editor-timeline-dialog-activity-list-lodging-form></itinerary-post-editor-timeline-dialog-activity-list-lodging-form>
            </v-tab-item>
            <v-tab-item>
              <itinerary-post-editor-timeline-dialog-activity-list-transportation-form></itinerary-post-editor-timeline-dialog-activity-list-transportation-form>
            </v-tab-item>
            <v-tab-item>
              <itinerary-post-editor-timeline-dialog-activity-list-activity-form></itinerary-post-editor-timeline-dialog-activity-list-activity-form>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="secondary" depressed>Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ItineraryPostEditorTimelineDialogActivityListItem from "@/components/itinerary-post-editor/timeline-field/dialog-activity-list/Item";
import CustomTooltipButton from "@/components/custom/TooltipButton";
import ItineraryPostEditorTimelineDialogActivityListRestaurantForm from "@/components/itinerary-post-editor/timeline-field/dialog-activity-list/forms/Restaurant";
import ItineraryPostEditorTimelineDialogActivityListLodgingForm from "@/components/itinerary-post-editor/timeline-field/dialog-activity-list/forms/Lodging";
import ItineraryPostEditorTimelineDialogActivityListTransportationForm from "@/components/itinerary-post-editor/timeline-field/dialog-activity-list/forms/Transportation";
import ItineraryPostEditorTimelineDialogActivityListActivityForm from "@/components/itinerary-post-editor/timeline-field/dialog-activity-list/forms/Activity";
export default {
  name: "itinerary-post-editor-timeline-dialog-activity-list",

  components: {
    ItineraryPostEditorTimelineDialogActivityListActivityForm,
    ItineraryPostEditorTimelineDialogActivityListTransportationForm,
    ItineraryPostEditorTimelineDialogActivityListLodgingForm,
    ItineraryPostEditorTimelineDialogActivityListRestaurantForm,
    CustomTooltipButton,
    ItineraryPostEditorTimelineDialogActivityListItem,
  },

  data() {
    return {
      isDialogOpen: false,
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
