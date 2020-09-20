<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="transparent"
        depressed
        v-bind="attrs"
        v-on="on"
        :class="buttonClassName"
      >
        <v-avatar class="mr-2" :size="30">
          <v-img
            src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
          ></v-img>
        </v-avatar>
        <span class="text-capitalize mr-1">Sebastian</span>
        <v-icon small>mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-list-item two-line>
        <v-list-item-avatar :size="50">
          <v-img
            src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold"
            >Sebastian Lavarias</v-list-item-title
          >
          <v-list-item-subtitle>See your profile</v-list-item-subtitle>
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
      <template v-for="(action, index) in actions">
        <v-list-item :key="index">
          <v-list-item-title class="font-weight-bold">{{
            action.title
          }}</v-list-item-title>
          <v-list-item-action-text>
            <v-icon color="secondary">{{ action.icon }}</v-icon>
          </v-list-item-action-text>
        </v-list-item>
      </template>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: "main-toolbar-profile-menu-button",

  props: {
    buttonClassName: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      actions: [
        {
          title: "Settings",
          icon: "mdi-cog",
        },
        {
          title: "Sign Out",
          icon: "mdi-logout",
        },
      ],
    };
  },
};
</script>
