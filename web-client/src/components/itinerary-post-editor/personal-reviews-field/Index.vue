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
      <v-tab-item>
        <itinerary-post-editor-personal-lodging-review-form></itinerary-post-editor-personal-lodging-review-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-personal-transportation-review-form></itinerary-post-editor-personal-transportation-review-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-personal-internet-access-review-form></itinerary-post-editor-personal-internet-access-review-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-personal-activities-review-form></itinerary-post-editor-personal-activities-review-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-personal-finance-review-form></itinerary-post-editor-personal-finance-review-form>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import ItineraryPostEditorPersonalRestaurantReviewForm from "@/components/itinerary-post-editor/personal-reviews-field/forms/Restaurant";
import ItineraryPostEditorPersonalLodgingReviewForm from "@/components/itinerary-post-editor/personal-reviews-field/forms/Lodging";
import ItineraryPostEditorPersonalTransportationReviewForm from "@/components/itinerary-post-editor/personal-reviews-field/forms/Transportation";
import ItineraryPostEditorPersonalInternetAccessReviewForm from "@/components/itinerary-post-editor/personal-reviews-field/forms/InternetAccess";
import ItineraryPostEditorPersonalActivitiesReviewForm from "@/components/itinerary-post-editor/personal-reviews-field/forms/Activities";
import ItineraryPostEditorPersonalFinanceReviewForm from "@/components/itinerary-post-editor/personal-reviews-field/forms/Finance";
export default {
  name: "itinerary-post-editor-personal-reviews-field",
  components: {
    ItineraryPostEditorPersonalFinanceReviewForm,
    ItineraryPostEditorPersonalActivitiesReviewForm,
    ItineraryPostEditorPersonalInternetAccessReviewForm,
    ItineraryPostEditorPersonalTransportationReviewForm,
    ItineraryPostEditorPersonalLodgingReviewForm,
    ItineraryPostEditorPersonalRestaurantReviewForm,
  },
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
          text: "Internet Access",
          icon: "mdi-wifi",
        },
        {
          text: "Activities",
          icon: "mdi-hiking",
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
