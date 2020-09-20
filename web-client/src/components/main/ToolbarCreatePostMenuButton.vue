<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn depressed v-bind="attrs" v-on="on" :class="buttonClassName" icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="font-weight-bold">Create</v-card-title>
      <template v-for="(action, index) in actions">
        <v-list-item two-line :key="index">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">{{
              action.title
            }}</v-list-item-title>
            <v-list-item-subtitle>{{
              action.description
            }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action-text>
            <v-icon large color="secondary">{{ action.icon }}</v-icon>
          </v-list-item-action-text>
        </v-list-item>
      </template>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: "main-toolbar-create-post-menu-button",

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
          title: "Travel Story Post",
          description: "Lorem ipsum dolor sit amet.",
          icon: "mdi-post",
        },
        {
          title: "Itinerary Post",
          description: "Lorem ipsum dolor sit amet.",
          icon: "mdi-book-open",
        },
      ],
    };
  },
};
</script>
