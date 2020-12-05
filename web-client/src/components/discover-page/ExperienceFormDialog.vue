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
            <v-textarea
              label="Text *"
              outlined
              v-model="form.text"
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <custom-file-dropzone
              :files.sync="form.files"
              label="Images/Videos *"
            ></custom-file-dropzone>
          </v-col>
          <v-col cols="12">
            <v-row justify="center" align="center">
              <custom-rating :rating.sync="form.rating"></custom-rating>
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
        <v-btn
          color="primary"
          @click="submitExperience"
          :loading="isSubmitExperienceStart"
          :disabled="!isFormValid"
          >Submit</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import CustomFileDropzone from "@/components/custom/FileDropzone";
import CustomRating from "@/components/custom/Rating";
import { CREATE_DISCOVERY, FETCH_DISCOVERIES } from "@/store/types/discovery";
import commonValidation from "@/common/validation";

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
    experiences: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpenLocal: false,
      form: Object.assign({}, defaultForm),
      defaultForm,
      isSubmitExperienceStart: false,
      experiencesLocal: [],
    };
  },
  computed: {
    isFormValid() {
      const { text, files, rating } = this.form;
      return text && files.length > 0 && rating > 0;
    },
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
    isOpen(val) {
      this.isOpenLocal = val;
    },
    isOpenLocal(val) {
      this.$emit("update:isOpen", val);
    },
    experiences(val) {
      this.experiencesLocal = val;
    },
    experiencesLocal(val) {
      this.$emit("update:experiences", val);
    },
  },
  methods: {
    async submitExperience() {
      this.isSubmitExperienceStart = true;
      const payload = {
        latitude: this.latitude,
        longitude: this.longitude,
        placeName: this.placeName,
        country: this.country,
        ...this.form,
      };
      const submittedExperience = await this.$store.dispatch(
        CREATE_DISCOVERY,
        payload
      );
      this.isSubmitExperienceStart = false;
      const isObjectValid = this.validateObject(submittedExperience);
      if (isObjectValid) {
        this.isOpenLocal = false;
        this.experiencesLocal = [submittedExperience, ...this.experiencesLocal];
        await this.$store.dispatch(FETCH_DISCOVERIES);
        this.form = Object.assign({}, this.defaultForm);
      }
    },
  },
  mixins: [commonValidation],
  created() {
    this.isOpenLocal = this.isOpen;
  },
};
</script>
