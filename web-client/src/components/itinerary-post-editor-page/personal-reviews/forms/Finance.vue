<template>
  <v-card flat color="transparent">
    <v-card-title>
      <span>Money Exchange & Credit/Debit</span>
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
          <div class="d-flex justify-center">
            <custom-rating :rating="reviewLocal.rating"></custom-rating>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import CustomRating from "@/components/custom/Rating";

export default {
  name: "itinerary-post-editor-page-personal-finance-review-form",
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
