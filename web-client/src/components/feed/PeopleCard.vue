<template>
  <v-card>
    <v-card-title class="font-weight-bold">People</v-card-title>
    <template v-for="n in 4">
      <v-list-item :key="n">
        <v-list-item-avatar>
          <v-img :src="require('@/assets/temp/profile-photo.jpg')"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold"
            >Sebastian Lavarias</v-list-item-title
          >
          <v-list-item-subtitle>See Profile</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="primary">mdi-account-plus-outline</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </template>
    <v-list-item>
      <v-list-item-avatar>
        <v-img :src="require('@/assets/temp/profile-photo.jpg')"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold"
          >Sebastian Lavarias</v-list-item-title
        >
        <v-list-item-subtitle>See Profile</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn icon>
          <v-icon color="primary">mdi-account-check</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "feed-people-card",
};
</script>
