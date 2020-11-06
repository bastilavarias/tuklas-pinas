<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-row>
          <v-col cols="12">
            <generic-mini-profile-side-card></generic-mini-profile-side-card>
          </v-col>
          <v-col cols="12">
            <generic-top-categories-side-card></generic-top-categories-side-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12 ">
            <feed-page-posts-type-tabs></feed-page-posts-type-tabs>
          </v-col>
          <v-col cols="12">
            <template v-for="(post, index) in posts">
              <generic-post-preview-card
                :key="index"
                :postID="post.id"
                :type="post.type"
                class-name="mb-5"
                :author="post.author"
                :createdAt="post.createdAt"
                :title="post.title"
                :text="post.text"
                :files="post.files"
                :reactions-count.sync="post.reactionsCount"
                :comments-count="post.commentsCount"
                :reactions.sync="post.reactions"
              ></generic-post-preview-card>
            </template>
            <infinite-loading
              @infinite="fetchPosts"
              :identifier="scrollIdentifier"
            >
              <template v-slot:spinner>
                <generic-please-wait-progress-circular></generic-please-wait-progress-circular>
              </template>
              <template v-slot:no-more
                ><span class="caption">No more posts.</span></template
              >
              <template v-slot:no-results
                ><span class="caption">No results.</span></template
              >
            </infinite-loading>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3" ref="stickyParent">
        <v-row>
          <v-col cols="12">
            <generic-mini-events-explorer-side-card></generic-mini-events-explorer-side-card>
          </v-col>
          <v-col cols="12">
            <generic-suggested-people-side-card></generic-suggested-people-side-card>
          </v-col>
          <v-col cols="12">
            <div
              :style="{
                position: 'relative',
                height: `${stickyParentHeight}px`,
              }"
            >
              <generic-sticky-footer></generic-sticky-footer>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GenericMiniProfileSideCard from "@/components/generic/card/MiniProfile";
import GenericTopCategoriesSideCard from "@/components/generic/card/TopCategories";
import GenericMiniEventsExplorerSideCard from "@/components/generic/card/MiniEventsExplorer";
import GenericSuggestedPeopleSideCard from "@/components/generic/card/SuggestedPeople";
import GenericStickyFooter from "@/components/generic/footer/Sticky";
import commonUtilities from "@/common/utilities";
import FeedPagePostsTypeTabs from "@/components/feed-page/PostsTypeTabs";
import { FETCH_POSTS } from "@/store/types/post";
import GenericPleaseWaitProgressCircular from "@/components/generic/progress-circular/PleaseWait";
import GenericPostPreviewCard from "@/components/generic/card/PostPreview";
export default {
  components: {
    GenericPostPreviewCard,
    GenericPleaseWaitProgressCircular,
    FeedPagePostsTypeTabs,
    GenericStickyFooter,
    GenericSuggestedPeopleSideCard,
    GenericMiniEventsExplorerSideCard,
    GenericTopCategoriesSideCard,
    GenericMiniProfileSideCard,
  },
  mixins: [commonUtilities],

  data() {
    return {
      postType: this.$route.query.t || "relevant",
      skip: 0,
      posts: [],
      scrollPage: 1,
      scrollIdentifier: +new Date(),
    };
  },

  watch: {
    async "$route.query"(val) {
      this.postType = val.t || "relevant";
      this.skip = 0;
      this.scrollPage = 1;
      this.scrollIdentifier = +new Date();
      this.posts = [];
    },
  },

  methods: {
    async fetchPosts($state) {
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
