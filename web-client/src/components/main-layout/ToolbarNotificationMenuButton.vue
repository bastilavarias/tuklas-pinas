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
        <generic-notification-list-item
          :key="n"
          :is-read="n % 2 !== 0"
        ></generic-notification-list-item>
      </template>
      <v-card-actions>
        <v-btn color="secondary" block class="text-capitalize">See All</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import GenericNotificationListItem from "@/components/generic/notification/ListItem";
export default {
  name: "main-layout-toolbar-notification-menu-button",
  components: { GenericNotificationListItem },
  props: {
    buttonClassName: {
      type: String,
      required: false,
    },
  },
};
</script>
