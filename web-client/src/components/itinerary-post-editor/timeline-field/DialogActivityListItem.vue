<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-subtitle>
        <span>
          <v-icon small class="mr-1">mdi-clock-outline</v-icon>
          <span
            >10:00 AM -
            <span class="font-italic">Lorem ipsum dolor sit amet.</span></span
          >
        </span>
      </v-list-item-subtitle>
      <v-list-item-title class="font-weight-bold">
        Lorem ipsum dolor sit amet. - &#8369; 40.00
      </v-list-item-title>
      <v-list-item-subtitle
        >Via Lorem ipsum dolor sit amet. - &#8369; 40.00</v-list-item-subtitle
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
              <v-list-item-title>Delete</v-list-item-title>
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
