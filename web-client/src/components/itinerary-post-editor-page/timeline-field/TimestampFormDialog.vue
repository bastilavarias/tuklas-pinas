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
              :rules="formRule.time"
              :readonly="operation === 'update'"
            ></custom-time-picker>
          </v-col>
          <v-col cols="12">
            <generic-destinations-autocomplete
              :destinationID.sync="form.destinationID"
              outlined
              label="Destination *"
              :rules="formRule.destination"
            ></generic-destinations-autocomplete>
          </v-col>
          <v-col cols="12" :md="form.transportation ? '8' : '12'">
            <generic-transportation-combobox
              :transport.sync="form.transportation"
              label="Transportation *"
              outlined
              clearable
              :rules="formRule.transportation"
            ></generic-transportation-combobox>
          </v-col>
          <v-col cols="12" md="4" v-if="form.transportation">
            <v-text-field
              outlined
              label="Fare *"
              type="number"
              v-model="form.fare"
              min="0.01"
              step="0.01"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <generic-interest-combobox
              :interests.sync="form.interests"
              label="Sights/places of interest/activities *"
              outlined
              :rules="formRule.interests"
            ></generic-interest-combobox>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              label="Expenses *"
              type="number"
              v-model="form.expenses"
              min="0.01"
              step="0.01"
              :rules="formRule.expenses"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              outlined
              label="Other Details"
              v-model="form.otherDetails"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn
          color="secondary"
          @click="addTimestamp"
          :disabled="!isFormValid"
          v-if="operation === 'add'"
          >Add</v-btn
        >
        <v-btn
          color="secondary"
          @click="updateTimestamp"
          :disabled="!isFormValid"
          v-if="operation === 'update'"
          >Update</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import GenericTransportationCombobox from "@/components/generic/combobox/Transportation";
import CustomTimePicker from "@/components/custom/TimePicker";
import GenericInterestCombobox from "@/components/generic/combobox/Interests";
import GenericDestinationsAutocomplete from "@/components/generic/autocomplete/Destinations";
import commonValidation from "@/common/validation";

const defaultTimestampForm = {
  time: null,
  destinationID: null,
  transportation: "",
  interests: [],
  fare: 0,
  expenses: 0,
  otherDetails: "",
};

export default {
  name: "itinerary-post-editor-page-timeline-timestamp-form-dialog",
  components: {
    GenericDestinationsAutocomplete,
    GenericInterestCombobox,
    CustomTimePicker,
    GenericTransportationCombobox,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    timestamps: {
      type: Array,
      required: true,
    },
    selectedTimestamp: {
      type: Object,
      required: true,
    },
    operation: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpenLocal: this.isOpen,
      form: Object.assign({}, defaultTimestampForm),
      defaultTimestampForm,
      formRule: {
        time: [(value) => !!value || "Time is required"],
        destination: [(value) => !!value || "Destination is required"],
        transportation: [(value) => !!value || "Transportation is required"],
        interests: [(value) => value.length > 0 || "Interests is required"],
        expenses: [
          (value) => !!value || "Expenses is required",
          (value) =>
            parseFloat(value) > 0 || "Expenses should greater than zero",
        ],
      },
      timestampsLocal: this.timestamps,
    };
  },
  computed: {
    genericDestinations() {
      return this.$store.state.generic.destinations;
    },
    isFormValid() {
      const {
        time,
        destinationID,
        transportation,
        interests,
        expenses,
      } = this.form;
      return (
        time &&
        destinationID &&
        transportation &&
        interests.length > 0 &&
        expenses &&
        parseFloat(expenses) > 0
      );
    },
  },
  mixins: [commonValidation],
  watch: {
    isOpen(val) {
      this.isOpenLocal = val;
    },
    isOpenLocal(val) {
      this.$emit("update:isOpen", val);
    },
    selectedTimestamp(val) {
      if (this.validateObject(val, "time") && this.operation === "update") {
        this.form = Object.assign({}, val);
      } else {
        this.clearForm();
      }
    },
  },
  methods: {
    addTimestamp() {
      this.timestampsLocal.push(this.form);
      this.$emit("update:timestamps", this.timestampsLocal);
      this.isOpenLocal = false;
    },
    updateTimestamp() {
      this.timestampsLocal = this.timestampsLocal.map((timestamp) => {
        if (timestamp.time === this.selectedTimestamp.time) {
          timestamp = Object.assign({}, this.form);
        }
        return timestamp;
      });
      this.$emit("update:timestamps", this.timestampsLocal);
      this.isOpenLocal = false;
    },
    clearForm() {
      this.form = Object.assign({}, this.defaultTimestampForm);
    },
  },
};
</script>
