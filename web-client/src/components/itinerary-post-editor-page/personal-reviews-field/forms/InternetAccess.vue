<template>
  <v-card flat color="transparent">
    <v-card-title>
      <span>Internet Access Review</span>
    </v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <v-textarea
            label="Review"
            outlined
            v-model="reviewLocal.text"
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <custom-rating
            :rating="reviewLocal.rating"
            label="Rating"
          ></custom-rating>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import CustomRating from "@/components/custom/Rating";

export default {
  name: "itinerary-post-editor-page-personal-internet-access-review-form",
  components: { CustomRating },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
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
