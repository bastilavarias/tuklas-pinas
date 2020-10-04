<template>
  <v-list-item two-line>
    <v-list-item-avatar :size="60">
      <v-img
        src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
      ></v-img>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-subtitle class="caption"> an hour ago </v-list-item-subtitle>
      <v-list-item-title>
        <span
          :class="`${
            isRead ? 'font-weight-bold secondary--text' : 'grey--text'
          } `"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, atque.
        </span>
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-action-text>
      <v-icon color="error">mdi-heart</v-icon>
    </v-list-item-action-text>
  </v-list-item>
</template>

<script>
export default {
  name: "generic-notification-list-item",

  props: {
    isRead: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
