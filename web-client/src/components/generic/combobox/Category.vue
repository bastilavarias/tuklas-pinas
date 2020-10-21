<template>
  <v-combobox
    v-model="categoriesLocal"
    :items="categoriesLocal"
    :search-input.sync="search"
    hide-selected
    hint="Maximum of 5 categories."
    :label="label"
    multiple
    persistent-hint
    small-chips
    :outlined="outlined"
    :single-line="singleLine"
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            "<strong>{{ search }}</strong
            >". Press <kbd>enter</kbd> to create a new one
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-combobox>
</template>

<script>
export default {
  name: "generic-category-combobox",
  props: {
    categories: {
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
      categoriesLocal: this.categories,
      search: null,
    };
  },
  watch: {
    model(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop());
      }
    },
    categories(val) {
      this.categoriesLocal = this.categories;
    },
    categoriesLocal(val) {
      this.$emit("update:categories", val);
    },
  },
};
</script>
