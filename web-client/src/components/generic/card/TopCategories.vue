<template>
  <v-card>
    <v-card-title class="font-weight-bold">Top Categories</v-card-title>
    <div class="text-center pb-5" v-if="topCategories.length === 0">
      <span class="caption">No categories available.</span>
    </div>
    <template v-for="(category, index) in topCategories">
      <div :key="index">
        <v-divider v-if="index <= 4"></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              {{ category.name }}
            </v-list-item-title>
            <v-list-item-subtitle class="font-italic"
              >{{ category.uses }} Uses</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </div>
    </template>
  </v-card>
</template>

<script>
export default {
  name: "generic-top-categories-side-card",

  computed: {
    topCategories() {
      return this.$store.state.post.topCategories;
    },
  },
};
</script>
