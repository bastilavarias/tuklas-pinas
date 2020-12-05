<template>
  <v-card color="transparent" flat>
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <generic-geolocations-autocomplete
            label="Search Destination"
            :geoLocation.sync="geoLocation"
          ></generic-geolocations-autocomplete>
        </v-col>
      </v-row>
    </v-card-text>
    <div class="mb-5">
      <div class="px-4 d-flex justify-space-between align-center mb-5">
        <span class="subtitle-2 secondary--text">Location</span>
        <span>
          <span class="mr-1">28°</span>
          <v-icon>mdi-weather-cloudy</v-icon>
        </span>
      </div>
      <v-row dense>
        <template v-for="n in 3">
          <v-col cols="3" :key="n">
            <div class="text-center">
              <v-avatar color="primary" class="mb-2">
                <v-icon color="white">mdi-food-apple-outline</v-icon>
              </v-avatar>
              <span class="caption d-block">Event {{ n }}</span>
            </div>
          </v-col>
        </template>
        <v-col cols="3" v-if="!isEventsExplorerExpanded">
          <div
            class="text-center cursor-pointer"
            @click="isEventsExplorerExpanded = true"
          >
            <v-avatar color="secondary" class="mb-2">
              <v-icon color="white">mdi-dots-horizontal-circle</v-icon>
            </v-avatar>
            <span class="caption d-block">More</span>
          </div>
        </v-col>
        <v-col cols="3" v-if="isEventsExplorerExpanded">
          <div
            class="text-center cursor-pointer"
            @click="isEventsExplorerExpanded = false"
          >
            <v-avatar color="secondary" class="mb-2">
              <v-icon color="white">mdi-chevron-up</v-icon>
            </v-avatar>
            <span class="caption d-block">Less</span>
          </div>
        </v-col>
        <template v-for="n in 5" v-if="isEventsExplorerExpanded">
          <v-col cols="3" :key="n + 3">
            <div class="text-center">
              <v-avatar color="primary" class="mb-2">
                <v-icon color="white">mdi-food-apple-outline</v-icon>
              </v-avatar>
              <span class="caption d-block">Event {{ n + 3 }}</span>
            </div>
          </v-col>
        </template>
      </v-row>
    </div>
    <div class="px-4 d-flex justify-space-between align-center mb-5">
      <span class="subtitle-2 secondary--text">Trending Posts</span>
      <div class="flex-grow-1"></div>
      <v-chip>
        <v-icon left> mdi-tune </v-icon>
        <span class="font-weight-medium">Filters</span>
      </v-chip>
    </div>
    <template v-for="(post, index) in posts">
      <discover-page-post-preview-item
        :key="index"
        :type="post.type"
        :title="post.title"
        :text="post.text"
        :reactionsCount="post.reactionsCount"
        :commentsCount="post.commentsCount"
        :files="post.files"
      ></discover-page-post-preview-item>
    </template>
    <infinite-loading
      @infinite="fetchTrendingPosts"
      :identifier="scrollIdentifier"
    >
      <template v-slot:spinner>
        <generic-please-wait-progress-circular></generic-please-wait-progress-circular>
      </template>
      <template v-slot:no-more
        ><span class="caption">No more posts.</span></template
      >
      <template v-slot:no-results
        ><span class="caption">No posts.</span></template
      >
    </infinite-loading>
  </v-card>
</template>

<script>
import GenericGeolocationsAutocomplete from "@/components/generic/autocomplete/Geolocations";
import { FETCH_POSTS } from "@/store/types/post";
import GenericPleaseWaitProgressCircular from "@/components/generic/progress-circular/PleaseWait";
import DiscoverPagePostPreviewItem from "@/components/discover-page/PostPreviewItem";
export default {
  components: {
    DiscoverPagePostPreviewItem,
    GenericPleaseWaitProgressCircular,
    GenericGeolocationsAutocomplete,
  },
  data() {
    return {
      isEventsExplorerExpanded: false,
      geoLocation: null,
      postType: "trending",
      skip: 0,
      scrollPage: 1,
      scrollIdentifier: +new Date(),
      posts: [],
    };
  },
  watch: {
    async geoLocation(val) {
      const { display_name, address, lat, lon } = val;
      if (display_name && lat && lon) {
        await this.$router.push({
          name: "discover-place-details-page",
          params: {
            placeName: display_name,
            country: address.country,
            latitude: lat,
            longitude: lon,
          },
        });
      }
    },
  },
  methods: {
    async fetchTrendingPosts($state) {
      const payload = {
        type: this.postType,
        skip: this.skip,
      };
      const fetchedPosts = await this.$store.dispatch(FETCH_POSTS, payload);
      if (fetchedPosts.length === 0) return $state.complete();
      this.posts = [...this.posts, ...fetchedPosts];
      this.skip += 5;
      this.scrollPage += 1;
      $state.loaded();
    },
  },
};
</script>
