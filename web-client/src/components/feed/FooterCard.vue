<template>
  <v-card outlined id="feed-footer-card">
    <v-card-subtitle>Sticky Footer</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "feed-footer-card",
};
</script>

<style scoped>
#feed-footer-card {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
</style>
