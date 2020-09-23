<template>
  <v-card
    outlined
    tile
    :class="`${hasShadow ? 'custom-shadow' : ''} ${className}`"
  >
    <div class="px-3 pt-3 mb-5">
      <div class="d-flex align-start justify-space-between mb-2">
        <div class="mr-2">
          <div>
            <span class="caption"
              >Sebastian Curtis T. Lavarias - 6 hrs ago</span
            >
          </div>
          <div class="mb-1">
            <span class="title font-weight-bold"
              >Lorem ipsum dolor sit amet.</span
            >
          </div>
          <div class="mb-3">
            <span class="subtitle-2"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores consectetur ea explicabo id ipsam laudantium natus
              recusandae sed suscipit tenetur!</span
            >
          </div>
          <div class="mb-1">
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
        <v-avatar :size="40">
          <v-img
            src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
          ></v-img>
        </v-avatar>
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
    </div>
    <div>
      <v-divider> </v-divider>
      <div class="px-3 py-1 d-flex justify-space-between align-center">
        <span class="caption">Event: Project 81</span>
      </div>
      <v-divider> </v-divider>
      <div class="px-3 py-1 d-flex justify-space-between align-center">
        <span class="caption"
          >Tour Guide: <span class="font-italic"> Tour Guide Name </span></span
        >
        <v-icon small color="primary">mdi-account-cowboy-hat</v-icon>
      </div>
      <v-divider> </v-divider>
      <div class="px-3 py-1 d-flex justify-space-between align-center">
        <span class="caption"
          >Destination:
          <span class="font-italic"> Destination Name </span></span
        >
        <v-icon small color="primary">mdi-map-marker</v-icon>
      </div>
    </div>
    <div>
      <v-divider> </v-divider>
      <v-row no-gutters>
        <v-col cols="4">
          <v-btn block large text tile color="secondary">
            <v-icon class="mr-1">mdi-heart-outline</v-icon>
            <span class="caption font-weight-bold">1k+</span>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn block large text tile color="secondary">
            <v-icon class="mr-1">mdi-comment-outline</v-icon>
            <span class="caption font-weight-bold">1k+</span>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-menu>
            <template v-slot:activator="{ on: menu, attrs }">
              <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                  <v-btn
                    block
                    large
                    text
                    tile
                    color="secondary"
                    v-bind="attrs"
                    v-on="{ ...tooltip, ...menu }"
                    ><v-icon>mdi-dots-vertical</v-icon></v-btn
                  >
                </template>
                <span>More Actions</span>
              </v-tooltip>
            </template>
            <v-card>
              <v-btn block large text tile color="secondary">
                <v-icon class="mr-1">mdi-bookmark-outline</v-icon>
                <span class="caption font-weight-bold">1k+</span>
              </v-btn>
              <v-btn block large text tile color="secondary">
                <v-icon class="mr-1">mdi-share-outline</v-icon>
                <span class="caption font-weight-bold">1k+</span>
              </v-btn>
            </v-card>
          </v-menu>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import Carousel from "vue-owl-carousel";

export default {
  name: "generic-itinerary-post-preview",

  components: { Carousel },

  props: {
    className: {
      type: String,
      required: false,
    },

    hasShadow: {
      type: Boolean,
      required: false,
    },
  },

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
