<template>
  <v-card outlined tile class="custom-shadow">
    <div class="px-3 pt-3">
      <div class="d-flex align-start justify-space-between mb-2">
        <div class="mr-2">
          <span class="caption d-block"
            >Sebastian Curtis T. Lavarias - 6 hrs ago</span
          >
          <span class="title font-weight-bold d-block mb-1"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
            optio.</span
          >
          <span class="subtitle-2 d-block"
            >Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.</span
          >
        </div>
        <v-avatar>
          <v-img
            src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
          ></v-img>
        </v-avatar>
      </div>
      <div class="pt-5">
        <carousel
          :items="1"
          dots
          :nav="false"
          :autoplay="false"
          :mouse-drag="false"
          touch-drag
          pull-drag
          free-drag
          style="position: relative"
        >
          <template v-for="(image, index) in images">
            <v-img
              :key="index"
              height="300"
              :src="image"
              class="d-block mx-auto"
              position="center"
              contain
            ></v-img>
          </template>
          <template slot="prev">
            <v-btn fab color="white" small class="next-image-button">
              <v-icon small color="black">mdi-chevron-left</v-icon>
            </v-btn>
          </template>
          <template slot="next">
            <v-btn fab color="white" small class="previous-image-button">
              <v-icon small color="black">mdi-chevron-right</v-icon>
            </v-btn>
          </template>
        </carousel>
      </div>
    </div>
    <v-divider> </v-divider>
    <div class="px-3 py-2 d-flex">
      <div>
        <span class="caption d-block mb-2">Tags:</span>
        <template v-for="n in 4">
          <v-chip
            label
            color="primary"
            small
            :class="`${n === 1 ? 'mr-1 mb-1' : 'ma-1'} font-weight-bold`"
            :key="n"
            >FOOD</v-chip
          >
        </template>
      </div>
    </div>
    <v-divider> </v-divider>
    <div class="px-3 py-1 d-flex justify-space-between align-center">
      <span class="caption">Destination: Destination Name</span>
      <v-icon small>mdi-map-marker</v-icon>
    </div>
    <v-divider> </v-divider>
    <v-row no-gutters>
      <v-col cols="4">
        <v-btn block large text tile>
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span>(1k+)</span>
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn block large text tile>
          <v-icon class="mr-1">mdi-comment</v-icon>
          <span>(1k+)</span>
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn block large text tile>
          <v-icon class="mr-1">mdi-share</v-icon>
          <span>(1k+)</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Carousel from "vue-owl-carousel";

export default {
  name: "travel-story-post-preview",

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

<style scoped>
.next-image-button,
.previous-image-button {
  position: absolute;
  z-index: 2;
}

.next-image-button {
  top: 40%;
  left: 1%;
}

.previous-image-button {
  top: 40%;
  right: 1%;
}
</style>
