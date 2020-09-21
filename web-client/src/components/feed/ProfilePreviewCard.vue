<template>
  <v-card>
    <div id="display-photo-container">
      <v-img
        id="cover-photo"
        :src="require('@/assets/temp/cover-photo.jpeg')"
        position="center"
        width="100%"
        height="100%"
      ></v-img>
      <v-avatar :size="85" id="profile-photo" class="elevation-5">
        <v-img
          :src="require('@/assets/temp/profile-photo.jpg')"
          position="center"
        ></v-img>
      </v-avatar>
    </div>
    <div class="text-center mt-15 mb-5">
      <h1 class="title font-weight-bold secondary--text">Sebastian Lavarias</h1>
      <span>
        <v-icon color="primary" class="mr-1" small>
          mdi-map-marker-outline
        </v-icon>
        <span class="subtitle-2">Manila, Philippines</span></span
      >
    </div>
    <v-card-text>
      <div class="mb-5">
        <div class="d-flex justify-space-around align-center">
          <div class="text-center">
            <h2 class="subtitle-2 secondary--text">Followers</h2>
            <span class="caption">99</span>
          </div>
          <v-divider vertical></v-divider>
          <div class="text-center">
            <h2 class="subtitle-2 secondary--text">Following</h2>
            <span class="caption">99</span>
          </div>
        </div>
      </div>
      <v-btn color="secondary" text class="text-capitalize" block
        >View Profile</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "feed-profile-preview-card",
};
</script>

<style scoped>
#display-photo-container {
  position: relative;
  width: 100%;
  height: 5rem;
}

#cover-photo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#profile-photo {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, 100%);
}
</style>
