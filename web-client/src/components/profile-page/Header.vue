<template>
  <v-card outlined>
    <profile-page-display-images-input
      :height="250"
      class-name="mb-15"
    ></profile-page-display-images-input>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold title"
          >Lorem ipsum dolor sit amet.</v-list-item-title
        >
        <v-list-item-subtitle class="body-1">
          <span class="mr-5">
            <span class="font-weight-bold"> 99 </span>
            Followers
          </span>
          <span>
            <span class="font-weight-bold"> 99 </span>
            Following
          </span>
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn color="secondary" outlined class="text-capitalize" rounded>
          Edit Profile
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-tabs color="primary">
      <template v-for="(tab, index) in tabSelections">
        <v-tab
          :key="index"
          class="text-capitalize"
          :to="tab.to"
          exact
          exact-active-class="primary--text"
          >{{ tab.text }}</v-tab
        >
      </template>
    </v-tabs>
  </v-card>
</template>

<script>
import ProfilePageDisplayImagesInput from "@/components/profile-page/DisplayImagesInput";
export default {
  name: "profile-page-header",
  components: { ProfilePageDisplayImagesInput },
  data() {
    return {
      tabSelections: [
        {
          text: "Wall",
          to: { name: "profile-wall", params: { profileID: 1 } },
        },
        {
          text: "Travel Map",
          to: { name: "profile-travel-map", params: { profileID: 1 } },
        },
      ],
    };
  },
};
</script>
