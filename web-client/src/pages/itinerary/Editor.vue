<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12">
              <v-card outlined>
                <v-card-title>
                  <span class="font-weight-bold">Submit Itinerary</span>
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
                        label="Title * (E.g, 4 Nights in Amazing Paris)"
                        single-line
                        color="primary"
                        v-model="form.title"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        outlined
                        label="Text"
                        single-line
                        color="primary"
                        v-model="form.text"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <v-autocomplete
                        outlined
                        label="Destinations *"
                        single-line
                        :loading="isFetchGenericDestinationsStart"
                        :items="genericDestinations"
                        multiple
                        item-text="name"
                        item-value="id"
                        v-model="form.destinationsID"
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
                        v-model="form.travelEventsID"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12">
                      <generic-category-combobox
                        outlined
                        label="Categories"
                        single-line
                        :categories.sync="form.categories"
                      ></generic-category-combobox>
                    </v-col>
                    <v-col cols="12">
                      <custom-file-dropzone
                        label="Images or Videos *"
                        :files.sync="form.files"
                      ></custom-file-dropzone>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-text>
                  <v-row dense>
                    <v-col cols="12">
                      <itinerary-post-editor-page-timeline-field
                        :itinerary.sync="form.itinerary"
                      ></itinerary-post-editor-page-timeline-field>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-text>
                  <v-row dense>
                    <v-col cols="12">
                      <span class="subtitle-1">Personal Reviews</span>
                    </v-col>
                    <v-col cols="12">
                      <itinerary-post-editor-page-personal-reviews-field></itinerary-post-editor-page-personal-reviews-field>
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
              <generic-posting-guidelines-card></generic-posting-guidelines-card>
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
import ItineraryPostEditorPageTimelineField from "@/components/itinerary-post-editor-page/timeline-field/Index";
import CustomFileDropzone from "@/components/custom/FileDropzone";
import ItineraryPostEditorPagePersonalReviewsField from "@/components/itinerary-post-editor-page/personal-reviews-field/Index";
import GenericPostingGuidelinesCard from "@/components/generic/card/PostingGuidelines";
import GenericStickyFooter from "@/components/generic/footer/Sticky";
import GenericBasicFooter from "@/components/generic/footer/Basic";
import {
  FETCH_GENERIC_DESTINATIONS,
  FETCH_GENERIC_TRANSPORTATION,
  FETCH_GENERIC_TRAVEL_EVENTS,
} from "@/store/types/generic";
import GenericCategoryCombobox from "@/components/generic/combobox/Category";

const defaultItineraryForm = {
  title: "",
  text: "",
  destinationsID: [],
  travelEventsID: [],
  categories: [],
  files: [],
  itinerary: {
    totalDestinations: 0,
    totalExpenses: 0,
    days: [],
  },
  review: {
    restaurants: [],
    lodgings: [],
    transportation: [],
    activities: [],
    internetAccess: {},
    finance: {},
    tips: [],
    avoids: [],
  },
};

export default {
  components: {
    GenericCategoryCombobox,
    GenericBasicFooter,
    GenericStickyFooter,
    GenericPostingGuidelinesCard,
    ItineraryPostEditorPagePersonalReviewsField,
    CustomFileDropzone,
    ItineraryPostEditorPageTimelineField,
  },
  data() {
    return {
      isFetchGenericDestinationsStart: false,
      isFetchGenericTravelEventsStart: false,
      isCreateItineraryPostStart: false,
      form: Object.assign({}, defaultItineraryForm),
      defaultItineraryForm,
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
    await this.$store.dispatch(FETCH_GENERIC_TRANSPORTATION);
  },
};
</script>
