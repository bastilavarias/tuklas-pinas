<template>
  <v-tabs
    v-model="activeTab"
    color="primary"
    background-color="#f2f2f2"
    :class="`${className}`"
  >
    <template v-for="tab in tabSelections">
      <v-tab :key="tab.route" :to="tab.route" exact>
        <span class="text-capitalize secondary--text subtitle-1">
          {{ tab.name }}
        </span>
      </v-tab>
    </template>
  </v-tabs>
</template>

<script>
export default {
  name: "feed-page-posts-type-tabs",

  props: {
    className: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      activeTab: "",
      tabSelections: [
        { name: "relevant", route: "/feed?t=relevant" },
        { name: "new", route: "/feed?t=new" },
        { name: "trending", route: "/feed?t=trending" },
      ],
    };
  },
};
</script>
