<template>
  <v-dialog v-model="isOpenLocal" width="800">
    <v-card>
      <v-card-title>
        <span>Share Post</span>
        <div class="flex-grow-1"></div>
        <v-btn icon @click="isOpenLocal = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-list-item two-line>
        <v-list-item-avatar :size="50">
          <v-img
            src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
            lazy-src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold"
            >Sebastian Lavarias</v-list-item-title
          >
          <v-list-item-subtitle
            >Share travel story or Itinerary post</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-textarea
              rounded
              filled
              label="Add a comment"
              single-line
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-card outlined tile>
              <generic-post-header-card></generic-post-header-card>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="secondary" class="text-capitalize">Share</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import CustomRouterLink from "@/components/custom/RouterLink";
import GenericPostHeaderCard from "@/components/generic/card/PostHeader";
export default {
  name: "generic-post-share-dialog",
  components: { GenericPostHeaderCard, CustomRouterLink },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isOpenLocal: this.isOpen,
    };
  },
  watch: {
    isOpen(val) {
      this.isOpenLocal = val;
    },
    isOpenLocal(val) {
      this.$emit("update:isOpen", val);
    },
  },
};
</script>
