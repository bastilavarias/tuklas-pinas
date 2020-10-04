<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" md="9">
          <v-row></v-row>
        </v-col>
        <v-col cols="12" md="3">
          <v-row>
            <v-col cols="12">
              <generic-events-explorer-preview-side-card></generic-events-explorer-preview-side-card>
            </v-col>
            <v-col cols="12">
              <generic-sticky-footer-card></generic-sticky-footer-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import GenericEventsExplorerPreviewSideCard from "@/components/generic/EventsExplorerPreviewSideCard";
import GenericStickyFooterCard from "@/components/generic/StickyFooterCard";
export default {
  components: { GenericStickyFooterCard, GenericEventsExplorerPreviewSideCard },
};
</script>
