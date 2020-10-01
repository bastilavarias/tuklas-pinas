<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-row>
          <v-col cols="12">
            <generic-profile-preview-card></generic-profile-preview-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="9">
        <v-row>
          <v-col cols="12">
            <tour-guides-highest-rated-slide-group></tour-guides-highest-rated-slide-group>
          </v-col>
          <v-col cols="12">
            <v-card-title></v-card-title>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GenericProfilePreviewCard from "@/components/generic/ProfilePreviewCard";
import TourGuidesHighestRatedSlideGroup from "@/components/tour-guides/HighestRatedGuidesSlideGroup";
export default {
  components: { TourGuidesHighestRatedSlideGroup, GenericProfilePreviewCard },
};
</script>
