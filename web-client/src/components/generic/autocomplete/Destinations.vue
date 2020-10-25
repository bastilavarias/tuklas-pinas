<template>
  <v-autocomplete
    :outlined="outlined"
    :label="label"
    :single-line="singleLine"
    :items="genericDestinations"
    item-text="name"
    item-value="id"
    v-model="destinationIDLocal"
    :multiple="multiple"
    :rules="rules"
  ></v-autocomplete>
</template>

<script>
export default {
  name: "generic-destinations-autocomplete",
  props: {
    destinationID: {
      required: true,
    },
    outlined: {
      type: Boolean,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    singleLine: {
      type: Boolean,
      required: false,
    },
    multiple: {
      type: Boolean,
      required: false,
    },
    rules: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      destinationIDLocal: null,
    };
  },
  computed: {
    genericDestinations() {
      return this.$store.state.generic.destinations;
    },
  },
  watch: {
    destinationID(val) {
      this.destinationIDLocal = val;
    },
    destinationIDLocal(val) {
      this.$emit("update:destinationID", val);
    },
  },
};
</script>
