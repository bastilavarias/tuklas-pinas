<template>
  <v-card>
    <div class="display-photo-container">
      <v-img
        class="cover-photo"
        :src="profile.image.cover"
        :lazy-src="profile.image.cover"
        position="center"
        width="100%"
        height="100%"
      ></v-img>
      <v-avatar :size="85" class="profile-photo elevation-5">
        <v-img
          :src="profile.image.display"
          :lazy-src="profile.image.display"
          position="center"
        ></v-img>
      </v-avatar>
    </div>
    <div class="text-center mt-15 mb-5">
      <h1 class="title font-weight-bold secondary--text text-capitalize">
        {{ displayName }}
      </h1>
      <span class="subtitle-2 text-capitalize">{{ profile.nationality }}</span>
    </div>
    <v-card-text>
      <!--      <div class="mb-5">-->
      <!--        <div class="d-flex justify-space-around align-center">-->
      <!--          <div class="text-center">-->
      <!--            <h2 class="subtitle-2 secondary&#45;&#45;text">Followers</h2>-->
      <!--            <span class="caption">99</span>-->
      <!--          </div>-->
      <!--          <v-divider vertical></v-divider>-->
      <!--          <div class="text-center">-->
      <!--            <h2 class="subtitle-2 secondary&#45;&#45;text">Following</h2>-->
      <!--            <span class="caption">99</span>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      -->
      <v-btn
        color="secondary"
        text
        class="text-capitalize"
        block
        :to="{
          name: 'profile-general-page',
          params: { accountID: this.credentials.id },
        }"
        >View Profile</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "generic-mini-profile-side-card",
  computed: {
    credentials() {
      return this.$store.state.authentication.credentials;
    },
    profile() {
      return this.credentials.profile;
    },
    displayName() {
      const { firstName, lastName } = this.profile;
      const name = `${firstName} ${lastName}`;
      if (name.length <= 18) return name;
      return `${name.slice(0, 15)}...`;
    },
  },
};
</script>

<style scoped>
.display-photo-container {
  position: relative;
  width: 100%;
  height: 5rem;
}

.cover-photo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.profile-photo {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, 100%);
}
</style>
