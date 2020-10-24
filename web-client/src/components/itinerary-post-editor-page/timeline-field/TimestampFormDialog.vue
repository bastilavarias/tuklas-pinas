<template>
  <v-dialog v-model="isOpenLocal" width="500">
    <v-card>
      <v-card-title>
        <span> Timestamp #1 </span>
        <div class="flex-grow-1"></div>
        <v-btn icon @click="isOpenLocal = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle>Lorem ipsum dolor sit amet.</v-card-subtitle>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <custom-time-picker
              :time.sync="form.time"
              label="Time *"
              outlined
              single-line
            ></custom-time-picker>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              outlined
              label="Destination *"
              single-line
              :items="genericDestinations"
              item-text="name"
              item-value="id"
              v-model="form.destinationID"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" :md="form.transportation ? '8' : '12'">
            <generic-transportation-combobox
              :transport.sync="form.transportation"
              label="Transportation"
              outlined
              single-line
              clearable
            ></generic-transportation-combobox>
          </v-col>
          <v-col cols="12" md="4" v-if="form.transportation">
            <v-text-field outlined single-line label="Fare"></v-text-field>
          </v-col>
          <!--   Make a combobox for this    -->
          <v-col cols="12">
            <generic-interest-combobox
              :interests.sync="form.interests"
              label="Sights/places of interest/activities"
              single-line
              outlined
            ></generic-interest-combobox>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              single-line
              label="Expenses *"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea outlined single-line label="Other Details"></v-textarea>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="secondary">Add</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import GenericTransportationCombobox from "@/components/generic/combobox/Transportation";
import CustomTimePicker from "@/components/custom/TimePicker";
import GenericInterestCombobox from "@/components/generic/combobox/Interests";

const defaultTimestampForm = {
  time: null,
  destinationID: null,
  transportation: "",
  interests: [],
};

export default {
  name: "itinerary-post-editor-page-timeline-timestamp-form-dialog",
  components: {
    GenericInterestCombobox,
    CustomTimePicker,
    GenericTransportationCombobox,
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
      form: Object.assign({}, defaultTimestampForm),
      defaultTimestampForm,
    };
  },
  computed: {
    genericDestinations() {
      return this.$store.state.generic.destinations;
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
};
</script>
