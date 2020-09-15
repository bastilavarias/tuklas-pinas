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
    <v-main class="grey--background">
      <v-container class="fill-height">
        <v-row justify="center" align-content="center">
          <v-col cols="12" sm="10" md="8" lg="6" xl="4">
            <v-card>
              <v-card-title class="font-weight-bold">
                Create an account for free!
              </v-card-title>
              <v-card-text>
                <v-btn color="#3B5998" block class="mb-5" depressed dark>
                  <v-icon class="mr-2">mdi-facebook</v-icon>
                  <span class="text-capitalize">Continue with Facebook</span>
                </v-btn>
                <v-btn color="#3cba54" block depressed dark>
                  <v-icon class="mr-2">mdi-google</v-icon>
                  <span class="text-capitalize">Continue with Google</span>
                </v-btn>
              </v-card-text>
              <p class="text-center caption my-5">
                Or, use a regular Email instead
              </p>
              <v-card-text>
                <v-text-field
                  outlined
                  label="Email"
                  single-line
                  color="primary"
                  dense
                ></v-text-field>
                <v-btn block color="primary" depressed class="text-capitalize"
                  >Continue with Email
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <generic-how-it-works-section></generic-how-it-works-section>
    <generic-footer-partial></generic-footer-partial>
  </v-app>
</template>
<script>
import GenericFooterPartial from "@/layouts/partials/GenericFooter";
import GenericHowItWorksSection from "@/components/generic/HowItWorksSection";
export default {
  components: { GenericHowItWorksSection, GenericFooterPartial },
};
</script>
