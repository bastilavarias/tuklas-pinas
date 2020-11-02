<template>
  <div class="text-center">
    <v-progress-circular
      indeterminate
      color="primary"
      class="mb-3"
    ></v-progress-circular>
    <span class="d-block caption primary--text">Please Wait...</span>
  </div>
</template>

<script>
export default {
  name: "generic-please-wait-progress-circular",
};
</script>
