<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12">
              <v-card outlined>
                <v-card-title>
                  <span class="font-weight-bold">Submit Travel Story</span>
                  <div class="flex-grow-1"></div>
                  <v-chip color="secondary">Drafts 5</v-chip>
                </v-card-title>
                <v-card-subtitle
                  >Lorem ipsum dolor sit amet, consectetur.</v-card-subtitle
                >
                <v-card-text>
                  <v-row dense>
                    <v-col cols="12">
                      <v-text-field
                        outlined
                        label="Title"
                        single-line
                        color="primary"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        outlined
                        label="Text *"
                        single-line
                        color="primary"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <v-autocomplete
                        outlined
                        label="Destination *"
                        single-line
                        :loading="isFetchGenericDestinationsStart"
                        :items="genericDestinations"
                        multiple
                        item-text="name"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12">
                      <v-autocomplete
                        outlined
                        label="Travel Events *"
                        single-line
                        :loading="isFetchGenericTravelEventsStart"
                        :items="genericTravelEvents"
                        multiple
                        item-text="name"
                        item-value="id"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12">
                      <v-autocomplete
                        outlined
                        label="Categories *"
                        single-line
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12">
                      <custom-file-dropzone
                        label="Images or Videos"
                      ></custom-file-dropzone>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn color="secondary" class="text-capitalize" outlined
                    >Save as Draft</v-btn
                  >
                  <v-btn color="primary">Post</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <v-row>
            <v-col cols="12">
              <v-card>
                <v-card-subtitle>Posting Guidelines</v-card-subtitle>
                <template v-for="n in 6">
                  <div :key="n">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-subtitle
                          >{{ n }}. Lorem ipsum dolor sit
                          amet.</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider v-if="n !== 6"></v-divider>
                  </div>
                </template>
              </v-card>
            </v-col>
            <v-col cols="12">
              <span class="caption">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia, quisquam?
              </span>
            </v-col>
            <v-col cols="12">
              <generic-sticky-footer></generic-sticky-footer>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <generic-basic-footer></generic-basic-footer>
  </section>
</template>

<script>
import CustomFileDropzone from "@/components/custom/FileDropzone";
import GenericStickyFooter from "@/components/generic/footer/Sticky";
import GenericBasicFooter from "@/components/generic/footer/Basic";
import {
  FETCH_GENERIC_DESTINATIONS,
  FETCH_GENERIC_TRAVEL_EVENTS,
} from "@/store/types/generic";

export default {
  components: { GenericBasicFooter, GenericStickyFooter, CustomFileDropzone },
  data() {
    return {
      isFetchGenericDestinationsStart: false,
      isFetchGenericTravelEventsStart: false,
    };
  },
  computed: {
    genericDestinations() {
      return this.$store.state.generic.destinations;
    },
    genericTravelEvents() {
      return this.$store.state.generic.travelEvents;
    },
  },
  methods: {
    async fetchGenericDestinations() {
      this.isFetchGenericDestinationsStart = true;
      await this.$store.dispatch(FETCH_GENERIC_DESTINATIONS);
      this.isFetchGenericDestinationsStart = false;
    },
    async fetchGenericTravelEvents() {
      this.isFetchGenericTravelEventsStart = true;
      await this.$store.dispatch(FETCH_GENERIC_TRAVEL_EVENTS);
      this.isFetchGenericTravelEventsStart = false;
    },
  },
  async created() {
    await this.fetchGenericDestinations();
    await this.fetchGenericTravelEvents();
  },
};
</script>
