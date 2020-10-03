<template>
  <div class="tour-guides-header">
    <carousel
      :items="1"
      :dots="false"
      :nav="false"
      :mouse-drag="false"
      :touch-drag="false"
      :pull-drag="false"
      :free-drag="false"
      autoplay
      :autoplay-timeout="5000"
    >
      <v-img
        :src="require(`@/assets/tour-guides/couple.jpg`)"
        :lazy-src="require(`@/assets/tour-guides/couple.jpg`)"
        height="40rem"
      ></v-img>
      <v-img
        :src="require(`@/assets/tour-guides/mountain.jpg`)"
        :lazy-src="require(`@/assets/tour-guides/mountain.jpg`)"
        height="40rem"
      ></v-img>
      <v-img
        :src="require(`@/assets/tour-guides/compass.jpg`)"
        :lazy-src="require(`@/assets/tour-guides/compass.jpg`)"
        height="40rem"
      ></v-img>
    </carousel>
    <div class="dark-overlay"></div>
    <div class="header-content">
      <v-container class="fill-height">
        <v-row align-content="center">
          <v-col cols="12" md="6">
            <div class="white--text">
              <div>
                <h1 class="display-1 font-weight-bold mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, vel.
                </h1>
                <div class="d-flex align-center">
                  <v-btn color="primary" class="text-capitalize"
                    >Apply Now</v-btn
                  >
                  <div class="mx-5">OR</div>
                  <v-btn
                    color="white"
                    text
                    class="text-capitalize"
                    @click="goToContent"
                    >Search <span class="text-lowercase mx-1"> for </span> Tour
                    Guide</v-btn
                  >
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import Carousel from "vue-owl-carousel";

export default {
  name: "tour-guides-header",
  components: { Carousel },
  methods: {
    goToContent() {
      this.$vuetify.goTo("#tour-guides-content", {});
    },
  },
};
</script>

<style scoped>
.tour-guides-header {
  background-color: black;
  position: relative;
  height: 40rem;
  width: 100%;
}

.header-content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>
