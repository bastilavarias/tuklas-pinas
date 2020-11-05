<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" text>
        <span class="text-capitalize mr-1"> {{ sortLocal }} </span>
        <v-icon>mdi-sort</v-icon>
      </v-btn>
    </template>
    <v-list>
      <template v-for="(type, index) in sortTypes">
        <v-list-item :key="index" @click="sortLocal = type.value">
          <v-list-item-title class="text-capitalize">{{
            type.label
          }}</v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "post-details-page-comments-sort-button-menu",

  props: {
    sort: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      sortLocal: this.sort,
      sortTypes: [
        { label: "Relevant Comments", value: "relevant" },
        { label: "New Comments", value: "new" },
      ],
    };
  },

  watch: {
    sort(val) {
      this.sortLocal = val;
    },
    sortLocal(val) {
      this.$emit("update:sort", val);
    },
  },
};
</script>
