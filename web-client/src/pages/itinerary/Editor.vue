<template>
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
                      label="Itinerary name (E.g, 4 Nights in Amazing Paris) *"
                      single-line
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-autocomplete
                      outlined
                      label="Events *"
                      single-line
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
                    <v-autocomplete
                      outlined
                      label="Tour Guides"
                      single-line
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      outlined
                      label="Description"
                      single-line
                      color="primary"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <itinerary-post-editor-page-timeline-field></itinerary-post-editor-page-timeline-field>
                  </v-col>
                  <v-col cols="12">
                    <custom-file-dropzone
                      label="Images/Videos"
                    ></custom-file-dropzone>
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
</template>

<script>
import ItineraryPostEditorPageTimelineField from "@/components/itinerary-post-editor-page/timeline-field/Index";
import CustomFileDropzone from "@/components/custom/FileDropzone";
import ItineraryPostEditorPagePersonalReviewsField from "@/components/itinerary-post-editor-page/personal-reviews-field/Index";
import GenericPostingGuidelinesCard from "@/components/generic/card/PostingGuidelines";
import GenericStickyFooter from "@/components/generic/footer/Sticky";
export default {
  components: {
    GenericStickyFooter,
    GenericPostingGuidelinesCard,
    ItineraryPostEditorPagePersonalReviewsField,
    CustomFileDropzone,
    ItineraryPostEditorPageTimelineField,
  },
};
</script>
