<template>
  <v-dialog width="800" v-model="isOpenLocal">
    <v-card>
      <v-card-title>
        <span> Tell your experience in this place </span>
        <div class="flex-grow-1"></div>
        <v-btn icon @click="isOpenLocal = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-textarea label="Text *" outlined></v-textarea>
          </v-col>
          <v-col cols="12">
            <custom-file-dropzone
              :files.sync="form.files"
              label="Images/Videos *"
            ></custom-file-dropzone>
          </v-col>
          <v-col cols="12">
            <v-row justify="center" align="center">
              <custom-rating :rating="form.rating"></custom-rating>
            </v-row>
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
        <v-btn color="primary">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import CustomFileDropzone from "@/components/custom/FileDropzone";
import CustomRating from "@/components/custom/Rating";

const defaultForm = {
  text: "",
  rating: 0,
  files: [],
};

export default {
  name: "discover-page-experience-form-dialog",
  components: { CustomRating, CustomFileDropzone },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isOpenLocal: false,
      form: Object.assign({}, defaultForm),
      defaultForm,
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
