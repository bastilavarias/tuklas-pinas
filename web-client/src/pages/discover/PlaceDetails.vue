<template>
  <v-card color="transparent" flat tile :style="{ overflow: 'auto' }">
    <v-card-title>
      <custom-tooltip-button
        icon="mdi-view-dashboard"
        text="Back to Dashboard"
        :action="() => backToDashboard()"
      ></custom-tooltip-button>
    </v-card-title>
    <discover-page-dashboard-skeleton-loader
      v-if="isGetPlaceDetailsStart"
    ></discover-page-dashboard-skeleton-loader>
    <v-list-item two-line v-if="!isGetPlaceDetailsStart">
      <v-list-item-content>
        <v-list-item-title class="title text-truncate">{{
          placeName || "Place Name"
        }}</v-list-item-title>
        <v-list-item-subtitle>{{ country || "country" }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <custom-tooltip-button
          icon="mdi-plus"
          text="Add your Experience"
          :action="() => (this.isDialogOpen = true)"
        ></custom-tooltip-button>
      </v-list-item-action>
    </v-list-item>
    <v-card-text v-if="!isGetPlaceDetailsStart">
      <v-row dense>
        <v-col cols="12">
          <span class="subtitle-2 font-weight-regular"
            >Experiences({{ experiences.length || 0 }})</span
          >
        </v-col>
      </v-row>
    </v-card-text>
    <template
      v-for="(experience, index) in experiences"
      v-if="!isGetPlaceDetailsStart"
    >
      <discover-page-experience-list-item
        :key="index"
        :author="experience.author"
        :createdAt="experience.createdAt"
        :text="experience.text"
        :files="experience.files"
        :rating="experience.rating"
        class-name="mb-5"
      ></discover-page-experience-list-item>
      <v-divider v-if="experiences.length - 1 !== index"></v-divider>
    </template>
    <div
      class="text-center"
      v-if="experiences.length === 0 && !isGetPlaceDetailsStart"
    >
      <span class="caption">No posts yet.</span>
    </div>
    <discover-page-experience-form-dialog
      :is-open.sync="isDialogOpen"
      :experiences.sync="experiences"
    ></discover-page-experience-form-dialog>
  </v-card>
</template>

<script>
import CustomTooltipButton from "@/components/custom/TooltipButton";
import commonUtilities from "@/common/utilities";
import DiscoverPageExperienceFormDialog from "@/components/discover-page/ExperienceFormDialog";
import { DISCOVERY_GET_PLACE_DETAILS } from "@/store/types/discovery";
import DiscoverPageDashboardSkeletonLoader from "@/components/discover-page/DashboardSkeletonLoader";
import DiscoverPageExperienceListItem from "@/components/discover-page/ExperienceListItem";
import { latLng } from "leaflet";
export default {
  components: {
    DiscoverPageExperienceListItem,
    DiscoverPageDashboardSkeletonLoader,
    DiscoverPageExperienceFormDialog,
    CustomTooltipButton,
  },
  mixins: [commonUtilities],
  data() {
    return {
      isDialogOpen: false,
      geoLocation: null,
      isGetPlaceDetailsStart: false,
      experiences: [],
    };
  },
  computed: {
    latitude() {
      return this.$route.params.latitude;
    },
    longitude() {
      return this.$route.params.longitude;
    },
    placeName() {
      return this.$route.params.placeName;
    },
    country() {
      return this.$route.params.country;
    },
  },
  watch: {
    async latitude() {
      await this.getPlaceDetails();
    },
  },
  methods: {
    async getPlaceDetails() {
      this.isGetPlaceDetailsStart = true;
      const payload = {
        latitude: this.latitude || 0.0,
        longitude: this.longitude || 0.0,
      };
      const gotDetails = await this.$store.dispatch(
        DISCOVERY_GET_PLACE_DETAILS,
        payload
      );
      this.isGetPlaceDetailsStart = false;
      this.experiences = gotDetails.experiences;
    },
    async backToDashboard() {
      await this.$router.push({ name: "discover-dashboard-page" });
    },
  },
  async created() {
    if (this.latitude && this.longitude) {
      await this.getPlaceDetails();
      return;
    }
    this.goBack();
  },
};
</script>
