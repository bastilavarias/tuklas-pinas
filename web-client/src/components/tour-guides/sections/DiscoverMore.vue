<template>
  <div>
    <div class="mb-10">
      <h1 class="display-1 font-weight-bold">Discover More</h1>
      <div class="custom-divider"></div>
    </div>
    <v-row dense>
      <template v-for="n in 6">
        <v-col :key="n" cols="12" md="4">
          <generic-tour-guide-profile-preview
            width="100%"
          ></generic-tour-guide-profile-preview>
        </v-col>
      </template>
    </v-row>
    <div class="d-flex justify-space-between align-center my-5">
      <div class="flex-grow-1"></div>
      <v-btn color="secondary" class="text-capitalize">See More</v-btn>
    </div>
  </div>
</template>

<script>
import GenericTourGuideProfilePreview from "@/components/generic/TourGuideProfilePreview";
export default {
  name: "tour-guides-discover-more-section",
  components: { GenericTourGuideProfilePreview },
};
</script>
