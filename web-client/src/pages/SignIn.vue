<template>
  <v-app>
    <v-app-bar app color="secondary" fixed width="100%" style="z-index: 3">
      <v-app-bar-nav-icon>
        <custom-router-link :to="{ name: 'home-page' }">
          <v-icon large color="white"> mdi-map-marker </v-icon>
        </custom-router-link>
      </v-app-bar-nav-icon>
      <v-spacer> </v-spacer>
      <v-btn
        color="white"
        class="text-capitalize"
        exact
        :to="{ name: 'home-page' }"
        text
        >Home</v-btn
      >
      <v-btn
        color="white"
        class="text-capitalize"
        exact
        :to="{ name: 'signup-page' }"
        text
        >Signup</v-btn
      >
    </v-app-bar>
    <v-main>
      <v-row no-gutters>
        <v-col cols="12" md="4" lg="5" xl="6" class="d-none d-md-block">
          <v-img
            :src="require('@/assets/sign-in-page/sign-in-image.jpg')"
            cover
            height="100vh"
            position="top"
          ></v-img>
        </v-col>
        <v-col cols="12" md="8" lg="7" xl="6">
          <v-main>
            <v-container class="fill-height" fluid>
              <v-row align-content="center" justify="center">
                <v-col cols="12" md="10" lg="8">
                  <div class="text-center mb-10">
                    <v-icon color="primary" :size="65" class="mb-10">
                      mdi-map-marker
                    </v-icon>
                    <h1 class="display-2 font-weight-bold mb-5">
                      Hello, Byahero!
                    </h1>
                    <h2 class="subtitle-1">Sign in to your account.</h2>
                  </div>
                  <div>
                    <v-text-field
                      label="Email"
                      single-line
                      color="primary"
                      filled
                      rounded
                      v-model="form.email"
                      :rules="[formRules.email]"
                      :error="!!signInError.email"
                      :error-messages="signInError.email"
                    ></v-text-field>
                    <custom-password-text-field
                      filled
                      rounded
                      label="Password"
                      single-line
                      :password.sync="form.password"
                      :rules="[formRules.password]"
                      :error="!!signInError.password"
                      :error-messages="signInError.password"
                    ></custom-password-text-field>
                    <p class="caption primary--text mb-9">Forgot Password?</p>
                    <v-btn
                      block
                      color="primary"
                      depressed
                      class="text-capitalize"
                      large
                      rounded
                      @click="signIn"
                      :loading="isSignInStart"
                      :disabled="!isSignInFormValid"
                      >Sign In</v-btn
                    >
                  </div>
                  <p class="text-center caption my-15">
                    Or, Sign In with Socials
                  </p>
                  <div>
                    <v-btn color="#3B5998" depressed dark block class="mb-3">
                      <v-icon class="mr-2">mdi-facebook</v-icon>
                      <span class="text-capitalize">Sign In with Facebook</span>
                    </v-btn>
                    <v-btn color="#DB4437" depressed dark block class="mb-3">
                      <v-icon class="mr-2">mdi-google</v-icon>
                      <span class="text-capitalize">Sign In with Google</span>
                    </v-btn>
                    <v-btn color="#1DA1F2" depressed dark block>
                      <v-icon class="mr-2">mdi-twitter</v-icon>
                      <span class="text-capitalize">Sign In with Twitter</span>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-main>
        </v-col>
      </v-row>
    </v-main>
    <generic-basic-footer></generic-basic-footer>
  </v-app>
</template>

<script>
import commonUtilities from "@/common/utilities";
import GenericBasicFooter from "@/components/generic/footer/Basic";
import CustomPasswordTextField from "@/components/custom/PasswordTextField";
import CustomRouterLink from "@/components/custom/RouterLink";
import { AUTHENTICATION_SIGN_IN } from "@/store/types/authentication";

const defaultSignInForm = {
  email: "",
  password: "",
};

export default {
  components: { CustomRouterLink, CustomPasswordTextField, GenericBasicFooter },

  mixins: [commonUtilities],

  data() {
    return {
      form: Object.assign({}, defaultSignInForm),
      defaultSignInForm,
      formRules: {
        email: (value) => !!value || "Email should not be empty.",
        password: (value) => !!value || "Password should not be empty.",
      },
      isSignInStart: false,
      signInError: {
        email: "",
        password: "",
      },
    };
  },

  computed: {
    isSignInFormValid() {
      const { email, password } = this.form;
      return email && password;
    },
  },

  methods: {
    async signIn() {
      this.isSignInStart = true;
      const { token, error } = await this.$store.dispatch(
        AUTHENTICATION_SIGN_IN,
        this.form
      );
      this.isSignInStart = false;
      if (token) {
        return await this.$router.push({ name: "feed-page" });
      }
      this.signInError = error;
    },
  },
};
</script>
