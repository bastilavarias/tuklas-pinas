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
                  <generic-post-drafts-preview-menu
                    :is-loading="
                      isFetchDraftsPreviewStart || isGetTravelStoryDetailsStart
                    "
                    :drafts-preview="draftsPreview"
                    :submit-route="{
                      name: 'travel-story-post-editor-page',
                      params: { mode: 'submit' },
                    }"
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
                        label="Title *"
                        color="primary"
                        v-model="form.title"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        outlined
                        label="Text *"
                        color="primary"
                        v-model="form.text"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <v-autocomplete
                        outlined
                        label="Destinations *"
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
                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn
                    color="secondary"
                    class="text-capitalize"
                    outlined
                    @click="saveTravelStoryPostDraft"
                    :loading="isSaveTravelStoryPostDraftStart"
                    :disabled="!isSaveTravelStoryDraftFormValid"
                    v-if="mode === 'submit'"
                    >Save as Draft</v-btn
                  >
                  <v-btn
                    color="secondary"
                    class="text-capitalize"
                    outlined
                    :loading="isUpdateTravelStoryDraftStart"
                    :disabled="!isUpdateTravelStoryDraftFormValid"
                    @click="updateTravelStoryDraft"
                    v-if="mode === 'draft'"
                    >Update Draft</v-btn
                  >
                  <v-btn
                    color="primary"
                    @click="createTravelStoryPost"
                    :loading="isCreateTravelStoryPostStart"
                    :disabled="!isCreateTravelStoryFormValid"
                    >CREATE</v-btn
                  >
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
import GenericCategoryCombobox from "@/components/generic/combobox/Category";
import {
  CREATE_TRAVEL_STORY_POST,
  FETCH_TRAVEL_STORY_POST_DRAFTS_PREVIEW,
  GET_TRAVEL_STORY_POST,
  SAVE_TRAVEL_STORY_POST_DRAFT,
  UPDATE_TRAVEL_STORY_POST_DRAFT,
} from "@/store/types/post";
import commonValidation from "@/common/validation";
import GenericPostDraftsPreviewMenu from "@/components/generic/menu/PostDraftsPreview";

const defaultTravelStoryForm = {
  title: "",
  text: "",
  destinationsID: [],
  travelEventsID: [],
  categories: [],
  files: [],
};

export default {
  mixins: [commonValidation],
  components: {
    GenericPostDraftsPreviewMenu,
    GenericCategoryCombobox,
    GenericBasicFooter,
    GenericStickyFooter,
    CustomFileDropzone,
  },
  data() {
    return {
      isFetchGenericDestinationsStart: false,
      isFetchGenericTravelEventsStart: false,
      isCreateTravelStoryPostStart: false,
      isSaveTravelStoryPostDraftStart: false,
      form: Object.assign({}, defaultTravelStoryForm),
      defaultTravelStoryForm,
      isFetchDraftsPreviewStart: false,
      draftsPreview: [],
      mode: "",
      isGetTravelStoryDetailsStart: false,
      isUpdateTravelStoryDraftStart: false,
    };
  },
  computed: {
    genericDestinations() {
      return this.$store.state.generic.destinations;
    },
    genericTravelEvents() {
      return this.$store.state.generic.travelEvents;
    },
    isCreateTravelStoryFormValid() {
      const { title, text, destinationsID, travelEventsID, files } = this.form;
      const isDestinationsIDIsNotEmpty = destinationsID.length > 0;
      const isTravelEventsIDIsNotEmpty = travelEventsID.length > 0;
      const isFilesIsNotEmptyAndExceeding =
        files.length > 0 && files.length < 26;
      return (
        title &&
        text &&
        isDestinationsIDIsNotEmpty &&
        isTravelEventsIDIsNotEmpty &&
        isFilesIsNotEmptyAndExceeding
      );
    },
    isSaveTravelStoryDraftFormValid() {
      const { title } = this.form;
      return title;
    },
    isUpdateTravelStoryDraftFormValid() {
      const { title } = this.form;
      return title;
    },
    credentials() {
      return this.$store.state.authentication.credentials;
    },
  },
  watch: {
    async "$route.params.mode"(val) {
      this.mode = val;
      if (this.mode === "draft") {
        const { postID } = this.$route.params;
        await this.getTravelStoryDetails(postID);
        return;
      }
      this.form = Object.assign({}, this.defaultTravelStoryForm);
    },
    async "$route.params.postID"(val) {
      await this.getTravelStoryDetails(val);
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
    async createTravelStoryPost() {
      this.isCreateTravelStoryPostStart = true;
      const createdTravelStoryPost = await this.$store.dispatch(
        CREATE_TRAVEL_STORY_POST,
        this.form
      );
      this.isCreateTravelStoryPostStart = false;
      const isObjectValid = this.validateObject(createdTravelStoryPost);
      if (isObjectValid)
        return await this.$router.push({
          name: "post-details-page",
          params: { postID: createdTravelStoryPost.id, type: "travel-story" },
        });
    },
    async saveTravelStoryPostDraft() {
      this.isSaveTravelStoryPostDraftStart = true;
      const savedDraft = await this.$store.dispatch(
        SAVE_TRAVEL_STORY_POST_DRAFT,
        this.form
      );
      this.isSaveTravelStoryPostDraftStart = false;
      if (this.validateObject(savedDraft)) {
        this.mode = "submit";
        this.form = Object.assign({}, this.defaultTravelStoryForm);
      }
    },
    async fetchTravelStoryDraftsPreview() {
      this.isFetchDraftsPreviewStart = true;
      this.draftsPreview = await this.$store.dispatch(
        FETCH_TRAVEL_STORY_POST_DRAFTS_PREVIEW,
        this.credentials.id
      );
      this.isFetchDraftsPreviewStart = false;
    },
    async getTravelStoryDetails(postID) {
      this.isGetTravelStoryDetailsStart = true;
      const {
        title,
        text,
        destinations,
        travelEvents,
        categories,
        files,
      } = await this.$store.dispatch(GET_TRAVEL_STORY_POST, postID);
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
      } catch (_) {
        this.form = Object.assign({}, this.defaultTravelStoryForm);
      }
    },
    async updateTravelStoryDraft() {
      this.isUpdateTravelStoryDraftStart = true;
      const postID = this.$route.params.postID | 0;
      await this.$store.dispatch(UPDATE_TRAVEL_STORY_POST_DRAFT, {
        ...this.form,
        postID,
      });
      await this.fetchTravelStoryDraftsPreview();
      this.isUpdateTravelStoryDraftStart = false;
    },
  },
  async created() {
    const { mode, postID } = this.$route.params;
    this.mode = mode;
    if (this.mode && this.mode === "draft") {
      await this.getTravelStoryDetails(postID);
    }
    await this.fetchGenericDestinations();
    await this.fetchGenericTravelEvents();
    await this.fetchTravelStoryDraftsPreview();
  },
};
</script>
