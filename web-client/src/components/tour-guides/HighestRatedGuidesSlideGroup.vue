<template>
  <div>
    <v-card-title class="display-1 font-weight-bold"
      >Highest Rated Guides</v-card-title
    >
    <v-slide-group v-model="profilePreview" show-arrows center-active>
      <template v-for="n in 12">
        <v-slide-item :key="n" v-slot:default="{ active, toggle }">
          <span @click="toggle">
            <generic-guide-profile-preview
              :class-name="`${n === 12 ? '' : 'mr-5'} mt-3 mb-10`"
            >
            </generic-guide-profile-preview>
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
  </div>
</template>

<script>
import GenericGuideProfilePreview from "@/components/generic/TourGuideProfilePreview";

export default {
  name: "tour-guides-highest-rated-slide-group",

  components: { GenericGuideProfilePreview },

  data() {
    return {
      profilePreview: null,
      multiple: false,
      showArrows: true,
    };
  },
};
</script>
