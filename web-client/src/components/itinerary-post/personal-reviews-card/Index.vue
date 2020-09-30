<template>
  <v-card outlined tile>
    <v-card-title class="font-weight-bold">Personal Reviews</v-card-title>
    <v-tabs v-model="tab" show-arrows icons-and-text center-active>
      <template v-for="(tab, index) in tabs">
        <v-tab :key="index">
          <span class="text-capitalize">{{ tab.text }}</span>
          <v-icon>{{ tab.icon }}</v-icon>
        </v-tab>
      </template>
    </v-tabs>
    <div class="py-3">
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <itinerary-post-personal-reviews-card-restaurants-content></itinerary-post-personal-reviews-card-restaurants-content>
        </v-tab-item>
        <v-tab-item>
          <itinerary-post-personal-reviews-card-lodgings-content></itinerary-post-personal-reviews-card-lodgings-content>
        </v-tab-item>
        <v-tab-item>
          <itinerary-post-personal-reviews-card-transportation-content></itinerary-post-personal-reviews-card-transportation-content>
        </v-tab-item>
        <v-tab-item>
          <itinerary-post-personal-reviews-card-activities-content></itinerary-post-personal-reviews-card-activities-content>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-card>
</template>

<script>
import ItineraryPostPersonalReviewsCardRestaurantsContent from "@/components/itinerary-post/personal-reviews-card/contents/Restaurants";
import ItineraryPostPersonalReviewsCardLodgingsContent from "@/components/itinerary-post/personal-reviews-card/contents/Lodgings";
import ItineraryPostPersonalReviewsCardTransportationContent from "@/components/itinerary-post/personal-reviews-card/contents/Transportation";
import ItineraryPostPersonalReviewsCardActivitiesContent from "@/components/itinerary-post/personal-reviews-card/contents/Activities";
export default {
  name: "itinerary-post-personal-reviews-card",
  components: {
    ItineraryPostPersonalReviewsCardActivitiesContent,
    ItineraryPostPersonalReviewsCardTransportationContent,
    ItineraryPostPersonalReviewsCardLodgingsContent,
    ItineraryPostPersonalReviewsCardRestaurantsContent,
  },
  data() {
    return {
      tab: null,
      tabs: [
        {
          text: "Restaurants",
          icon: "mdi-silverware",
        },
        {
          text: "Lodgings",
          icon: "mdi-bed",
        },
        {
          text: "Transportation",
          icon: "mdi-train-car",
        },
        {
          text: "Activities",
          icon: "mdi-hiking",
        },
        {
          text: "Internet Access",
          icon: "mdi-wifi",
        },
        {
          text: "Money Exchange & Credit/Debit",
          icon: "mdi-cash-multiple",
        },
        {
          text: "Tips",
          icon: "mdi-heart",
        },
        {
          text: "Avoid",
          icon: "mdi-alert",
        },
      ],
    };
  },
};
</script>
