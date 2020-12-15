<template>
  <section>
    <v-container>
      <v-card outlined color="transparent" tile>
        <profile-page-display-images-input
          :height="250"
          class-name="mb-15"
          :cover-photo-preview="profile.image.cover"
          :display-image-preview="profile.image.display"
          operation="update"
        ></profile-page-display-images-input>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold title text-capitalize">{{
              formatName(profile.firstName, profile.lastName)
            }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn
              color="secondary"
              outlined
              class="text-capitalize"
              rounded
              @click="isUpdateProfileFormDialogShow = true"
            >
              Update Profile
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-tabs color="primary">
          <template v-for="(tab, index) in tabSelections">
            <v-tab
              :key="index"
              class="text-capitalize"
              :to="{ name: tab.to.name, params: { accountID } }"
              exact
              exact-active-class="primary--text"
              >{{ tab.text }}</v-tab
            >
          </template>
        </v-tabs>
        <profile-page-update-form-dialog
          :is-open.sync="isUpdateProfileFormDialogShow"
        ></profile-page-update-form-dialog>
        <router-view></router-view>
      </v-card>
    </v-container>
  </section>
</template>
<script>
import {
  FETCH_GENERIC_NATIONALITIES,
  FETCH_GENERIC_SEXES,
} from "@/store/types/generic";
import commonUtilities from "@/common/utilities";
import ProfilePageDisplayImagesInput from "@/components/profile-page/DisplayImagesInput";
import ProfilePageUpdateFormDialog from "@/components/profile-page/UpdateFormDialog";
export default {
  components: {
    ProfilePageUpdateFormDialog,
    ProfilePageDisplayImagesInput,
  },

  data() {
    return {
      isUpdateProfileFormDialogShow: false,
      tabSelections: [
        {
          text: "Posts",
          to: {
            name: "profile-general-page",
          },
        },
        {
          text: "Travel History",
          to: {
            name: "profile-travel-history-page",
          },
        },
      ],
    };
  },

  computed: {
    accountID() {
      return parseInt(this.$route.params.accountID) || null;
    },
    credentials() {
      return this.$store.state.authentication.credentials;
    },
    profile() {
      return this.credentials.profile;
    },
  },

  mixins: [commonUtilities],

  async created() {
    if (this.accountID) {
      await this.$store.dispatch(FETCH_GENERIC_NATIONALITIES);
      await this.$store.dispatch(FETCH_GENERIC_SEXES);
      return;
    }
    await this.goBack();
  },
};
</script>
