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
        <itinerary-post-editor-page-personal-restaurants-review-form></itinerary-post-editor-page-personal-restaurants-review-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-lodgings-review-form></itinerary-post-editor-page-personal-lodgings-review-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-transportation-review-form></itinerary-post-editor-page-personal-transportation-review-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-activities-review-form></itinerary-post-editor-page-personal-activities-review-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-internet-access-review-form></itinerary-post-editor-page-personal-internet-access-review-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-finance-review-form></itinerary-post-editor-page-personal-finance-review-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-tips-form></itinerary-post-editor-page-personal-tips-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-avoid-form></itinerary-post-editor-page-personal-avoid-form>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import ItineraryPostEditorPagePersonalRestaurantsReviewForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/Restaurants";
import ItineraryPostEditorPagePersonalLodgingsReviewForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/Lodgings";
import ItineraryPostEditorPagePersonalTransportationReviewForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/Transportation";
import ItineraryPostEditorPagePersonalActivitiesReviewForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/Activities";
import ItineraryPostEditorPagePersonalInternetAccessReviewForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/InternetAccess";
import ItineraryPostEditorPagePersonalFinanceReviewForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/Finance";
import ItineraryPostEditorPagePersonalTipsForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/Tips";
import ItineraryPostEditorPagePersonalAvoidForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/Avoid";
export default {
  name: "itinerary-post-editor-page-personal-reviews-field",
  components: {
    ItineraryPostEditorPagePersonalAvoidForm,
    ItineraryPostEditorPagePersonalTipsForm,
    ItineraryPostEditorPagePersonalFinanceReviewForm,
    ItineraryPostEditorPagePersonalInternetAccessReviewForm,
    ItineraryPostEditorPagePersonalActivitiesReviewForm,
    ItineraryPostEditorPagePersonalTransportationReviewForm,
    ItineraryPostEditorPagePersonalLodgingsReviewForm,
    ItineraryPostEditorPagePersonalRestaurantsReviewForm,
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
