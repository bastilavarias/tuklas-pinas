<template>
  <v-menu
    ref="menu"
    v-model="menu2"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="timeLocal"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :value="formatTime(timeLocal)"
        :label="label"
        :filled="filled"
        :single-line="singleLine"
        :rounded="rounded"
        :outlined="outlined"
        readonly
        v-bind="attrs"
        v-on="on"
        :rules="rules"
      ></v-text-field>
    </template>
    <v-time-picker
      v-if="menu2"
      v-model="timeLocal"
      full-width
      @click:minute="$refs.menu.save(timeLocal)"
    ></v-time-picker>
  </v-menu>
</template>

<script>
import commonUtilities from "@/common/utilities";

export default {
  name: "custom-time-picker",
  props: {
    time: {
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    rounded: {
      type: Boolean,
      required: false,
    },
    filled: {
      type: Boolean,
      required: false,
    },
    singleLine: {
      type: Boolean,
      required: false,
    },
    outlined: {
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
      timeLocal: this.time,
      menu2: false,
    };
  },
  mixins: [commonUtilities],
  watch: {
    time(val) {
      this.timeLocal = val;
    },
    timeLocal(val) {
      this.$emit("update:time", val);
    },
  },
};
</script>
