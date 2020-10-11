<template>
  <v-card outlined class="generic-sticky-footer-card">
    <div class="px-4 py-3 text-center">
      <span class="caption"> © 2020 Tuklas Pinas® </span>
    </div>
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
  top: 5rem;
}
</style>
