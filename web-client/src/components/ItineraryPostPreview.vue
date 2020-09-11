<template>
  <v-card outlined tile class="px-3 py-3">
    <div class="d-flex align-start justify-space-between mb-1">
      <div class="mr-2">
        <span class="caption d-block"
          >Sebastian Curtis T. Lavarias - 6 hrs ago</span
        >
        <span class="title font-weight-bold"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
          optio.</span
        >
      </div>
      <v-avatar>
        <v-img
          src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
        ></v-img>
      </v-avatar>
    </div>
    <div class="d-flex align-center mb-10">
      <v-rating
        v-model="rating"
        background-color="secondary"
        color="secondary"
        dense
        hover
        :size="18"
        readonly
      ></v-rating>
      <span class="grey--text caption d-block"> ({{ rating }}) </span>
    </div>
    <masonry :cols="3" :gutter="5">
      <template v-for="(image, index) in images">
        <v-img
          :key="index"
          width="100%"
          height="auto"
          :src="image"
          class="mb-1"
        ></v-img>
      </template>
    </masonry>
  </v-card>
</template>

<script>
import Carousel from "vue-owl-carousel";

export default {
  name: "itinerary-post-preview",

  components: { Carousel },

  data() {
    return {
      images: [
        "https://images.pexels.com/photos/902288/pexels-photo-902288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2604843/pexels-photo-2604843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1076240/pexels-photo-1076240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/210367/pexels-photo-210367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2475386/pexels-photo-2475386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1364554/pexels-photo-1364554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ],
      rating: 4,
    };
  },
};
</script>
