<template>
  <v-card-text>
    <div class="text-center" v-if="!review.text">
      <span class="caption font-italic">No reviews.</span>
    </div>
    <div v-if="review.text">
      <div class="py-1">
        {{ review.text }}
      </div>
      <div class="text-center">
        <generic-rating-chip :rating="review.rating"></generic-rating-chip>
      </div>
    </div>
  </v-card-text>
</template>

<script>
import GenericRatingChip from "@/components/generic/chip/Rating";
export default {
  name: "post-details-page-personal-internet-access-review",
  components: { GenericRatingChip },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>
