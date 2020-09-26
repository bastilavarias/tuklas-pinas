<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-3">
      <span class="subtitle-1" v-if="label">{{ label }}</span>
      <div class="flex-grow-1" v-if="!label"></div>
      <div>
        <v-btn icon v-if="layout !== 'default'" @click="layout = 'default'">
          <v-icon>mdi-card-outline</v-icon>
        </v-btn>
        <v-btn icon v-if="layout !== 'list'" @click="layout = 'list'">
          <v-icon>mdi-view-list-outline</v-icon>
        </v-btn>
      </div>
    </div>
    <VueFileAgent
      v-model="files"
      :theme="layout"
      :max-files="5"
      accept="image/*, video/*"
      deletable
      help-text="Choose Images/Videos or drag here"
    ></VueFileAgent>
  </div>
</template>

<script>
import CustomTooltipButton from "@/components/custom/TooltipButton";
export default {
  name: "custom-file-dropzone",
  components: { CustomTooltipButton },
  props: {
    label: { type: String, required: false },
  },

  data() {
    return {
      files: [],
      layout: "list",
    };
  },
};
</script>

<style>
#dropzone {
  font-family: "Poppins", sans-serif;
}
</style>
