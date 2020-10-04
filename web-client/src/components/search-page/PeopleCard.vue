<template>
  <v-card outlined>
    <v-card-title class="subtitle-1 font-weight-bold">People</v-card-title>
    <template v-for="n in 3">
      <v-list-item :key="n" two-line>
        <v-list-item-avatar :size="50">
          <v-img :src="require('@/assets/temp/profile-photo.jpg')"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold"
            >Sebastian Lavarias</v-list-item-title
          >
          <v-list-item-subtitle
            >Lives at Manila, Philippines</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="primary">mdi-account-plus-outline</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </template>
    <v-card-actions>
      <v-btn block color="secondary" class="text-capitalize">See All</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "search-page-people-card",
};
</script>
