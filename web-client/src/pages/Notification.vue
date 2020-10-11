<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" md="9">
          <v-row>
            <v-col cols="12">
              <v-card outlined>
                <v-toolbar flat class="mb-10">
                  <v-toolbar-title class="title font-weight-bold"
                    >Notifications</v-toolbar-title
                  >
                  <v-spacer></v-spacer>
                  <v-chip>
                    <v-icon left> mdi-tune </v-icon>
                    <span class="font-weight-medium">Filters</span>
                  </v-chip>
                </v-toolbar>
                <template v-for="n in 20">
                  <generic-notification-preview-list-item
                    :key="n"
                    :is-read="n % 2 !== 0"
                  ></generic-notification-preview-list-item>
                  <v-divider v-if="n !== 10"></v-divider>
                </template>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3" ref="stickyParent">
          <v-row>
            <v-col cols="12">
              <generic-mini-events-explorer-side-card></generic-mini-events-explorer-side-card>
            </v-col>
            <v-col cols="12">
              <div
                :style="{
                  position: 'relative',
                  height: `${stickyParentHeight}px`,
                }"
              >
                <generic-sticky-footer></generic-sticky-footer>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import GenericMiniEventsExplorerSideCard from "@/components/generic/card/MiniEventsExplorer";
import GenericStickyFooter from "@/components/generic/footer/Sticky";
import GenericNotificationPreviewListItem from "@/components/generic/list-item/NotificationPreview";
import CommonUtilities from "@/common/utilities";
export default {
  components: {
    GenericNotificationPreviewListItem,
    GenericStickyFooter,
    GenericMiniEventsExplorerSideCard,
  },
  mixins: [CommonUtilities],
};
</script>
