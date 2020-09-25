<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-3">
      <span class="subtitle-1" v-if="label">{{ label }}</span>
      <div>
        <v-btn icon v-if="theme !== 'default'" @click="theme = 'default'">
          <v-icon>mdi-card-outline</v-icon>
        </v-btn>
        <v-btn icon v-if="theme !== 'list'" @click="theme = 'list'">
          <v-icon>mdi-view-list-outline</v-icon>
        </v-btn>
      </div>
    </div>
    <VueFileAgent
      v-model="files"
      :theme="theme"
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
  name: "custom-dropzone",
  components: { CustomTooltipButton },
  props: {
    label: { type: String, required: false },
  },

  data() {
    return {
      files: [],
      theme: "default",
    };
  },
};
</script>

<style>
#dropzone {
  font-family: "Poppins", sans-serif;
}
</style>
