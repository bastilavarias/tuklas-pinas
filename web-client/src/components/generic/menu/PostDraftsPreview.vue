<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="secondary"
        v-bind="attrs"
        v-on="on"
        :loading="isLoading"
        depressed
        rounded
        small
        class="text-capitalize"
      >
        Drafts {{ draftsPreview.length }}</v-btn
      >
    </template>
    <v-list>
      <v-list-item
        two-line
        :to="{ name: editorRouteName, params: { mode: 'submit' } }"
      >
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold"
            >Add new Post</v-list-item-title
          >
          <v-list-item-subtitle
            >Lorem ipsum dolor sit amet.</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-icon>
          <v-icon color="secondary">mdi-plus</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <template v-for="(preview, index) in draftsPreview">
        <v-list-item
          :key="index"
          three-line
          :to="{
            name: editorRouteName,
            params: { mode: 'draft', postID: preview.id },
          }"
          exact
        >
          <v-list-item-content>
            <v-list-item-subtitle
              >last update
              {{ formatRelativeTime(preview.updatedAt) }}</v-list-item-subtitle
            >
            <v-list-item-title class="font-weight-bold text-truncate">{{
              preview.title
            }}</v-list-item-title>
            <v-list-item-subtitle class="text-truncate">{{
              preview.text
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="index !== draftsPreview.length - 1"></v-divider>
      </template>
    </v-list>
  </v-menu>
</template>

<script>
import commonUtilities from "@/common/utilities";

export default {
  name: "generic-post-drafts-preview-menu",

  props: {
    draftsPreview: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    editorRouteName: {
      type: String,
      required: true,
    },
  },

  mixins: [commonUtilities],
};
</script>
