<template>
  <v-list-item three-line>
    <v-list-item-content>
      <v-list-item-subtitle>
        <span>
          <v-icon small class="mr-1">mdi-clock-outline</v-icon>
          <span>10:00 AM - <span class="font-italic">Location Name</span></span>
        </span>
      </v-list-item-subtitle>
      <v-list-item-title>
        <span class="font-weight-bold">Activity Name</span> Via Transportation
        Type
      </v-list-item-title>
      <v-list-item-subtitle
        >Total Expenses:
        <span class="font-weight-bold"
          >&#8369; 40.00</span
        ></v-list-item-subtitle
      >
    </v-list-item-content>
    <v-list-item-action>
      <v-menu>
        <template v-slot:activator="{ on: menu, attrs }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn v-bind="attrs" v-on="{ ...tooltip, ...menu }" icon small>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <span>More Actions</span>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-pencil</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Edit</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-trash-can</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Remove</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: "itinerary-post-editor-timeline-dialog-activity-list-item",

  data() {
    return {
      isDialogOpen: false,
    };
  },
};
</script>
