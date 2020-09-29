<template>
  <v-card :class="`${className}`" flat color="transparent">
    <div class="pt-3">
      <div class="d-flex align-start justify-space-between mb-2">
        <div class="mr-2">
          <div>
            <span class="caption"
              >Sebastian Curtis T. Lavarias - 6 hrs ago</span
            >
          </div>
          <div class="mb-3">
            <span class="subtitle-2 text-justify"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              obcaecati qui temporibus. Distinctio, eveniet illum non obcaecati
              quisquam repellendus ut.</span
            >
          </div>
        </div>
        <v-avatar :size="40">
          <v-img
            src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
          ></v-img>
        </v-avatar>
      </div>
    </div>
    <v-card-actions>
      <v-btn depressed text>
        <v-icon class="mr-1">mdi-heart-outline</v-icon>
        <span class="caption font-weight-bold">1K+</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "generic-comment-reply-media",

  props: {
    className: {
      type: String,
      required: false,
    },
  },
};
</script>
