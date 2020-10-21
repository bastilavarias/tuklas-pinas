<template>
  <v-card color="transparent" flat tile>
    <div
      class="search-field"
      :style="{
        backgroundImage: `url('${require('@/assets/temp/cover-photo.jpeg')}')`,
      }"
    >
      <v-hover v-slot:default="{ hover }">
        <v-card-text class="search-field-child">
          <v-row dense>
            <v-col cols="12">
              <div :class="{ 'white elevation-15': hover }">
                <v-autocomplete
                  single-line
                  label="Search Destination"
                  append-icon="mdi-magnify"
                  prepend-inner-icon="mdi-menu"
                  @click:prepend-inner="goBack"
                  hide-details
                  filled
                  :outlined="!hover"
                  :dark="!hover"
                ></v-autocomplete>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-hover>
    </div>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="title">Place Name</v-list-item-title>
        <v-list-item-subtitle>Place Additional Details</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <custom-tooltip-button
          icon="mdi-upload-multiple"
          text="Upload"
          :action="() => (this.isDialogOpen = true)"
        ></custom-tooltip-button>
      </v-list-item-action>
    </v-list-item>
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <span class="subtitle-1">Images</span>
        </v-col>
        <v-col cols="12">
          <masonry :cols="2" :gutter="5">
            <template v-for="(image, index) in images">
              <v-img
                :key="index"
                width="100%"
                height="auto"
                :src="image"
                class="mb-1"
              ></v-img>
            </template>
          </masonry>
        </v-col>
      </v-row>
    </v-card-text>
    <discover-page-image-uploader-dialog
      :is-open.sync="isDialogOpen"
    ></discover-page-image-uploader-dialog>
  </v-card>
</template>

<script>
import CustomTooltipButton from "@/components/custom/TooltipButton";
import commonUtilities from "@/common/utilities";
import DiscoverPageImageUploaderDialog from "@/components/discover-page/ImageUploaderDialog";
export default {
  components: { DiscoverPageImageUploaderDialog, CustomTooltipButton },
  mixins: [commonUtilities],
  data() {
    return {
      images: [
        "https://images.pexels.com/photos/902288/pexels-photo-902288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2604843/pexels-photo-2604843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1076240/pexels-photo-1076240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/210367/pexels-photo-210367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2475386/pexels-photo-2475386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1364554/pexels-photo-1364554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ],
      isDialogOpen: false,
    };
  },
};
</script>

<style scoped>
.search-field {
  height: 12rem;
  background-size: cover;
  background-position: center;
  position: relative;
}

.search-field-child {
  position: absolute;
  left: 0;
  width: 100%;
}
</style>
