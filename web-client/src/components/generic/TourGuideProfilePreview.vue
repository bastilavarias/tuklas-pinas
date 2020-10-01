<template>
  <v-card outlined :class="`${className} custom-shadow`" width="320">
    <v-list-item two-line>
      <v-list-item-avatar :size="75">
        <v-img
          src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
        ></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="primary--text font-weight-bold"
          >Sebastian L.</v-list-item-title
        >
        <v-list-item-subtitle>
          <v-icon class="mr-1" small>mdi-map-marker</v-icon>
          <span>Cavite, Tanza</span>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <span class="d-flex align-center">
            <v-rating
              v-model="rating"
              background-color="secondary"
              color="primary"
              dense
              hover
              :size="18"
              readonly
              class="mr-1"
            ></v-rating>
            <span class="caption">({{ rating }})</span>
          </span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-card-text>
      <div class="mb-5">
        <template v-for="n in 6">
          <v-chip label small class="ma-1 text-uppercase">{{
            `Skill #${n}`
          }}</v-chip>
        </template>
      </div>
      <v-btn small depressed color="primary" class="ma-1">
        <span class="text-capitalize mr-1">View Profile</span>
        <v-icon small>mdi-account</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "generic-tour-guide-profile-preview",

  props: {
    className: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      rating: 4,
    };
  },
};
</script>
