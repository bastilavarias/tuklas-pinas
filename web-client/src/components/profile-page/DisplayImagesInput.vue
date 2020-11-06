<template>
  <div
    class="display-photo"
    :class="className"
    :style="{
      minHeight: `${minHeight}px`,
      height: `${height}px`,
      maxHeight: `${maxHeight}px`,
    }"
  >
    <div class="cover-photo-container grey">
      <v-img
        height="100%"
        width="100%"
        class="cover-photo"
        :src="coverPhotoPreviewLocal"
        position="center"
      ></v-img>
      <div class="cover-photo-button-add" v-if="!shouldHideOperationButton">
        <input
          type="file"
          ref="coverPhotoInput"
          style="display: none"
          accept="image/*"
          @change="setCoverPhoto"
        />
        <v-btn
          color="white"
          small
          :depressed="!coverPhoto"
          @click="$refs.coverPhotoInput.click()"
        >
          <v-icon small class="mr-2"> mdi-camera-plus </v-icon>
          <span class="text-capitalize"
            >{{ coverPhoto ? "Change" : "Add" }} Cover Photo</span
          >
        </v-btn>
      </div>
      <v-btn
        fab
        color="white"
        x-small
        class="cover-photo-button-remove"
        v-if="coverPhoto"
        @click="clearCoverPhoto"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <div class="profile-photo-container">
      <div class="profile-photo-child-container">
        <input
          type="file"
          ref="profilePhotoInput"
          style="display: none"
          accept="image/*"
          @change="setProfilePhoto"
        />
        <v-avatar :size="175" color="grey" class="elevation-5">
          <v-img :src="profilePhotoPreviewLocal" position="center"></v-img>
        </v-avatar>
        <v-btn
          color="white"
          fab
          x-small
          class="profile-photo-button-add"
          @click="$refs.profilePhotoInput.click()"
          v-if="!shouldHideOperationButton"
        >
          <v-icon color="black">mdi-camera-plus</v-icon>
        </v-btn>
        <v-btn
          color="white"
          fab
          x-small
          class="profile-photo-button-remove"
          @click="clearProfilePhoto"
          v-if="profilePhoto"
        >
          <v-icon color="black">mdi-close</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile-page-display-images-input",
  props: {
    className: {
      type: String,
      required: false,
    },
    minHeight: {
      type: Number,
      required: false,
    },
    height: {
      type: Number,
      required: false,
    },
    maxHeight: {
      type: Number,
      required: false,
    },
    coverPhotoPreview: {
      type: String,
      required: true,
    },
    displayImagePreview: {
      type: String,
      required: true,
    },
    operation: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      coverPhoto: null,
      profilePhoto: null,
    };
  },
  computed: {
    coverPhotoPreviewLocal() {
      if (this.coverPhoto) return URL.createObjectURL(this.coverPhoto);
      return this.coverPhotoPreview;
    },
    profilePhotoPreviewLocal() {
      if (this.profilePhoto) return URL.createObjectURL(this.profilePhoto);
      return this.displayImagePreview;
    },
    shouldHideOperationButton() {
      return this.operation === "update";
    },
  },
  methods: {
    setCoverPhoto(element) {
      const photo = element.target.files[0];
      if (photo) this.coverPhoto = photo;
      this.$refs.files = [];
    },
    clearCoverPhoto() {
      this.coverPhoto = null;
      this.$refs.coverPhotoInput.value = "";
    },
    setProfilePhoto(element) {
      const photo = element.target.files[0];
      if (photo) this.profilePhoto = photo;
      this.$refs.files = [];
    },
    clearProfilePhoto() {
      this.profilePhoto = null;
      this.$refs.profilePhotoInput.value = "";
    },
  },
};
</script>

<style scoped>
.display-photo {
  position: relative;
}
.cover-photo-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.cover-photo-button-add {
  position: absolute;
  bottom: 5%;
  right: 2%;
  z-index: 2;
}
.cover-photo-button-remove {
  position: absolute;
  top: 5%;
  right: 2%;
  z-index: 2;
}
.profile-photo-container {
  position: absolute;
  bottom: -15%;
  left: 2%;
}
.profile-photo-child-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.profile-photo-button-add,
.profile-photo-button-remove {
  position: absolute;
  bottom: 5%;
  right: 5%;
}
</style>
