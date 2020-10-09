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
          <itinerary-post-page-personal-reviews-card-restaurants-content></itinerary-post-page-personal-reviews-card-restaurants-content>
        </v-tab-item>
        <v-tab-item>
          <itinerary-post-page-personal-reviews-card-lodgings-content></itinerary-post-page-personal-reviews-card-lodgings-content>
        </v-tab-item>
        <v-tab-item>
          <itinerary-post-page-personal-reviews-card-transportation-content></itinerary-post-page-personal-reviews-card-transportation-content>
        </v-tab-item>
        <v-tab-item>
          <itinerary-post-page-personal-reviews-card-activities-content></itinerary-post-page-personal-reviews-card-activities-content>
        </v-tab-item>
        <v-tab-item>
          <itinerary-post-page-personal-reviews-card-internet-access-content></itinerary-post-page-personal-reviews-card-internet-access-content>
        </v-tab-item>
        <v-tab-item>
          <itinerary-post-page-personal-reviews-card-finance-content></itinerary-post-page-personal-reviews-card-finance-content>
        </v-tab-item>
        <v-tab-item>
          <itinerary-post-page-personal-reviews-card-tips-content></itinerary-post-page-personal-reviews-card-tips-content>
        </v-tab-item>
        <v-tab-item>
          <itinerary-post-page-personal-reviews-card-avoid-content></itinerary-post-page-personal-reviews-card-avoid-content>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-card>
</template>

<script>
import ItineraryPostPagePersonalReviewsCardRestaurantsContent from "@/components/itinerary-post-page/personal-reviews-card/contents/Restaurants";
import ItineraryPostPagePersonalReviewsCardLodgingsContent from "@/components/itinerary-post-page/personal-reviews-card/contents/Lodgings";
import ItineraryPostPagePersonalReviewsCardTransportationContent from "@/components/itinerary-post-page/personal-reviews-card/contents/Transportation";
import ItineraryPostPagePersonalReviewsCardActivitiesContent from "@/components/itinerary-post-page/personal-reviews-card/contents/Activities";
import ItineraryPostPagePersonalReviewsCardInternetAccessContent from "@/components/itinerary-post-page/personal-reviews-card/contents/InternetAccess";
import ItineraryPostPagePersonalReviewsCardFinanceContent from "@/components/itinerary-post-page/personal-reviews-card/contents/Finance";
import ItineraryPostPagePersonalReviewsCardTipsContent from "@/components/itinerary-post-page/personal-reviews-card/contents/Tips";
import ItineraryPostPagePersonalReviewsCardAvoidContent from "@/components/itinerary-post-page/personal-reviews-card/contents/Avoid";
export default {
  name: "itinerary-post-page-personal-reviews-card",
  components: {
    ItineraryPostPagePersonalReviewsCardAvoidContent,
    ItineraryPostPagePersonalReviewsCardTipsContent,
    ItineraryPostPagePersonalReviewsCardFinanceContent,
    ItineraryPostPagePersonalReviewsCardInternetAccessContent,
    ItineraryPostPagePersonalReviewsCardActivitiesContent,
    ItineraryPostPagePersonalReviewsCardTransportationContent,
    ItineraryPostPagePersonalReviewsCardLodgingsContent,
    ItineraryPostPagePersonalReviewsCardRestaurantsContent,
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
