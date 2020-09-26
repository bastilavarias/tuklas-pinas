<template>
  <div>
    <v-tabs v-model="tab" show-arrows icons-and-text center-active>
      <template v-for="(tab, index) in tabs">
        <v-tab :key="index">
          <span class="text-capitalize">{{ tab.text }}</span>
          <v-icon>{{ tab.icon }}</v-icon>
        </v-tab>
      </template>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <itinerary-post-editor-personal-restaurant-review-form></itinerary-post-editor-personal-restaurant-review-form>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import ItineraryPostEditorPersonalRestaurantReviewForm from "@/components/itinerary-post-editor/personal-reviews-field/forms/Restaurant";
export default {
  name: "itinerary-post-editor-personal-reviews-field",
  components: { ItineraryPostEditorPersonalRestaurantReviewForm },
  data() {
    return {
      tab: null,
      tabs: [
        {
          text: "Restaurant",
          icon: "mdi-silverware",
        },
        {
          text: "Lodging",
          icon: "mdi-bed",
        },
        {
          text: "Transportation",
          icon: "mdi-train-car",
        },
        {
          text: "Internet & Mobile Data",
          icon: "mdi-wifi",
        },
        {
          text: "Sights/Activities",
          icon: "mdi-hiking",
        },
        {
          text: "Money Exchange & Credit/Debit",
          icon: "mdi-cash-multiple",
        },
        {
          text: "Favorite/Tips",
          icon: "mdi-heart",
        },
        {
          text: "Things that didn't work",
          icon: "mdi-alert",
        },
      ],
    };
  },
};
</script>
