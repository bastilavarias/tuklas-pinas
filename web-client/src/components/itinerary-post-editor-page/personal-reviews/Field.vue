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
          :reviews.sync="reviewLocal.restaurants"
        ></itinerary-post-editor-page-personal-restaurant-reviews-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-lodging-reviews-form
          :reviews.sync="reviewLocal.lodgings"
        ></itinerary-post-editor-page-personal-lodging-reviews-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-transportation-review-form
          :reviews.sync="reviewLocal.transportation"
        ></itinerary-post-editor-page-personal-transportation-review-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-activity-reviews-form
          :reviews.sync="reviewLocal.activities"
        ></itinerary-post-editor-page-personal-activity-reviews-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-internet-access-review-form
          :review.sync="reviewLocal.internetAccess"
        ></itinerary-post-editor-page-personal-internet-access-review-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-finance-review-form
          :review.sync="reviewLocal.finance"
        ></itinerary-post-editor-page-personal-finance-review-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-tips-form
          :tips.sync="reviewLocal.tips"
        ></itinerary-post-editor-page-personal-tips-form>
      </v-tab-item>
      <v-tab-item>
        <itinerary-post-editor-page-personal-avoids-form
          :avoids.sync="reviewLocal.avoids"
        ></itinerary-post-editor-page-personal-avoids-form>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import ItineraryPostEditorPagePersonalTransportationReviewForm from "@/components/itinerary-post-editor-page/personal-reviews/forms/Transportation";
import ItineraryPostEditorPagePersonalInternetAccessReviewForm from "@/components/itinerary-post-editor-page/personal-reviews/forms/InternetAccess";
import ItineraryPostEditorPagePersonalFinanceReviewForm from "@/components/itinerary-post-editor-page/personal-reviews/forms/Finance";
import ItineraryPostEditorPagePersonalRestaurantReviewsForm from "@/components/itinerary-post-editor-page/personal-reviews/forms/Restaurant";
import ItineraryPostEditorPagePersonalLodgingReviewsForm from "@/components/itinerary-post-editor-page/personal-reviews/forms/Lodging";
import ItineraryPostEditorPagePersonalActivityReviewsForm from "@/components/itinerary-post-editor-page/personal-reviews/forms/Activity";
import ItineraryPostEditorPagePersonalTipsForm from "@/components/itinerary-post-editor-page/personal-reviews/forms/Tip";
import ItineraryPostEditorPagePersonalAvoidsForm from "@/components/itinerary-post-editor-page/personal-reviews/forms/Avoid";

export default {
  name: "itinerary-post-editor-page-personal-reviews-field",
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
  components: {
    ItineraryPostEditorPagePersonalAvoidsForm,
    ItineraryPostEditorPagePersonalTipsForm,
    ItineraryPostEditorPagePersonalActivityReviewsForm,
    ItineraryPostEditorPagePersonalLodgingReviewsForm,
    ItineraryPostEditorPagePersonalRestaurantReviewsForm,
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
      reviewLocal: this.review,
    };
  },
  watch: {
    review(val) {
      this.reviewLocal = val;
    },
    reviewLocal(val) {
      this.$emit("update:review", val);
    },
  },
};
</script>
