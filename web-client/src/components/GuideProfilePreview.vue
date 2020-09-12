<template>
  <v-card outlined :class="`${className} custom-shadow`">
    <v-list-item three-line>
      <v-list-item-avatar>
        <v-img
          src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
        ></v-img>
      </v-list-item-avatar>
      <v-list-item-content></v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "guide-profile-preview",

  props: {
    className: {
      type: String,
      required: false,
    },
  },
};
</script>
