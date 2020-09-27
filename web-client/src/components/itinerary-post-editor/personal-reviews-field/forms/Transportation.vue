<template>
  <v-card flat color="transparent">
    <v-card-title>
      <span>Transportation Review</span>
      <div class="flex-grow-1"></div>
      <v-btn icon @click="isDialogOpen = true">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-title>
    <template v-for="n in 6">
      <v-list-item two-line :key="n">
        <v-list-item-content>
          <v-list-item-subtitle>
            <span class="mr-1"
              >{{ n }}.
              <span class="font-weight-bold secondary--text"
                >To Activity Location</span
              >
              -
              <span class="font-italic">Type of Transporation</span></span
            >
            <v-chip
              color="success"
              x-small
              label
              class="text-uppercase font-weight-bold"
              >Awesome</v-chip
            >
          </v-list-item-subtitle>
          <v-list-item-subtitle
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            nam.</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-menu>
            <template v-slot:activator="{ on: menu, attrs }">
              <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                  <v-btn
                    v-bind="attrs"
                    v-on="{ ...tooltip, ...menu }"
                    icon
                    small
                  >
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
    <v-dialog width="500" v-model="isDialogOpen">
      <v-card>
        <v-card-title>
          <span>Add Review #1 </span>
          <div class="flex-grow-1"></div>
          <v-btn icon @click="isDialogOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>Lorem ipsum dolor sit amet.</v-card-subtitle>
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-select outlined single-line label="Transport Type"></v-select>
            </v-col>
            <v-col cols="12">
              <v-textarea outlined single-line label="Review"></v-textarea>
            </v-col>
            <v-col cols="12">
              <span class="subtitle-1">Rating</span>
              <v-radio-group>
                <v-radio>
                  <template v-slot:label>
                    <v-chip
                      label
                      color="success"
                      class="white--text font-weight-bold text-uppercase"
                      >Awesome</v-chip
                    >
                  </template>
                </v-radio>
                <v-radio>
                  <template v-slot:label>
                    <v-chip
                      label
                      color="grey"
                      class="white--text font-weight-bold text-uppercase"
                      >Good</v-chip
                    >
                  </template>
                </v-radio>
                <v-radio>
                  <template v-slot:label>
                    <v-chip
                      label
                      color="error"
                      class="white--text font-weight-bold text-uppercase"
                      >Disappointed</v-chip
                    >
                  </template>
                </v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="secondary">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: "itinerary-post-editor-personal-transportation-review-form",

  data() {
    return {
      isDialogOpen: false,
    };
  },
};
</script>
