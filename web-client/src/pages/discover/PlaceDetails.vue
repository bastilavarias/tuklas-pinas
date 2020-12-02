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
          icon="mdi-plus"
          text="Add your Experience"
          :action="() => (this.isDialogOpen = true)"
        ></custom-tooltip-button>
      </v-list-item-action>
    </v-list-item>
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <span class="subtitle-2 font-weight-regular">Experiences(20)</span>
        </v-col>
      </v-row>
    </v-card-text>
    <discover-page-experience-form-dialog
      :is-open.sync="isDialogOpen"
    ></discover-page-experience-form-dialog>
  </v-card>
</template>

<script>
import CustomTooltipButton from "@/components/custom/TooltipButton";
import commonUtilities from "@/common/utilities";
import DiscoverPageExperienceFormDialog from "@/components/discover-page/ExperienceFormDialog";
export default {
  components: { DiscoverPageExperienceFormDialog, CustomTooltipButton },
  mixins: [commonUtilities],
  data() {
    return {
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
