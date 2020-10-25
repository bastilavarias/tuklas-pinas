<template>
  <v-card flat color="transparent">
    <v-card-title>
      <span>Transportation Reviews</span>
      <div class="flex-grow-1"></div>
      <custom-tooltip-button
        icon="mdi-plus"
        text="Add New Review"
        :action="openAddReviewDialog"
      ></custom-tooltip-button>
    </v-card-title>
    <v-card-text v-if="reviewsLocal.length === 0" class="text-center">
      <span class="caption font-italic">No reviews yet.</span>
    </v-card-text>
    <template v-for="(review, index) in reviewsLocal">
      <v-list-item two-line :key="index">
        <v-list-item-content>
          <v-list-item-subtitle>
            <span class="secondary--text font-weight-bold mr-1 text-capitalize">
              {{ index + 1 }}. {{ review.type }} </span
            ><generic-rating-chip :rating="review.rating"></generic-rating-chip>
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <span class="font-weight-medium"
              >To {{ getDestinationName(review.destinationID) }} -
            </span>
            <span v-if="review.text">
              {{ review.text }}
            </span>
            <span class="font-italic" v-if="!review.text">
              No review specified.
            </span>
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
            <v-list dense>
              <v-list-item @click="openUpdateReviewDialog(review, index)">
                <v-list-item-icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="openRemoveReviewDialog(index)">
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
          <span v-if="operation === 'add'">Add Review #{{ reviewCount }} </span>
          <span v-if="operation === 'update'"
            >Update Review #{{ this.selectedReviewIndex + 1 }}
          </span>
          <div class="flex-grow-1"></div>
          <v-btn icon @click="isDialogOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>Lorem ipsum dolor sit amet.</v-card-subtitle>
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <generic-transportation-combobox
                :transport.sync="form.type"
                label="Transport"
                outlined
              ></generic-transportation-combobox>
            </v-col>
            <v-col cols="12">
              <generic-destinations-autocomplete
                :destinationID.sync="form.destinationID"
                label="To Destination *"
                outlined
              ></generic-destinations-autocomplete>
            </v-col>
            <v-col cols="12">
              <v-textarea
                outlined
                label="Review"
                v-model="form.text"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <custom-rating
                :rating.sync="form.rating"
                label="Rating *"
              ></custom-rating>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            color="secondary"
            :disabled="!isFormValid"
            @click="addReview"
            v-if="operation === 'add'"
            >Add</v-btn
          >
          <v-btn
            color="secondary"
            :disabled="!isFormValid"
            @click="updateReview"
            v-if="operation === 'update'"
            >Update</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <custom-alert-dialog
      :is-open.sync="isCustomAlertDialogOpen"
      type="warning"
      :title="`Remove Review #${this.selectedReviewIndex + 1}`"
      text="Removing this review is irreversible. Confirm anyway?"
      :action="() => removeReview()"
    ></custom-alert-dialog>
  </v-card>
</template>

<script>
import CustomRating from "@/components/custom/Rating";
import GenericRatingChip from "@/components/generic/chip/Rating";
import CustomAlertDialog from "@/components/custom/AlertDialog";
import CustomTooltipButton from "@/components/custom/TooltipButton";
import GenericTransportationCombobox from "@/components/generic/combobox/Transportation";
import GenericDestinationsAutocomplete from "@/components/generic/autocomplete/Destinations";
import commonFinder from "@/common/finder";
const defaultPersonalReviewTransportationForm = {
  type: "",
  text: "",
  rating: 0,
  destinationID: null,
};

export default {
  name: "itinerary-post-editor-page-personal-transportation-reviews-form",
  components: {
    GenericDestinationsAutocomplete,
    GenericTransportationCombobox,
    CustomTooltipButton,
    CustomAlertDialog,
    GenericRatingChip,
    CustomRating,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  mixins: [commonFinder],
  data() {
    return {
      isDialogOpen: false,
      form: Object.assign({}, defaultPersonalReviewTransportationForm),
      defaultPersonalReviewTransportationForm,
      reviewsLocal: this.reviews,
      operation: "add",
      selectedReviewIndex: null,
      isCustomAlertDialogOpen: false,
    };
  },
  computed: {
    isFormValid() {
      const { type, destinationID, rating } = this.form;
      return type && destinationID && rating > 0;
    },
    reviewCount() {
      return this.reviewsLocal.length + 1;
    },
  },
  watch: {
    reviews(val) {
      this.reviewsLocal = val;
    },
    reviewsLocal(val) {
      this.$emit("update:reviews", val);
    },
  },
  methods: {
    openAddReviewDialog() {
      this.operation = "add";
      this.clearForm();
      this.isDialogOpen = true;
    },
    addReview() {
      this.reviewsLocal = this.reviewsLocal.push(this.form);
      this.clearForm();
      this.isDialogOpen = false;
    },
    openUpdateReviewDialog(review, index) {
      this.selectedReviewIndex = index;
      this.form = Object.assign({}, review);
      this.operation = "update";
      this.isDialogOpen = true;
    },
    updateReview() {
      this.reviewsLocal = this.reviewsLocal.map((review, index) => {
        if (index === this.selectedReviewIndex) {
          review = Object.assign({}, this.form);
        }
        return review;
      });
      this.clearForm();
      this.selectedReviewIndex = null;
      this.isDialogOpen = false;
    },
    openRemoveReviewDialog(index) {
      this.selectedReviewIndex = index;
      this.isCustomAlertDialogOpen = true;
    },
    removeReview() {
      this.reviewsLocal = this.reviewsLocal.filter(
        (_, index) => index !== this.selectedReviewIndex
      );
      this.selectedReviewIndex = null;
      this.isCustomAlertDialogOpen = false;
    },
    clearForm() {
      this.form = Object.assign(
        {},
        this.defaultPersonalReviewTransportationForm
      );
    },
  },
};
</script>
