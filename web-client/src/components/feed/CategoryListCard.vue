<template>
  <v-card>
    <v-card-title class="font-weight-bold">Categories</v-card-title>
    <template v-for="n in 10">
      <div :key="n">
        <v-divider v-if="n <= 10"></v-divider>
        <v-list-item>
          <v-list-item-icon>
            <v-icon> mdi-food-apple-outline </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Category {{ n }} </v-list-item-title>
            <v-list-item-subtitle>Lorem ipsum dolor.</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>
    </template>
  </v-card>
</template>

<script>
export default {
  name: "feed-category-list-card",
};
</script>
