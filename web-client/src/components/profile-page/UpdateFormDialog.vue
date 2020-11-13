<template>
  <v-dialog v-model="isOpenLocal" width="800">
    <v-card>
      <v-card-title>
        <span>Edit Profile</span>
        <div class="flex-grow-1"></div>
        <v-btn icon @click="isOpenLocal = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <profile-page-display-images-input
          :height="200"
          class-name="mb-15"
          :cover-photo-preview.sync="profile.image.cover"
          :display-image-preview.sync="profile.image.display"
          operation="view"
          :display-image.sync="form.displayImage"
          :cover-photo.sync="form.coverPhoto"
        ></profile-page-display-images-input>
        <v-row dense>
          <v-col cols="12" md="6">
            <v-text-field
              label="First Name *"
              outlined
              v-model="form.firstName"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Last Name *"
              outlined
              v-model="form.lastName"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-autocomplete
              label="Nationality *"
              single-line
              :items="genericNationalities"
              item-text="label"
              item-value="name"
              v-model="form.nationality"
              outlined
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Email *"
              outlined
              v-model="credentials.email"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <custom-date-picker
              label="Date of Birth *"
              outlined
              :date.sync="form.birthDate"
            ></custom-date-picker>
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              label="Sex *"
              outlined
              :items="genericSexes"
              item-text="label"
              item-value="name"
              v-model="form.sex"
            ></v-select>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn
          color="primary"
          :disabled="!isFormValid"
          :loading="isUpdateProfileStart"
          @click="updateProfile"
          >Update</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ProfilePageDisplayImagesInput from "@/components/profile-page/DisplayImagesInput";
import CustomDatePicker from "@/components/custom/DatePicker";
import { UPDATE_PROFILE } from "@/store/types/profile";
import commonValidation from "@/common/validation";
import { SET_AUTHENTICATION_CREDENTIALS } from "@/store/types/authentication";
const defaultUpdateForm = {
  firstName: "",
  lastName: "",
  nationality: "",
  birthDate: "",
  sex: "",
  displayImage: null,
  coverPhoto: null,
};

export default {
  name: "profile-page-update-form-dialog",
  components: { CustomDatePicker, ProfilePageDisplayImagesInput },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isOpenLocal: this.isOpen,
      form: Object.assign({}, defaultUpdateForm),
      defaultUpdateForm,
      isUpdateProfileStart: false,
    };
  },
  mixins: [commonValidation],
  computed: {
    credentials() {
      return this.$store.state.authentication.credentials;
    },
    profile() {
      return this.credentials.profile;
    },
    genericNationalities() {
      return this.$store.state.generic.nationalities;
    },
    genericSexes() {
      return this.$store.state.generic.sexes;
    },
    isFormValid() {
      const { firstName, lastName, nationality, sex } = this.form;
      return firstName && lastName && nationality && sex;
    },
  },
  watch: {
    isOpen(val) {
      this.isOpenLocal = val;
    },
    isOpenLocal(val) {
      this.$emit("update:isOpen", val);
    },
  },
  methods: {
    async updateProfile() {
      this.isUpdateProfileStart = true;
      const payload = {
        profileID: this.profile.id,
        ...this.form,
      };
      const updatedProfile = await this.$store.dispatch(
        UPDATE_PROFILE,
        payload
      );
      this.isUpdateProfileStart = false;
      if (this.validateObject(updatedProfile)) {
        const accountCopy = this.credentials;
        accountCopy.profile = Object.assign({}, updatedProfile);
        this.$store.commit(SET_AUTHENTICATION_CREDENTIALS, accountCopy);
        this.isOpenLocal = false;
      }
    },
  },
  mounted() {
    const { firstName, lastName, nationality, sex, birthDate } = this.profile;
    this.form.firstName = firstName;
    this.form.lastName = lastName;
    this.form.nationality = nationality;
    this.form.sex = sex;
    this.form.birthDate = birthDate;
  },
};
</script>
