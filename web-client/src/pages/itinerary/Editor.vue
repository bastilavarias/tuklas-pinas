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
                  <generic-post-drafts-preview-menu
                    :is-loading="isFetchDraftsPreviewStart"
                    :drafts-preview="draftsPreview"
                    editor-route-name="itinerary-post-editor-page"
                    v-if="draftsPreview.length > 0"
                  ></generic-post-drafts-preview-menu>
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
                        color="primary"
                        v-model="form.title"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        outlined
                        label="Text"
                        color="primary"
                        v-model="form.text"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <generic-destinations-autocomplete
                        outlined
                        label="Destinations *"
                        :destinationID.sync="form.destinationsID"
                        multiple
                      ></generic-destinations-autocomplete>
                    </v-col>
                    <v-col cols="12">
                      <v-autocomplete
                        outlined
                        label="Travel Events *"
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
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card outlined>
                <v-card-text>
                  <v-row dense>
                    <v-col cols="12">
                      <itinerary-post-editor-page-itinerary-field
                        :itinerary.sync="form.itinerary"
                      ></itinerary-post-editor-page-itinerary-field>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card outlined>
                <v-card-text>
                  <v-row dense>
                    <v-col cols="12">
                      <span class="subtitle-1">Personal Reviews</span>
                    </v-col>
                    <v-col cols="12">
                      <itinerary-post-editor-page-personal-reviews-field
                        :review.sync="form.review"
                      ></itinerary-post-editor-page-personal-reviews-field>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn
                    color="secondary"
                    class="text-capitalize"
                    outlined
                    @click="saveDraft"
                    :loading="isSaveDraftStart"
                    :disabled="!isSaveDraftFormValid"
                    v-if="mode === 'submit'"
                    >Save as Draft</v-btn
                  >
                  <v-btn
                    color="primary"
                    @click="createItineraryPost"
                    :loading="isCreateItineraryPostStart"
                    >Post</v-btn
                  >
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
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <generic-basic-footer></generic-basic-footer>
  </section>
</template>

<script>
import CustomFileDropzone from "@/components/custom/FileDropzone";
import ItineraryPostEditorPagePersonalReviewsField from "@/components/itinerary-post-editor-page/personal-reviews/Field";
import GenericPostingGuidelinesCard from "@/components/generic/card/PostingGuidelines";
import GenericStickyFooter from "@/components/generic/footer/Sticky";
import GenericBasicFooter from "@/components/generic/footer/Basic";
import {
  FETCH_GENERIC_DESTINATIONS,
  FETCH_GENERIC_TRANSPORTATION,
  FETCH_GENERIC_TRAVEL_EVENTS,
} from "@/store/types/generic";
import GenericCategoryCombobox from "@/components/generic/combobox/Category";
import ItineraryPostEditorPageItineraryField from "@/components/itinerary-post-editor-page/itinerary/Field";
import {
  CREATE_ITINERARY_POST,
  FETCH_ITINERARY_POST_DRAFTS_PREVIEW,
  SAVE_ITINERARY_POST_DRAFT,
} from "@/store/types/post";
import GenericDestinationsAutocomplete from "@/components/generic/autocomplete/Destinations";
import commonValidation from "@/common/validation";
import commonUtilities from "@/common/utilities";
import GenericPostDraftsPreviewMenu from "@/components/generic/menu/PostDraftsPreview";

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
    internetAccess: {
      text: "",
      rating: 0,
    },
    finance: {
      text: "",
      rating: 0,
    },
    tips: [],
    avoids: [],
  },
};

export default {
  components: {
    GenericPostDraftsPreviewMenu,
    GenericDestinationsAutocomplete,
    ItineraryPostEditorPageItineraryField,
    GenericCategoryCombobox,
    GenericBasicFooter,
    GenericStickyFooter,
    GenericPostingGuidelinesCard,
    ItineraryPostEditorPagePersonalReviewsField,
    CustomFileDropzone,
  },
  mixins: [commonUtilities, commonValidation],
  data() {
    return {
      isFetchGenericDestinationsStart: false,
      isFetchGenericTravelEventsStart: false,
      isCreateItineraryPostStart: false,
      form: Object.assign({}, defaultItineraryForm),
      defaultItineraryForm,
      isFetchDraftsPreviewStart: false,
      draftsPreview: [],
      isSaveDraftStart: false,
      mode: "submit",
    };
  },
  computed: {
    genericDestinations() {
      return this.$store.state.generic.destinations;
    },
    genericTravelEvents() {
      return this.$store.state.generic.travelEvents;
    },
    totalDestinations() {
      return this.form.itinerary.days
        .map((day) => day.destinationsCount)
        .reduce((flat, next) => flat + next, 0);
    },
    totalExpenses() {
      return this.form.itinerary.days
        .map((day) => day.expenses)
        .reduce((flat, next) => flat + next, 0);
    },
    credentials() {
      return this.$store.state.authentication.credentials;
    },
    isSaveDraftFormValid() {
      const { title } = this.form;
      return title;
    },
  },
  watch: {
    totalDestinations(val) {
      this.form.itinerary.totalDestinations = val;
    },
    totalExpenses(val) {
      this.form.itinerary.totalExpenses = val;
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
    async createItineraryPost() {
      this.isCreateItineraryPostStart = true;
      const createdItineraryPost = await this.$store.dispatch(
        CREATE_ITINERARY_POST,
        this.form
      );
      const isObjectValid = this.validateObject(createdItineraryPost);
      if (isObjectValid)
        return await this.$router.push({
          name: "post-details-page",
          params: { postID: createdItineraryPost.id, type: "itinerary" },
        });
      this.isCreateItineraryPostStart = false;
    },
    async fetchDraftsPreview() {
      this.isFetchDraftsPreviewStart = true;
      this.draftsPreview = await this.$store.dispatch(
        FETCH_ITINERARY_POST_DRAFTS_PREVIEW,
        this.credentials.id
      );
      console.log(this.draftsPreview);
      this.isFetchDraftsPreviewStart = false;
    },
    async saveDraft() {
      this.isSaveDraftStart = true;
      const savedDraftPostDetails = await this.$store.dispatch(
        SAVE_ITINERARY_POST_DRAFT,
        this.form
      );
      console.log(savedDraftPostDetails);
      this.isSaveDraftStart = false;
      await this.fetchDraftsPreview();
      if (this.validateObject(savedDraftPostDetails)) {
        this.mode = "submit";
        this.form = Object.assign({}, this.defaultItineraryForm);
      }
    },
  },
  async created() {
    this.scrollToTop();
    await this.fetchGenericDestinations();
    await this.fetchGenericTravelEvents();
    await this.$store.dispatch(FETCH_GENERIC_TRANSPORTATION);
    await this.fetchDraftsPreview();
  },
};
</script>
