<template>
  <div class="py-10 grey-background" id="home-highest-rated-guides-section">
    <v-container>
      <div class="text-center mb-10">
        <h1 class="display-1 mb-1">Highest Rated Guides</h1>
        <div class="custom-divider"></div>
      </div>
      <v-slide-group v-model="profilePreview" show-arrows center-active>
        <template v-for="n in 12">
          <v-slide-item :key="n" v-slot:default="{ active, toggle }">
            <span @click="toggle">
              <generic-tour-guide-profile-preview
                :class-name="`${n === 12 ? '' : 'mr-5'} mt-3 mb-10`"
                width="320"
              >
              </generic-tour-guide-profile-preview>
            </span>
          </v-slide-item>
        </template>
        <template v-slot:prev>
          <v-btn fab small color="secondary">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </template>
        <template v-slot:next>
          <v-btn fab small color="secondary">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </template>
      </v-slide-group>
    </v-container>
  </div>
</template>

<script>
import GenericTourGuideProfilePreview from "@/components/generic/TourGuideProfilePreview";

export default {
  name: "home-page-highest-rated-guides-div",

  components: { GenericTourGuideProfilePreview },

  data() {
    return {
      profilePreview: null,
      multiple: false,
      showArrows: true,
    };
  },
};
</script>
