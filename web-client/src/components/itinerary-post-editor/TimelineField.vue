<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-5">
      <span class="subtitle-1">Itinerary Timeline</span>
      <div>
        <v-btn
          icon
          v-if="itineraryLayout !== 'card'"
          @click="itineraryLayout = 'card'"
        >
          <v-icon>mdi-card-outline</v-icon>
        </v-btn>
        <v-btn
          icon
          v-if="itineraryLayout !== 'list'"
          @click="itineraryLayout = 'list'"
        >
          <v-icon>mdi-view-list-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-sort</v-icon>
        </v-btn>
        <v-btn icon @click="isTimelineDialogOpen = true">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>
    <v-row dense v-if="itineraryLayout === 'card'">
      <template v-for="n in 6">
        <v-col cols="12" md="6" :key="n">
          <v-card outlined>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle class="secondary--text">
                  <span class="font-weight-bold">Day {{ n }}</span>
                  <span class="mx-1">-</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </v-list-item-subtitle>
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
                        <v-list-item-title>Delete</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item-action>
            </v-list-item>
          </v-card>
        </v-col>
      </template>
    </v-row>
    <v-list v-if="itineraryLayout === 'list'">
      <template v-for="n in 6">
        <v-list-item :key="n">
          <v-list-item-content>
            <v-list-item-subtitle class="secondary--text">
              <span class="font-weight-bold">Day {{ n }}</span>
              <span class="mx-1">-</span>
              <span>Lorem ipsum dolor sit amet.</span>
            </v-list-item-subtitle>
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
        <v-divider v-if="n !== 6"></v-divider>
      </template>
    </v-list>
    <itinerary-post-editor-timeline-dialog
      :is-open.sync="isTimelineDialogOpen"
    ></itinerary-post-editor-timeline-dialog>
  </div>
</template>

<script>
import ItineraryPostEditorTimelineDialog from "@/components/itinerary-post-editor/TimelineDialog";
export default {
  name: "itinerary-post-editor-timeline-field",

  components: { ItineraryPostEditorTimelineDialog },

  data() {
    return {
      itineraryLayout: "card",
      isTimelineDialogOpen: false,
    };
  },
};
</script>
