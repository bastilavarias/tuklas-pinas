<template>
  <div :class="`px-4 pt-3 ${className}`">
    <div class="d-flex align-start justify-space-between">
      <div class="mr-2">
        <span class="caption d-block"
          ><span class="text-capitalize">{{
            formatName(author.profile.firstName, author.profile.lastName)
          }}</span>
          - {{ formatRelativeTime(createdAt) }}</span
        >
        <generic-rating-chip
          :rating="rating"
          v-if="rating > 0"
        ></generic-rating-chip>
      </div>
      <v-avatar :size="40">
        <v-img
          :src="author.profile.image.display"
          :lazy-src="author.profile.image.display"
        ></v-img>
      </v-avatar>
    </div>
    <div class="my-3">
      <span class="body-2">
        {{ text || "" }}
      </span>
    </div>
    <custom-post-gallery-preview
      type="itinerary"
      :files="files"
    ></custom-post-gallery-preview>
  </div>
</template>

<script>
import GenericRatingChip from "@/components/generic/chip/Rating";
import commonUtilities from "@/common/utilities";
import CustomPostGalleryPreview from "@/components/custom/PostGalleryPreview";
export default {
  name: "discover-page-experience-list-item",
  components: { CustomPostGalleryPreview, GenericRatingChip },
  mixins: [commonUtilities],
  props: {
    author: {
      type: Object,
      required: true,
    },
    className: {
      type: String,
      required: false,
    },
    createdAt: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    files: {
      type: Array,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
};
</script>
