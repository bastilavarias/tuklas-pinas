<template>
  <v-app>
    <v-app-bar app color="primary" fixed width="100%" style="z-index: 3">
      <v-app-bar-nav-icon>
        <v-icon large color="white" @click="$router.push({ name: 'home' })">
          mdi-map-marker
        </v-icon>
      </v-app-bar-nav-icon>
      <v-spacer> </v-spacer>
      <v-btn color="transparent" depressed class="text-capitalize white--text"
        >Travel Stories</v-btn
      >
      <v-btn color="transparent" depressed class="text-capitalize white--text"
        >Itineraries</v-btn
      >
      <v-btn color="transparent" depressed class="text-capitalize white--text"
        >Hire a Guide</v-btn
      >
      <v-btn color="transparent" depressed class="text-capitalize white--text"
        >FAQs</v-btn
      >
    </v-app-bar>
    <v-row no-gutters>
      <v-col cols="12" md="4" lg="5" xl="6">
        <v-img
          :src="require('@/assets/sign-in/sign-in-image.jpg')"
          cover
          height="100vh"
          position="top"
        ></v-img>
      </v-col>
      <v-col cols="12" md="8" lg="7" xl="6">
        <v-container class="fill-height" fluid>
          <v-row align-content="center" justify="center">
            <v-col cols="12" md="10" lg="8">
              <div class="text-center mb-10">
                <v-icon color="primary" :size="65" class="mb-10">
                  mdi-map-marker
                </v-icon>
                <h1 class="display-2 font-weight-bold mb-5">Hello, Byahero!</h1>
                <h2 class="subtitle-1">Sign in to your account.</h2>
              </div>
              <div>
                <v-text-field
                  outlined
                  label="Email"
                  single-line
                  color="primary"
                  dense
                ></v-text-field>
                <v-text-field
                  outlined
                  label="Password"
                  single-line
                  color="primary"
                  type="password"
                  dense
                ></v-text-field>
              </div>
              <p class="caption primary--text mb-9">Forgot Password?</p>
              <v-btn
                block
                color="primary"
                depressed
                class="text-capitalize mb-15"
                >Sign In</v-btn
              >
              <p class="text-center caption mb-15">Or, Sign In with Socials</p>
              <div>
                <v-btn
                  color="#3B5998"
                  block
                  class="mb-5"
                  depressed
                  dark
                  x-large
                >
                  <v-icon class="mr-2">mdi-facebook</v-icon>
                  <span class="text-capitalize">Sign In with Facebook</span>
                </v-btn>
                <v-btn color="#3cba54" block depressed dark x-large>
                  <v-icon class="mr-2">mdi-google</v-icon>
                  <span class="text-capitalize">Sign In with Google</span>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <generic-footer-partial></generic-footer-partial>
  </v-app>
</template>

<script>
import CommonUtilities from "@/common/utilities";
import GenericFooterPartial from "@/layouts/partials/GenericFooter";

export default {
  components: { GenericFooterPartial },
  mixins: [CommonUtilities],
};
</script>
