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
      <v-row dense v-if="isFetchTravelEventsStart">
        <v-col cols="3">
          <div class="text-center">
            <v-avatar color="primary" class="mb-2">
              <span class="white--text font-weight-bold">81</span>
            </v-avatar>
            <span class="caption d-block">Project 81</span>
          </div>
        </v-col>
        <template v-for="(event, index) in filteredTravelEvents">
          <v-col cols="3" :key="index">
            <div class="text-center">
              <v-avatar color="primary" class="mb-2">
                <v-icon color="white">{{
                  getTravelEventIcon(event.name)
                }}</v-icon>
              </v-avatar>
              <span class="caption d-block">{{ event.name }}</span>
            </div>
          </v-col>
        </template>
      </v-row>
      <v-row
        justify="center"
        align-content="center"
        v-if="!isFetchTravelEventsStart"
      >
        <generic-please-wait-progress-circular></generic-please-wait-progress-circular>
      </v-row>
    </div>
    <div class="px-4 d-flex justify-space-between align-center mb-5">
      <span class="subtitle-2 secondary--text">Trending Posts</span>
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
import { FETCH_GENERIC_TRAVEL_EVENTS } from "@/store/types/generic";
import commonUtilities from "@/common/utilities";
export default {
  components: {
    DiscoverPagePostPreviewItem,
    GenericPleaseWaitProgressCircular,
    GenericGeolocationsAutocomplete,
  },
  mixins: [commonUtilities],
  data() {
    return {
      isEventsExplorerExpanded: false,
      geoLocation: null,
      postType: "trending",
      skip: 0,
      scrollPage: 1,
      scrollIdentifier: +new Date(),
      posts: [],
      isFetchTravelEventsStart: false,
    };
  },
  computed: {
    travelEvents() {
      return this.$store.state.generic.travelEvents;
    },

    filteredTravelEvents() {
      return this.travelEvents.filter((event) => event.name !== "Project 81");
    },
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
    async fetchTravelEvents() {
      this.isFetchTravelEventsStart = false;
      await this.$store.dispatch(FETCH_GENERIC_TRAVEL_EVENTS);
      console.log(this.travelEvents);
      this.isFetchTravelEventsStart = true;
    },
  },
  async created() {
    await this.fetchTravelEvents();
  },
};
</script>
