<template>
  <v-card tile outlined>
    <div class="px-4 py-1">
      <span class="subtitle-2 ma-1 d-block">Events</span>
      <template v-for="n in 5">
        <v-chip :key="n" class="ma-1 text-capitalize"> Event {{ n }} </v-chip>
      </template>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "travel-story-post-tags-card",
};
</script>
