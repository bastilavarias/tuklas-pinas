<template>
  <v-file-input
    v-model="filesLocal"
    color="primary"
    :placeholder="label"
    multiple
    prepend-icon=""
    outlined
    persistent-hint
    :show-size="1000"
    hint="Maximum of 25 files."
    accept="image/*, video/*"
  >
    <template v-slot:selection="{ index, text }">
      <v-chip v-if="index < 2" color="primary" dark label small>
        {{ text }}
      </v-chip>

      <span
        v-else-if="index === 2"
        class="overline grey--text text--darken-3 mx-2"
      >
        +{{ files.length - 2 }} File(s)
      </span>
    </template>
  </v-file-input>
</template>

<script>
import CustomTooltipButton from "@/components/custom/TooltipButton";
export default {
  name: "custom-file-dropzone",
  components: { CustomTooltipButton },
  props: {
    files: { required: true },
    label: { type: String, required: false },
  },
  data() {
    return {
      filesLocal: this.files,
    };
  },
  watch: {
    files(val) {
      this.filesLocal = val;
    },
    filesLocal(val) {
      this.$emit("update:files", val);
    },
  },
};
</script>
