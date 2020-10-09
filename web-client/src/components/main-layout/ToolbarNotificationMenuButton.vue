<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on: menu, attrs }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="{ ...tooltip, ...menu }"
            :class="buttonClassName"
          >
            <v-icon>mdi-bell-outline</v-icon>
          </v-btn>
        </template>
        <span>Notification</span>
      </v-tooltip>
    </template>
    <v-card width="400" max-height="300" :style="{ overflow: 'auto' }">
      <v-card-title class="font-weight-bold">Notifications</v-card-title>
      <template v-for="n in 5">
        <generic-notification-preview-list-item
          :key="n"
          :is-read="n % 2 !== 0"
        ></generic-notification-preview-list-item>
      </template>
      <v-card-actions>
        <v-btn
          color="secondary"
          block
          class="text-capitalize"
          :to="{ name: 'notification' }"
          >See All</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import GenericNotificationPreviewListItem from "@/components/generic/list-item/NotificationPreview";
export default {
  name: "main-layout-toolbar-notification-menu-button",
  components: { GenericNotificationPreviewListItem },
  props: {
    buttonClassName: {
      type: String,
      required: false,
    },
  },
};
</script>
