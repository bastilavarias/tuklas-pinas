<template>
  <v-card color="transparent" flat tile>
    <v-card-title>
      <custom-tooltip-button
        icon="mdi-view-dashboard"
        text="Back to Dashboard"
        :action="() => goBack()"
      ></custom-tooltip-button>
    </v-card-title>
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
  components: {
    DiscoverPageExperienceFormDialog,
    CustomTooltipButton,
  },
  mixins: [commonUtilities],
  data() {
    return {
      isDialogOpen: false,
      geoLocation: null,
    };
  },
};
</script>
