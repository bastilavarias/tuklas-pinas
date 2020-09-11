<template>
  <header id="landing-page">
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
      <template v-for="n in 3">
        <v-img
          :src="require(`@/assets/home/landing-page-image-${n}.jpg`)"
          width="100%"
          height="100vh"
        ></v-img>
      </template>
    </carousel>
    <div class="dark-overlay"></div>
    <div class="landing-page-content">
      <v-container class="fill-height">
        <v-row justify="left" align="center">
          <v-col cols="12">
            <div class="white--text mb-10">
              <h1 class="display-4 font-weight-bold mb-6">Travel,</h1>
              <h1 class="display-4 font-weight-bold mb-6">Discover,</h1>
              <h1 class="display-4 font-weight-bold mb-10">Share</h1>
              <h2 class="title">
                For Travelers, by the travelers. Connect and meet travelers.
              </h2>
            </div>
            <div class="d-flex align-center">
              <v-btn
                color="primary"
                depressed
                x-large
                class="text-capitalize"
                rounded
                >Sign In</v-btn
              >
              <span class="mx-5 white--text">OR</span>
              <v-btn
                color="primary"
                depressed
                x-large
                class="text-capitalize"
                text
                rounded
                >Signup</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </header>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
};
</script>

<style scoped>
#landing-page {
  position: relative;
  min-height: 100vh;
}

.dark-overlay,
.landing-page-content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.dark-overlay {
  background-color: black;
  opacity: 0.6;
  z-index: 1;
}

.landing-page-content {
  z-index: 2;
}
</style>
