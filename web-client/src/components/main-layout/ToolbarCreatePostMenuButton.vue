<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on: menu, attrs }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
            depressed
            v-bind="attrs"
            v-on="{ ...tooltip, ...menu }"
            :class="buttonClassName"
            icon
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Create</span>
      </v-tooltip>
    </template>

    <v-card>
      <v-card-title class="font-weight-bold">Create</v-card-title>
      <v-list flat>
        <template v-for="(action, index) in actions">
          <v-list-item
            two-line
            :key="index"
            :to="action.to"
            active-class="primary--text"
          >
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">{{
                action.title
              }}</v-list-item-title>
              <v-list-item-subtitle>{{
                action.description
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: "main-layout-toolbar-create-post-menu-button",

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
          to: {
            name: "travel-story-post-editor-page",
            params: { action: "submit" },
          },
        },
        {
          title: "Itinerary Post",
          description: "Lorem ipsum dolor sit amet.",
          icon: "mdi-book-open",
          to: {
            name: "itinerary-post-editor-page",
            params: { action: "submit" },
          },
        },
      ],
    };
  },
};
</script>
