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
            <v-checkbox
              v-model="isLocationTwoWay"
              label="Is two way locations?"
              color="secondary"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" :md="isLocationTwoWay ? '6' : '12'">
            <v-text-field
              outlined
              :label="isLocationTwoWay ? 'From Location' : 'Location'"
              single-line
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6" v-if="isLocationTwoWay">
            <v-text-field
              outlined
              label="To Location"
              single-line
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field outlined label="Date" single-line></v-text-field>
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
              label="Type of Transportation"
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
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <itinerary-post-editor-timeline-dialog-activity-list></itinerary-post-editor-timeline-dialog-activity-list>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <custom-file-dropzone
              label="Images or Videos"
            ></custom-file-dropzone>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="primary" depressed>Create</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import CustomFileDropzone from "@/components/custom/FileDropzone";
import ItineraryPostEditorTimelineDialogActivityList from "@/components/itinerary-post-editor/TimelineDialogActivityList";
export default {
  name: "itinerary-post-editor-timeline-dialog",

  components: {
    ItineraryPostEditorTimelineDialogActivityList,
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
      isLocationTwoWay: false,
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
