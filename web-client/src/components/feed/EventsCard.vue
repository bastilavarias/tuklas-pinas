<template>
  <div>
    <h1 class="title font-weight-bold mb-2">Explore Events</h1>
    <v-row dense>
      <template v-for="n in 4">
        <v-col cols="12" md="6" :key="n">
          <v-card
            flat
            min-height="8rem"
            dark
            class="custom-shadow"
            :style="{ position: 'relative' }"
          >
            <div class="content d-flex align-center justify-center">
              <div class="text-center">
                <span class="d-block mb-1">
                  <v-icon>mdi-hiking</v-icon>
                </span>
                <span class="overline">Hiking</span>
              </div>
            </div>
            <div
              class="background-image"
              :style="{
                backgroundImage: `url(${require('@/assets/feed/event-hiking.jpeg')})`,
              }"
            ></div>
            <div class="dark-overlay"></div>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "feed-events-card",
};
</script>

<style scoped>
.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  z-index: 1;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
}
</style>
