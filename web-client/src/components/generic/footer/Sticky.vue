<template>
  <v-card outlined class="generic-sticky-footer-card">
    <v-card-subtitle>Sticky Footer</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "generic-sticky-footer",
};
</script>

<style scoped>
.generic-sticky-footer-card {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
</style>
