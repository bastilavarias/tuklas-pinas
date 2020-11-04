<template>
  <cool-light-box
    :items="filesLocal"
    :index="indexLocal"
    @close="indexLocal = null"
    :slideshow="false"
    thumbsPosition="bottom"
    slideshowColorBar="#FF7557"
  >
  </cool-light-box>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
  name: "generic-gallery-dialog",
  props: {
    files: {
      type: Array,
      required: true,
    },
    index: {
      type: Number | null,
      required: true,
    },
  },
  components: {
    CoolLightBox,
  },
  data() {
    return {
      indexLocal: this.index,
    };
  },
  computed: {
    filesLocal() {
      return this.files.map((file) => ({
        title: "",
        description: "",
        src: file.url,
        mediaType: file.format === "mp4" ? "video" : "image",
        thumb: file.format === "mp4" ? this.getThumbnail(file.url) : file.url,
      }));
    },
  },
  watch: {
    index(val) {
      this.indexLocal = val;
    },
    indexLocal(val) {
      this.$emit("update:index", val);
    },
  },
  methods: {
    getThumbnail(url) {
      const extensionLessUrl = url.split(".mp4")[0];
      return `${extensionLessUrl}.jpg`;
    },
  },
};
</script>
