<template>
  <v-row>
    <v-col cols="12" md="3">
      <v-row>
        <v-col cols="12">
          <generic-top-categories-side-card></generic-top-categories-side-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="6">
      <v-row>
        <v-col cols="12">
          <v-toolbar dense outlined flat>
            <v-toolbar-title class="font-weight-medium">Posts</v-toolbar-title>
          </v-toolbar>
        </v-col>
        <v-col cols="12" v-if="isGetAccountPostsStart">
          <v-row justify="center">
            <generic-please-wait-progress-circular></generic-please-wait-progress-circular>
          </v-row>
        </v-col>
        <v-col cols="12" v-if="!isGetAccountPostsStart && posts.length > 0">
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
        </v-col>
        <v-col cols="12" v-if="!isGetAccountPostsStart && posts.length === 0">
          <v-row justify="center">
            <span class="caption">No posts.</span>
          </v-row>
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
</template>
<script>
import ProfilePageEventsSideCard from "@/components/profile-page/EventsSideCard";
import GenericSuggestedPeopleSideCard from "@/components/generic/card/SuggestedPeople";
import GenericStickyFooter from "@/components/generic/footer/Sticky";
import commonUtilities from "@/common/utilities";
import { GET_ACCOUNT_POSTS } from "@/store/types/account";
import GenericPleaseWaitProgressCircular from "@/components/generic/progress-circular/PleaseWait";
import GenericPostPreviewCard from "@/components/generic/card/PostPreview";
import GenericMiniEventsExplorerSideCard from "@/components/generic/card/MiniEventsExplorer";
import GenericTopCategoriesSideCard from "@/components/generic/card/TopCategories";
export default {
  components: {
    GenericTopCategoriesSideCard,
    GenericMiniEventsExplorerSideCard,
    GenericPostPreviewCard,
    GenericPleaseWaitProgressCircular,
    GenericStickyFooter,
    GenericSuggestedPeopleSideCard,
    ProfilePageEventsSideCard,
  },
  mixins: [commonUtilities],

  data() {
    return {
      posts: [],
      isGetAccountPostsStart: false,
    };
  },

  computed: {
    accountID() {
      return parseInt(this.$route.params.accountID) || null;
    },
  },

  watch: {
    async accountID(value) {
      if (value) {
        await this.getAccountPosts();
      }
    },
  },

  methods: {
    async getAccountPosts() {
      this.isGetAccountPostsStart = true;
      this.posts = await this.$store.dispatch(
        GET_ACCOUNT_POSTS,
        this.accountID
      );
      this.isGetAccountPostsStart = false;
    },
  },

  async created() {
    await this.getAccountPosts();
  },
};
</script>
