<template>
  <v-dialog v-model="isOpen" @click:outside="isOpen = false">
    <v-card color="transparent" flat>
      <v-row no-gutters>
        <v-col cols="12" md="9">
          <v-card
            :style="{
              width: '100%',
              height: '80vh',
              position: 'relative',
              backgroundImage:
                'linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url(https://images.pexels.com/photos/2604843/pexels-photo-2604843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
            }"
            class="image-background"
            tile
          >
            <div class="fill-height d-flex justify-center align-center">
              <div :style="{ width: 'auto', height: '100%' }">
                <v-img
                  src="https://images.pexels.com/photos/2604843/pexels-photo-2604843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  width="100%"
                  height="100%"
                  contain
                ></v-img>
              </div>
            </div>
            <v-btn fab color="white" small class="next-image-button">
              <v-icon small color="black">mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn fab color="white" small class="previous-image-button">
              <v-icon small color="black">mdi-chevron-right</v-icon>
            </v-btn>
            <v-btn icon small class="close-button" @click="isOpen = false">
              <v-icon color="white">mdi-close</v-icon>
            </v-btn>
          </v-card>
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
            <div class="px-4 pt-3">
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
            <v-card-title>Travel Story Gallery</v-card-title>
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
export default {
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
.previous-image-button,
.close-button {
  position: absolute;
  z-index: 2;
}

.next-image-button {
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
}

.previous-image-button {
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
}

.close-button {
  top: 2%;
  left: 1%;
  transform: translateY(-1%);
}

.image-background {
  width: 100%;
  height: 80vh;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
}

.next-images-card {
  overflow: auto;
}
</style>
