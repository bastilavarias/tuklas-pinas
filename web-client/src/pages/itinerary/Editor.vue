<template>
  <section>
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
                    <itinerary-post-editor-timeline-field></itinerary-post-editor-timeline-field>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-text>
                <v-row dense>
                  <v-col cols="12">
                    <span class="subtitle-1">Personal Reviews</span>
                  </v-col>
                  <v-col cols="12">
                    <itinerary-post-editor-personal-reviews-field></itinerary-post-editor-personal-reviews-field>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-text>
                <v-row dense>
                  <v-col cols="12">
                    <span class="subtitle-1">Summaries</span>
                  </v-col>
                  <v-col cols="12">
                    <itinerary-post-editor-summary-field></itinerary-post-editor-summary-field>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn
                  color="secondary"
                  depressed
                  class="text-capitalize"
                  outlined
                  >Save as Draft</v-btn
                >
                <v-btn color="primary" depressed>Post</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12">
            <generic-posting-guidelines-list></generic-posting-guidelines-list>
          </v-col>
          <v-col cols="12">
            <span class="caption">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia, quisquam?
            </span>
          </v-col>
          <v-col cols="12">
            <generic-sticky-footer-card></generic-sticky-footer-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import CustomDropzone from "@/components/custom/FileDropzone";
import GenericFooter from "@/components/generic/Footer";
import GenericStickyFooterCard from "@/components/generic/StickyFooterCard";
import GenericPostingGuidelinesList from "@/components/generic/PostingGuidelinesList";
import ItineraryPostEditorPersonalReviewsField from "@/components/itinerary-post-editor/personal-reviews-field/Index";
import ItineraryPostEditorTimelineField from "@/components/itinerary-post-editor/timeline-field/Index";
import ItineraryPostEditorSummaryField from "@/components/itinerary-post-editor/summary-field/Index";

export default {
  components: {
    ItineraryPostEditorSummaryField,
    ItineraryPostEditorTimelineField,
    ItineraryPostEditorPersonalReviewsField,
    GenericPostingGuidelinesList,
    GenericStickyFooterCard,
    GenericFooter,
    CustomDropzone,
  },
};
</script>