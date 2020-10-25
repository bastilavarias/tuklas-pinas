<template>
  <div>
    <span class="subtitle-1" v-if="label">{{ label }}</span>
    <div class="d-flex align-center">
      <v-rating
        v-model="ratingLocal"
        color="primary"
        background-color="grey darken-1"
        hover
        class="mr-2"
      ></v-rating>
      <span class="grey--text subtitle-2"> ({{ ratingLocal }}) </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "custom-rating",
  props: {
    rating: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      ratingLocal: this.rating,
    };
  },
  watch: {
    rating(val) {
      this.ratingLocal = val;
    },
    ratingLocal(val) {
      this.$emit("update:rating", val);
    },
  },
};
</script>
