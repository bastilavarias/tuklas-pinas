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
    :outlined="outlined"
    :single-line="singleLine"
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            "<strong>{{ search }}</strong
            >". Press <kbd>enter</kbd> to add category
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
        #{{ data.item }}
      </v-chip>
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
    categories(val) {
      this.categoriesLocal = val;
    },
    categoriesLocal(val) {
      if (val.length > 5)
        return this.$nextTick(() => this.categoriesLocal.pop());
      this.$emit("update:categories", val);
    },
  },
};
</script>
