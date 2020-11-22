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
                    color="secondary"
                    class="text-capitalize"
                    outlined
                    @click="updateDraft"
                    :loading="isUpdateDraftStart"
                    :disabled="!isUpdateDraftFormValid"
                    v-if="mode === 'draft'"
                    >Update Draft</v-btn
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
  GET_ITINERARY_POST_DETAILS,
  SAVE_ITINERARY_POST_DRAFT,
  UPDATE_ITINERARY_POST_DRAFT,
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
      isUpdateDraftStart: false,
      mode: "submit",
      isGetDetailsStart: false,
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
    isUpdateDraftFormValid() {
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
    async "$route.params.mode"(val) {
      this.mode = val;
      if (this.mode === "draft") {
        const { postID } = this.$route.params;
        await this.getDetails(postID);
        return;
      }
      this.clearForm();
    },
    async "$route.params.postID"(val) {
      await this.getDetails(val);
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
      this.isFetchDraftsPreviewStart = false;
    },
    async saveDraft() {
      this.isSaveDraftStart = true;
      const savedDraftPostDetails = await this.$store.dispatch(
        SAVE_ITINERARY_POST_DRAFT,
        this.form
      );
      this.isSaveDraftStart = false;
      await this.fetchDraftsPreview();
      if (this.validateObject(savedDraftPostDetails)) {
        this.mode = "submit";
        this.clearForm();
      }
    },
    async updateDraft() {
      this.isUpdateDraftStart = true;
      const postID = this.$route.params.postID | 0;
      const payload = {
        postID,
        ...this.form,
        isDraft: true,
      };
      await this.$store.dispatch(UPDATE_ITINERARY_POST_DRAFT, payload);
      await this.fetchDraftsPreview();
      this.isUpdateDraftStart = false;
    },
    async getDetails(postID) {
      this.isGetDetailsStart = true;
      const {
        title,
        text,
        destinations,
        travelEvents,
        categories,
        files,
        itinerary,
        review,
      } = await this.$store.dispatch(GET_ITINERARY_POST_DETAILS, postID);
      this.isGetDetailsStart = false;
      try {
        this.isGetTravelStoryDetailsStart = false;
        this.form.title = title;
        this.form.text = text;
        this.form.destinationsID = destinations
          .map((item) => item.destination)
          .map((destination) => destination.id);
        this.form.travelEventsID = travelEvents
          .map((item) => item.travelEvent)
          .map((travelEvent) => travelEvent.id);
        this.form.categories = categories.map((category) => category.name);
        this.form.files = files;
        this.form.itinerary = itinerary;
        this.form.itinerary.days = itinerary.days.map((day) => {
          day.timestamps = day.timestamps.map(
            ({
              time,
              destination,
              transportation,
              interests,
              fare,
              expenses,
              otherDetails,
            }) => {
              return {
                time,
                destinationID: destination.id,
                transportation,
                interests: interests.map((interest) => interest.name),
                fare,
                expenses,
                otherDetails,
              };
            }
          );
          return day;
        });
        this.form.review = review;
        this.form.review.transportation = review.transportation.map(
          ({ type, text, rating, destination }) => ({
            type,
            text,
            rating,
            destinationID: destination.id,
          })
        );
        this.form.review.activities = review.activities.map(
          ({ name, text, rating, destination }) => ({
            name,
            text,
            rating,
            destinationID: destination.id,
          })
        );
        this.form.review.tips = review.tips.map((tip) => tip.text);
        this.form.review.avoids = review.avoids.map((avoid) => avoid.text);
      } catch (_) {
        console.log(_);
        this.clearForm();
      }
    },
    clearForm() {
      this.form = Object.assign({}, this.defaultItineraryForm);
      this.form.itinerary = Object.assign(
        {},
        {
          totalDestinations: 0,
          totalExpenses: 0,
          days: [],
        }
      );
      this.form.review = Object.assign(
        {},
        {
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
        }
      );
    },
  },
  async created() {
    this.scrollToTop();
    const { mode, postID } = this.$route.params;
    this.mode = mode;
    if (this.mode && this.mode === "draft") {
      await this.getDetails(postID);
    }
    await this.fetchGenericDestinations();
    await this.fetchGenericTravelEvents();
    await this.$store.dispatch(FETCH_GENERIC_TRANSPORTATION);
    await this.fetchDraftsPreview();
  },
};
</script>
