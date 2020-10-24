<template>
  <v-combobox
    v-model="interestsLocal"
    :items="interestsLocal"
    :search-input.sync="search"
    hide-selected
    :label="label"
    multiple
    :outlined="outlined"
    :single-line="singleLine"
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            "<strong>{{ search }}</strong
            >". Press <kbd>enter</kbd> to add new one
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    <template v-slot:selection="data">
      <v-chip
        :key="JSON.stringify(data.item)"
        v-bind="data.attrs"
        :input-value="data.selected"
        :disabled="data.disabled"
        small
        color="primary"
        class="text-uppercase"
      >
        {{ data.item }}
      </v-chip>
    </template>
  </v-combobox>
</template>

<script>
export default {
  name: "generic-interest-combobox",
  props: {
    interests: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    outlined: {
      type: Boolean,
      required: false,
    },
    singleLine: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      interestsLocal: this.interests,
      search: null,
    };
  },
  watch: {
    interests(val) {
      this.interestsLocal = this.interests;
    },
    interestsLocal(val) {
      this.$emit("update:categories", val);
    },
  },
};
</script>
