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
          <post-details-page-personal-restaurant-reviews
            :reviews="review.restaurants"
          ></post-details-page-personal-restaurant-reviews>
        </v-tab-item>
        <v-tab-item>
          <post-details-page-personal-lodging-reviews
            :reviews="review.lodgings"
          ></post-details-page-personal-lodging-reviews>
        </v-tab-item>
        <v-tab-item>
          <post-details-page-personal-transportation-reviews
            :reviews="review.transportation"
          ></post-details-page-personal-transportation-reviews>
        </v-tab-item>
        <v-tab-item>
          <post-details-page-personal-activity-reviews
            :reviews="review.activities"
          ></post-details-page-personal-activity-reviews>
        </v-tab-item>
        <v-tab-item>
          <post-details-page-personal-internet-access-review
            :review="review.internetAccess"
          ></post-details-page-personal-internet-access-review>
        </v-tab-item>
        <v-tab-item>
          <post-details-page-personal-finance-review
            :review="review.finance"
          ></post-details-page-personal-finance-review>
        </v-tab-item>
        <v-tab-item>
          <post-details-page-personal-tip-reviews
            :reviews="review.tips"
          ></post-details-page-personal-tip-reviews>
        </v-tab-item>
        <v-tab-item>
          <post-details-page-personal-avoid-reviews
            :reviews="review.avoids"
          ></post-details-page-personal-avoid-reviews>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-card>
</template>

<script>
import PostDetailsPagePersonalRestaurantReviews from "@/components/post-details-page/personal-reviews-card/contents/Restaurant";
import PostDetailsPagePersonalLodgingReviews from "@/components/post-details-page/personal-reviews-card/contents/Lodging";
import PostDetailsPagePersonalTransportationReviews from "@/components/post-details-page/personal-reviews-card/contents/Transportation";
import PostDetailsPagePersonalActivityReviews from "@/components/post-details-page/personal-reviews-card/contents/Activity";
import PostDetailsPagePersonalInternetAccessReview from "@/components/post-details-page/personal-reviews-card/contents/InternetAccess";
import PostDetailsPagePersonalFinanceReview from "@/components/post-details-page/personal-reviews-card/contents/Finance";
import PostDetailsPagePersonalTipReviews from "@/components/post-details-page/personal-reviews-card/contents/Tip";
import PostDetailsPagePersonalAvoidReviews from "@/components/post-details-page/personal-reviews-card/contents/Avoid";
export default {
  name: "post-details-page-personal-review-card",
  components: {
    PostDetailsPagePersonalAvoidReviews,
    PostDetailsPagePersonalTipReviews,
    PostDetailsPagePersonalFinanceReview,
    PostDetailsPagePersonalInternetAccessReview,
    PostDetailsPagePersonalActivityReviews,
    PostDetailsPagePersonalTransportationReviews,
    PostDetailsPagePersonalLodgingReviews,
    PostDetailsPagePersonalRestaurantReviews,
  },
  props: {
    review: {
      type: Object,
      required: true,
    },
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
