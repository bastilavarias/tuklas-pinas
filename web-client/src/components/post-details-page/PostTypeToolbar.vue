<template>
  <v-toolbar flat outlined>
    <custom-tooltip-button
      icon="mdi-chevron-left"
      text="Go Back"
      :action="() => goBack()"
    ></custom-tooltip-button>
    <v-toolbar-title class="font-weight-bold">{{
      displayPostType
    }}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
import CustomTooltipButton from "@/components/custom/TooltipButton";
import commonUtilities from "@/common/utilities";
export default {
  name: "post-details-page-post-type-toolbar",
  components: { CustomTooltipButton },
  mixins: [commonUtilities],
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    displayPostType() {
      const postType = {
        "travel-story": "Travel Story Post",
        itinerary: "Itinerary Post",
      };
      return postType[this.type];
    },
  },
};
</script>
