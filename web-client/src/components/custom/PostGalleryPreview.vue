<template>
  <div>
    <carousel
      v-if="type === 'travel-story'"
      :items="1"
      :dots="false"
      :nav="false"
      :autoplay="false"
      :mouse-drag="false"
      touch-drag
      pull-drag
      free-drag
      style="position: relative"
    >
      <template v-for="(file, index) in files">
        <custom-video-player
          :url="file.url"
          v-if="file.format === 'mp4'"
          @click="galleryIndex = 0"
        ></custom-video-player>
        <v-img
          :key="index"
          height="300"
          :src="file.url"
          :lazy-src="file.url"
          class="d-block mx-auto"
          position="center"
          cover
          @click="galleryIndex = 0"
          v-else
        ></v-img>
      </template>
      <template slot="prev">
        <v-btn fab color="white" small class="next-image-button">
          <v-icon small color="black">mdi-chevron-left</v-icon>
        </v-btn>
      </template>
      <template slot="next" v-if="files.length > 1">
        <v-btn fab color="white" small class="previous-image-button">
          <v-icon small color="black">mdi-chevron-right</v-icon>
        </v-btn>
      </template>
    </carousel>
    <masonry
      v-if="type === 'itinerary' && files.length > 1"
      :cols="2"
      :gutter="0"
    >
      <template v-for="(file, index) in filesPreview">
        <custom-video-player
          v-if="file.format === 'mp4'"
          :url="file.url"
          @click="galleryIndex = index"
        ></custom-video-player>
        <v-img
          :key="index"
          width="100%"
          height="auto"
          :src="file.url"
          :laz-src="file.url"
          @click="galleryIndex = index"
          v-else
        ></v-img>
      </template>
      <div class="masonry-more-label" v-if="remainingFilesCount > 0">
        <v-overlay :value="true" :absolute="true">
          <h1 class="display-1 cursor-pointer" @click="galleryIndex = 4">
            {{ remainingFilesCount }}+
          </h1>
        </v-overlay>
        <v-img
          :src="files[4].url"
          :lazy-src="files[4].url"
          width="100%"
          height="auto"
        ></v-img>
      </div>
    </masonry>
    <v-img
      v-if="type === 'itinerary' && files.length === 1"
      :src="files[0].url"
      :lazy-src="files[0].url"
      width="100%"
      height="auto"
      @click="galleryIndex = 0"
    ></v-img>
    <generic-gallery-dialog
      :index.sync="galleryIndex"
      :files="files"
    ></generic-gallery-dialog>
  </div>
</template>

<script>
import CustomVideoPlayer from "@/components/custom/VideoPlayer";
import Carousel from "vue-owl-carousel";
import GenericGalleryDialog from "@/components/generic/dialog/Gallery";
export default {
  name: "custom-post-gallery-preview",
  components: { GenericGalleryDialog, CustomVideoPlayer, Carousel },
  props: {
    type: {
      type: String,
      required: true,
    },

    files: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      galleryIndex: null,
    };
  },

  computed: {
    filesPreview() {
      return this.files.slice(0, 4);
    },
    remainingFilesCount() {
      return this.files.slice(5).length;
    },
  },
};
</script>

<style scoped>
.next-image-button,
.previous-image-button {
  position: absolute;
  z-index: 2;
}

.next-image-button {
  top: 40%;
  left: 1%;
}

.previous-image-button {
  top: 40%;
  right: 1%;
}

.masonry-more-label {
  position: relative;
}
</style>
