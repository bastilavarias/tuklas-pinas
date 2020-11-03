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
          <post-details-page-personal-reviews-card-activities-content></post-details-page-personal-reviews-card-activities-content>
        </v-tab-item>
        <v-tab-item>
          <post-details-page-personal-reviews-card-internet-access-content></post-details-page-personal-reviews-card-internet-access-content>
        </v-tab-item>
        <v-tab-item>
          <post-details-page-personal-reviews-card-finance-content></post-details-page-personal-reviews-card-finance-content>
        </v-tab-item>
        <v-tab-item>
          <post-details-page-personal-reviews-card-tips-content></post-details-page-personal-reviews-card-tips-content>
        </v-tab-item>
        <v-tab-item>
          <post-details-page-personal-reviews-card-avoid-content></post-details-page-personal-reviews-card-avoid-content>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-card>
</template>

<script>
import PostDetailsPagePersonalReviewsCardTransportationContent from "@/components/post-details-page/personal-reviews-card/contents/Transportation";
import PostDetailsPagePersonalReviewsCardActivitiesContent from "@/components/post-details-page/personal-reviews-card/contents/Activities";
import PostDetailsPagePersonalReviewsCardInternetAccessContent from "@/components/post-details-page/personal-reviews-card/contents/InternetAccess";
import PostDetailsPagePersonalReviewsCardFinanceContent from "@/components/post-details-page/personal-reviews-card/contents/Finance";
import PostDetailsPagePersonalReviewsCardTipsContent from "@/components/post-details-page/personal-reviews-card/contents/Tips";
import PostDetailsPagePersonalReviewsCardAvoidContent from "@/components/post-details-page/personal-reviews-card/contents/Avoid";
import PostDetailsPagePersonalRestaurantReviews from "@/components/post-details-page/personal-reviews-card/contents/Restaurant";
import PostDetailsPagePersonalLodgingReviews from "@/components/post-details-page/personal-reviews-card/contents/Lodging";
import PostDetailsPagePersonalTransportationReviews from "@/components/post-details-page/personal-reviews-card/contents/Transportation";
export default {
  name: "post-details-page-personal-review-card",
  components: {
    PostDetailsPagePersonalTransportationReviews,
    PostDetailsPagePersonalLodgingReviews,
    PostDetailsPagePersonalRestaurantReviews,
    PostDetailsPagePersonalReviewsCardAvoidContent,
    PostDetailsPagePersonalReviewsCardTipsContent,
    PostDetailsPagePersonalReviewsCardFinanceContent,
    PostDetailsPagePersonalReviewsCardInternetAccessContent,
    PostDetailsPagePersonalReviewsCardActivitiesContent,
    PostDetailsPagePersonalReviewsCardTransportationContent,
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
