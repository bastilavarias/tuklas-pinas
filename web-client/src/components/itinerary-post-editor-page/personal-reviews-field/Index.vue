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
        <itinerary-post-editor-page-personal-restaurant-reviews-form
          :reviews.sync="form.restaurants"
        ></itinerary-post-editor-page-personal-restaurant-reviews-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-lodging-reviews-form
          :reviews.sync="form.lodgings"
        ></itinerary-post-editor-page-personal-lodging-reviews-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-transportation-review-form
          :reviews.sync="form.transportation"
        ></itinerary-post-editor-page-personal-transportation-review-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-activity-reviews-form
          :reviews.sync="form.activities"
        ></itinerary-post-editor-page-personal-activity-reviews-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-internet-access-review-form
          :review.sync="form.internetAccess"
        ></itinerary-post-editor-page-personal-internet-access-review-form>
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
import ItineraryPostEditorPagePersonalTransportationReviewForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/Transportation";
import ItineraryPostEditorPagePersonalInternetAccessReviewForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/InternetAccess";
import ItineraryPostEditorPagePersonalFinanceReviewForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/Finance";
import ItineraryPostEditorPagePersonalTipsForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/Tip";
import ItineraryPostEditorPagePersonalAvoidForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/Avoid";
import {
  FETCH_GENERIC_DESTINATIONS,
  FETCH_GENERIC_TRANSPORTATION,
} from "@/store/types/generic";
import ItineraryPostEditorPagePersonalRestaurantReviewsForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/Restaurant";
import ItineraryPostEditorPagePersonalLodgingReviewsForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/Lodging";
import ItineraryPostEditorPagePersonalActivityReviewsForm from "@/components/itinerary-post-editor-page/personal-reviews-field/forms/Activity";

const defaultPersonalReviewForm = {
  restaurants: [],
  lodgings: [],
  transportation: [],
  activities: [],
  internetAccess: {
    text: "",
    rating: 0,
  },
};

export default {
  name: "itinerary-post-editor-page-personal-reviews-field",
  components: {
    ItineraryPostEditorPagePersonalActivityReviewsForm,
    ItineraryPostEditorPagePersonalLodgingReviewsForm,
    ItineraryPostEditorPagePersonalRestaurantReviewsForm,
    ItineraryPostEditorPagePersonalAvoidForm,
    ItineraryPostEditorPagePersonalTipsForm,
    ItineraryPostEditorPagePersonalFinanceReviewForm,
    ItineraryPostEditorPagePersonalInternetAccessReviewForm,
    ItineraryPostEditorPagePersonalTransportationReviewForm,
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
      form: Object.assign({}, defaultPersonalReviewForm),
    };
  },
  async created() {
    await this.$store.dispatch(FETCH_GENERIC_DESTINATIONS);
    await this.$store.dispatch(FETCH_GENERIC_TRANSPORTATION);
  },
};
</script>
