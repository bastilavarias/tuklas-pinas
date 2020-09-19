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
      <v-btn
        color="secondary"
        class="text-capitalize"
        depressed
        tile
        :to="{ name: 'sign-in' }"
        >Sign In</v-btn
      >
    </v-app-bar>
    <v-row no-gutters>
      <v-col cols="12" sm="2" class="d-none d-sm-block">
        <v-img
          :src="require('@/assets/sign-in/sign-in-image.jpg')"
          cover
          height="100vh"
          position="top"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="10">
        <v-main>
          <v-container>
            <v-card color="transparent" flat>
              <v-card-title>New User?</v-card-title>
              <v-card-subtitle
                >Use the form below to create your account.</v-card-subtitle
              >
              <v-card-text>
                <v-row dense>
                  <v-col cols="12" md="6">
                    <v-text-field
                      filled
                      rounded
                      label="First Name"
                      single-line
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      filled
                      rounded
                      label="Last Name"
                      single-line
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      filled
                      rounded
                      label="Nationality"
                      single-line
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      filled
                      rounded
                      label="E-mail"
                      single-line
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      filled
                      rounded
                      label="Date of Birth"
                      single-line
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      filled
                      rounded
                      label="Gender"
                      single-line
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      type="password"
                      filled
                      rounded
                      label="Password"
                      single-line
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      type="password"
                      filled
                      rounded
                      label="Confirm Password"
                      single-line
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-checkbox
                      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lobortis enim."
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="12">
                    <div class="d-flex justify-space-between align-center">
                      <div class="flex-grow-1"></div>
                      <v-btn color="primary" large class="text-capitalize">
                        Continue
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
                <div class="my-15">
                  <p class="caption">Or, Sign In with Social Accounts</p>
                  <div class="d-flex align-center">
                    <v-btn color="#3B5998" depressed rounded dark class="mr-5">
                      <v-icon class="mr-2">mdi-facebook</v-icon>
                      <span class="text-capitalize">Signup with Facebook</span>
                    </v-btn>
                    <v-btn color="#DB4437" depressed rounded dark class="mr-5">
                      <v-icon class="mr-2">mdi-google</v-icon>
                      <span class="text-capitalize">Signup with Google</span>
                    </v-btn>
                    <v-btn color="#1DA1F2" depressed rounded dark>
                      <v-icon class="mr-2">mdi-twitter</v-icon>
                      <span class="text-capitalize">Signup with Twitter</span>
                    </v-btn>
                  </div>
                </div>
                <p class="caption">
                  Have an account?
                  <span class="primary--text font-weight-bold"
                    >Sign In here</span
                  >
                </p>
              </v-card-text>
            </v-card>
          </v-container>
        </v-main>
      </v-col>
    </v-row>
    <generic-footer></generic-footer>
  </v-app>
</template>
<script>
import GenericHowItWorksSection from "@/components/generic/HowItWorksSection";
import GenericFooter from "@/components/generic/Footer";
export default {
  components: { GenericFooter, GenericHowItWorksSection },
};
</script>
