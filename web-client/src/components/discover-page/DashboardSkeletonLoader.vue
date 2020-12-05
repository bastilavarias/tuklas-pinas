<template>
  <v-row dense>
    <v-col cols="12">
      <v-skeleton-loader type="list-item-two-line"></v-skeleton-loader>
    </v-col>
    <v-col cols="12"></v-col>
    <v-col cols="12">
      <template v-for="n in 3">
        <v-skeleton-loader
          :key="n"
          type="list-item-avatar, list-item-three-line"
          class="mb-3"
        ></v-skeleton-loader>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "discover-page-dashboard-skeleton-loader",
};
</script>
