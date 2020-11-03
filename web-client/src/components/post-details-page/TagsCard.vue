<template>
  <v-card tile outlined>
    <div class="px-4 py-1">
      <span class="subtitle-2 ma-1 d-block">Destinations</span>
      <template v-for="(destination, index) in destinations">
        <v-chip color="primary" :key="index" class="ma-2 text-capitalize" small>
          {{ destination.name }}
        </v-chip>
      </template>
    </div>
    <v-divider></v-divider>
    <div class="px-4 py-1">
      <span class="subtitle-2 ma-1 d-block">Events</span>
      <template v-for="(event, index) in travelEvents">
        <v-chip color="primary" :key="index" class="ma-2 text-capitalize" small>
          {{ event.name }}
        </v-chip>
      </template>
    </div>
    <v-divider></v-divider>
    <div class="px-4 py-1" v-if="categories.length > 1">
      <span class="subtitle-2 ma-1 d-block">Categories</span>
      <template v-for="(category, index) in categories">
        <v-chip color="primary" :key="index" class="ma-2 text-capitalize" small>
          #{{ category.name }}
        </v-chip>
      </template>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "post-details-page-tags-card",
  props: {
    destinations: {
      type: Array,
      required: true,
    },
    travelEvents: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>
