<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" icon :color="color"
        ><v-icon>{{ icon }}</v-icon></v-btn
      >
    </template>
    <span>{{ text }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "custom-tooltip-button",
  props: {
    icon: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
  },
};
</script>
