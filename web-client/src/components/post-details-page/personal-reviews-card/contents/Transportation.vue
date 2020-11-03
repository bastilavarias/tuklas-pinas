<template>
  <div>
    <v-card-text class="text-center" v-if="reviews.length === 0">
      <span class="caption font-italic">No reviews.</span>
    </v-card-text>
    <v-expansion-panels flat hover>
      <template v-for="(review, index) in reviews">
        <v-expansion-panel :key="index">
          <v-expansion-panel-header>
            <span
              >{{ index + 1 }}.
              <span class="text-capitalize mr-2">{{ review.type }}</span
              ><generic-rating-chip
                :rating="review.rating"
              ></generic-rating-chip
            ></span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            To {{ review.destination.name }} - {{ review.text }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </template>
    </v-expansion-panels>
  </div>
</template>

<script>
import GenericRatingChip from "@/components/generic/chip/Rating";
export default {
  name: "post-details-page-personal-transportation-reviews",
  components: { GenericRatingChip },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
};
</script>
