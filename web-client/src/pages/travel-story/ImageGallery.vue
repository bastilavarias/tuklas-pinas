<template>
  <v-dialog v-model="isOpen" @click:outside="isOpen = false">
    <v-card color="transparent" flat>
      <v-row no-gutters>
        <v-col cols="12" md="9">
          <carousel
            :items="1"
            :nav="false"
            :dots="false"
            :autoplay="false"
            :mouse-drag="false"
            touch-drag
            pull-drag
            free-drag
            :style="{ height: '80vh', position: 'relative' }"
          >
            <template v-for="(image, index) in images">
              <div
                :style="{ backgroundImage: `url(${image})` }"
                class="image-background d-flex align-content-center justify-center"
                :key="index"
              >
                <v-img :src="image" width="500" height="auto" contain></v-img>
              </div>
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
        </v-col>
        <v-col cols="12" md="3">
          <v-card
            :style="{
              width: '100%',
              height: '80vh',
            }"
            class="next-images-card"
            tile
          >
            <div class="px-3 pt-3">
              <div class="d-flex align-start justify-space-between mb-2">
                <div class="mr-2">
                  <div>
                    <span class="caption"
                      >Sebastian Curtis T. Lavarias - 6 hrs ago</span
                    >
                  </div>
                </div>
                <v-avatar :size="40">
                  <v-img
                    src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
                  ></v-img>
                </v-avatar>
              </div>
            </div>
            <v-card-title>Images</v-card-title>
            <v-card-subtitle>Opened 1 out of 5 images</v-card-subtitle>
            <v-card-text>
              <masonry :cols="2" :gutter="5">
                <template v-for="(image, index) in images">
                  <div :key="index" :style="{ position: 'relative' }">
                    <v-img
                      width="100%"
                      height="auto"
                      :src="image"
                      class="mb-1"
                    ></v-img>
                  </div>
                </template>
              </masonry>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import Carousel from "vue-owl-carousel";

export default {
  components: { Carousel },

  data() {
    return {
      isOpen: false,
      images: [
        "https://images.pexels.com/photos/902288/pexels-photo-902288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2604843/pexels-photo-2604843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1076240/pexels-photo-1076240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/210367/pexels-photo-210367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2475386/pexels-photo-2475386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1364554/pexels-photo-1364554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ],
    };
  },

  watch: {
    isOpen(val) {
      if (!val) return this.$router.go(-1);
    },
  },

  created() {
    this.isOpen = true;
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
  top: 50%;
  left: 3%;
  transform: translateY(-50%);
}

.previous-image-button {
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
}

.image-background {
  width: 100%;
  height: 80vh;
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.85);
  background-blend-mode: darken;
  position: relative;
}

.next-images-card {
  overflow: auto;
}
</style>
