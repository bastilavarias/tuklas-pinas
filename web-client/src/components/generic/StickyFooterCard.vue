<template>
  <v-card outlined id="generic-sticky-footer-card">
    <v-card-subtitle>Sticky Footer</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "generic-sticky-footer-card",
};
</script>

<style scoped>
#generic-sticky-footer-card {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
</style>
