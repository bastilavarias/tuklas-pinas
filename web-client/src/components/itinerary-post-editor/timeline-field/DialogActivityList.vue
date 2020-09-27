<template>
  <div>
    <div class="d-flex justify-space-between align-center">
      <span class="subtitle-1">Activities</span>
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
              <v-text-field label="Time *" single-line outlined></v-text-field>
            </v-col>
            <v-col cols="12">
              <span class="subtitle-1">Activity Details</span>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Activity *"
                single-line
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="8">
              <v-text-field
                label="Location *"
                single-line
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Expenses *"
                single-line
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Additional Details"
                single-line
                outlined
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <span class="subtitle-1">Transportation Details</span>
            </v-col>
            <v-col cols="8">
              <v-select
                label="Type of Transportation *"
                single-line
                outlined
              ></v-select>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Fare" single-line outlined></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Additional Details"
                single-line
                outlined
              ></v-textarea>
            </v-col>
          </v-row>
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
import ItineraryPostEditorTimelineDialogActivityListItem from "@/components/itinerary-post-editor/timeline-field/DialogActivityListItem";
import CustomTooltipButton from "@/components/custom/TooltipButton";
export default {
  name: "itinerary-post-editor-timeline-dialog-activity-list",

  components: {
    CustomTooltipButton,
    ItineraryPostEditorTimelineDialogActivityListItem,
  },

  data() {
    return {
      isDialogOpen: false,
    };
  },
};
</script>
