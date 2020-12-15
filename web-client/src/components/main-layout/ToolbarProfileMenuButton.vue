<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on: menu, attrs }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
            color="transparent"
            depressed
            v-bind="attrs"
            v-on="{ ...tooltip, ...menu }"
            :class="buttonClassName"
          >
            <v-avatar class="mr-2" :size="30">
              <v-img
                :src="profile.image.display"
                :lazy-src="profile.image.display"
              ></v-img>
            </v-avatar>
            <span class="text-capitalize mr-1 text-truncate">{{
              displayFirstName
            }}</span>
            <v-icon small>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <span>Profile</span>
      </v-tooltip>
    </template>
    <v-card>
      <v-list-item two-line>
        <custom-router-link :to="{ name: 'profile-general-page' }">
          <v-list-item-avatar :size="50">
            <v-img
              :src="profile.image.display"
              :lazy-src="profile.image.display"
            ></v-img>
          </v-list-item-avatar>
        </custom-router-link>
        <v-list-item-content>
          <v-list-item-title>
            <custom-router-link
              :to="{
                name: 'profile-general-page',
                params: { accountID: credentials.id },
              }"
            >
              <span class="font-weight-bold secondary--text text-capitalize"
                >{{ displayFirstName }} {{ displayLastName }}.</span
              >
            </custom-router-link>
          </v-list-item-title>
          <v-list-item-subtitle>
            <custom-router-link
              :to="{
                name: 'profile-general-page',
                params: { accountID: credentials.id },
              }"
            >
              <span class="secondary--text">See Profile</span>
            </custom-router-link>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title class="font-weight-bold"
          >Bug Report</v-list-item-title
        >
        <v-list-item-action-text>
          <v-icon color="secondary">mdi-bug</v-icon>
        </v-list-item-action-text>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title class="font-weight-bold">Settings</v-list-item-title>
        <v-list-item-action-text>
          <v-icon color="secondary">mdi-cogs</v-icon>
        </v-list-item-action-text>
      </v-list-item>
      <v-list-item>
        <v-list-item-title
          class="font-weight-bold cursor-pointer"
          @click="signOut"
          >Sign Out</v-list-item-title
        >
        <v-list-item-action-text>
          <v-icon color="secondary">mdi-logout</v-icon>
        </v-list-item-action-text>
      </v-list-item>
    </v-card>
  </v-menu>
</template>

<script>
import CustomRouterLink from "@/components/custom/RouterLink";
import { PURGE_AUTHENTICATION } from "@/store/types/authentication";
export default {
  name: "main-layout-toolbar-profile-menu-button",
  components: { CustomRouterLink },
  props: {
    buttonClassName: {
      type: String,
      required: false,
    },
  },
  computed: {
    credentials() {
      return this.$store.state.authentication.credentials;
    },
    profile() {
      return this.credentials.profile;
    },
    displayFirstName() {
      return this.profile.firstName.split(" ")[0];
    },
    displayLastName() {
      if (this.profile.lastName) return this.profile.lastName.split("")[0];
      return "";
    },
  },
  methods: {
    async signOut() {
      await this.$store.commit(PURGE_AUTHENTICATION);
      await this.$router.push({ name: "sign-in-page" });
    },
  },
};
</script>
