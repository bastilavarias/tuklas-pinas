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
      <template v-for="(preview, index) in draftsPreview">
        <v-list-item :key="index" three-line>
          <v-list-item-content>
            <v-list-item-subtitle
              >last saved
              {{ formatRelativeTime(preview.updatedAt) }}</v-list-item-subtitle
            >
            <v-list-item-title class="font-weight-bold">{{
              preview.title
            }}</v-list-item-title>
            <v-list-item-subtitle>{{ preview.text }}</v-list-item-subtitle>
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
  },

  mixins: [commonUtilities],
};
</script>
