<template>
  <section
    class="py-10 grey--background"
    id="home-highest-rated-guides-section"
  >
    <v-container>
      <div class="text-center mb-10">
        <h1 class="display-1 mb-1">Highest Rated Guides</h1>
        <div class="custom-divider"></div>
      </div>
      <carousel :items="4" :dots="false" :nav="false" :autoplay="false">
        <template v-for="n in 12">
          <guide-profile-preview :key="n" class-name="ma-3">
          </guide-profile-preview>
        </template>
        <template slot="prev">
          <v-btn> </v-btn>
        </template>
        <template slot="next"><span class="next">next</span></template>
      </carousel>
    </v-container>
  </section>
</template>

<script>
import Carousel from "vue-owl-carousel";
import GuideProfilePreview from "@/components/GuideProfilePreview";

export default {
  name: "home-highest-rated-guides-section",

  components: { GuideProfilePreview, Carousel },
};
</script>
