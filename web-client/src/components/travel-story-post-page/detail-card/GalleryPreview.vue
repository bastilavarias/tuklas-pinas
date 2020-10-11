<template>
  <v-row no-gutters>
    <v-col cols="6">
      <router-link
        :to="{
          name: 'travel-story-post-gallery-page',
          params: { imageID: 1 },
        }"
      >
        <v-img
          src="https://images.pexels.com/photos/2413238/pexels-photo-2413238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          width="100%"
          height="100%"
        ></v-img>
      </router-link>
    </v-col>
    <v-col cols="6">
      <v-row no-gutters>
        <v-col cols="12">
          <router-link
            :to="{
              name: 'travel-story-post-gallery-page',
              params: { imageID: 1 },
            }"
          >
            <v-img
              src="https://images.pexels.com/photos/2604843/pexels-photo-2604843.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              width="100%"
              height="100%"
            ></v-img>
          </router-link>
        </v-col>
        <v-col cols="12">
          <router-link
            :to="{
              name: 'travel-story-post-gallery-page',
              params: { imageID: 1 },
            }"
          >
            <div :style="{ position: 'relative', height: '100%' }">
              <v-img
                src="https://images.pexels.com/photos/757430/pexels-photo-757430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                width="100%"
                height="100%"
              ></v-img>
              <div class="dark-overlay"></div>
              <div class="more-label d-flex justify-center align-center">
                <span class="white--text display-1">50+</span>
              </div>
            </div>
          </router-link>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "travel-story-post-page-detail-card-gallery-preview",
};
</script>

<style scoped>
.more-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: red;
  z-index: 4;
}
</style>
