<template>
  <v-dialog width="800" v-model="isOpenLocal">
    <v-card>
      <v-card-title>
        <span> Lorem ipsum dolor sit amet. </span>
        <div class="flex-grow-1"></div>
        <v-btn icon @click="isOpenLocal = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <custom-file-dropzone label="Images"></custom-file-dropzone>
          </v-col>
          <v-col cols="12">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
              nihil.
            </div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn
          color="secondary"
          class="text-capitalize"
          text
          @click="isOpenLocal = false"
          >Cancel</v-btn
        >
        <v-btn color="primary">Upload</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import CustomFileDropzone from "@/components/custom/FileDropzone";
export default {
  name: "discover-page-image-uploader-dialog",
  components: { CustomFileDropzone },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isOpenLocal: false,
    };
  },
  watch: {
    isOpen(val) {
      this.isOpenLocal = val;
    },
    isOpenLocal(val) {
      this.$emit("update:isOpen", val);
    },
  },
  created() {
    this.isOpenLocal = this.isOpen;
  },
};
</script>
