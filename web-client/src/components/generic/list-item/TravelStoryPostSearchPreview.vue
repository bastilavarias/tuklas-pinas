<template>
  <div>
    <div class="px-4 pt-3">
      <div class="d-flex align-start justify-space-between">
        <div class="mr-2">
          <span class="caption">Sebastian Curtis T. Lavarias - 6 hrs ago</span>
        </div>
        <v-avatar :size="40">
          <v-img
            src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
          ></v-img>
        </v-avatar>
      </div>
    </div>
    <v-list-item three-line>
      <v-list-item-avatar :size="75" tile>
        <v-img
          src="https://images.pexels.com/photos/2604843/pexels-photo-2604843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        ></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-subtitle>
          <v-icon small class="mr-1">mdi-map-marker-outline</v-icon>
          <span class="caption">Destination Name</span>
        </v-list-item-subtitle>
        <v-list-item-title>
          <span class="font-weight-bold d-block">Travel Story Title</span>
          <span
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            aperiam error eum facere illum nisi obcaecati quibusdam, quos saepe
            voluptas.</span
          >
        </v-list-item-title>
        <v-list-item-subtitle>
          <span class="d-flex align-center">
            <span class="mr-3">
              <v-icon small class="mr-1" color="error">mdi-heart</v-icon>
              <span>1k</span>
            </span>
            <span class="mr-3">
              <v-icon small class="mr-1">mdi-comment</v-icon>
              <span>1k</span>
            </span>
            <span>
              <v-icon small class="mr-1">mdi-share</v-icon>
              <span>1k</span>
            </span>
          </span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "generic-travel-story-post-search-preview-list-item",
};
</script>
