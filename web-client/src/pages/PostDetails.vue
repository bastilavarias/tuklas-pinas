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
        <generic-please-wait-progress-circular
          v-if="isGetPostSoftDetailsStart"
        ></generic-please-wait-progress-circular>
        <v-row v-if="!isGetPostSoftDetailsStart">
          <v-col cols="12">
            <post-details-page-post-type-toolbar
              :type="postDetails.type"
            ></post-details-page-post-type-toolbar>
          </v-col>
          <v-col cols="12">
            <post-details-page-details-card
              :postID="postDetails.id"
              :type="postDetails.type"
              :author="postDetails.author"
              :createdAt="postDetails.createdAt"
              :title="postDetails.title"
              :text="postDetails.text"
              :files="postDetails.files"
            ></post-details-page-details-card>
          </v-col>
          <v-col cols="12" v-if="isPostItinerary">
            <post-details-page-itinerary-table-card
              :itinerary="postDetails.itinerary"
            ></post-details-page-itinerary-table-card>
          </v-col>
          <v-col cols="12" v-if="isPostItinerary">
            <post-details-page-personal-review-card
              :review="postDetails.review"
            ></post-details-page-personal-review-card>
          </v-col>
          <v-col cols="12">
            <post-details-page-tags-card
              :destinations="postDetails.destinations"
              :travel-events="postDetails.travelEvents"
              :categories="postDetails.categories"
            ></post-details-page-tags-card>
          </v-col>
          <v-col cols="12">
            <v-card outlined tile>
              <div class="px-4 pt-3">
                <span class="caption"
                  >Type your comment as
                  <span class="text-capitalize">{{
                    credentials.profile.firstName
                  }}</span>
                </span>
              </div>
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-textarea
                      label="Type your comment here"
                      single-line
                      outlined
                      v-model="comment"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <div class="d-flex align-center justify-space-between">
                      <div class="flex-grow-1"></div>
                      <v-btn
                        color="secondary"
                        @click="sendComment"
                        :disabled="!isCommentValid"
                        :loading="isSendCommentStart"
                        >Comment</v-btn
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card outlined tile>
              <v-card-title>
                <span>Comments</span>
                <div class="flex-grow-1"></div>
                <div>
                  <v-btn icon>
                    <v-icon>mdi-sort</v-icon>
                  </v-btn>
                </div>
              </v-card-title>
              <v-card-text class="text-center" v-if="comments.length === 0">
                <span class="caption font-italic">No comments.</span>
              </v-card-text>
              <template v-for="(comment, index) in comments">
                <generic-comment-media
                  :key="index"
                  class-name="pb-1"
                  :commentID="comment.id"
                  :created-at="comment.createdAt"
                  :author="comment.author"
                  :text="comment.text"
                >
                  <!--                  <template v-for="n2 in 5">-->
                  <!--                    <generic-comment-reply-media-->
                  <!--                      :key="n2"-->
                  <!--                    ></generic-comment-reply-media>-->
                  <!--                    <v-divider v-if="n2 !== 5"></v-divider>-->
                  <!--                  </template>-->
                  <!--                  -->
                </generic-comment-media>
                <v-divider v-if="index !== 5"></v-divider>
              </template>
            </v-card>
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
    <router-view></router-view>
  </v-container>
</template>

<script>
import GenericMiniProfileSideCard from "@/components/generic/card/MiniProfile";
import GenericTopCategoriesSideCard from "@/components/generic/card/TopCategories";
import GenericCommentMedia from "@/components/generic/media/Comment";
import GenericCommentReplyMedia from "@/components/generic/media/CommentReply";
import GenericMiniEventsExplorerSideCard from "@/components/generic/card/MiniEventsExplorer";
import GenericSuggestedPeopleSideCard from "@/components/generic/card/SuggestedPeople";
import GenericStickyFooter from "@/components/generic/footer/Sticky";
import commonUtilities from "@/common/utilities";
import { GET_POST_SOFT_DETAILS, SEND_POST_COMMENT } from "@/store/types/post";
import CustomTooltipButton from "@/components/custom/TooltipButton";
import GenericPleaseWaitProgressCircular from "@/components/generic/progress-circular/PleaseWait";
import PostDetailsPagePostTypeToolbar from "@/components/post-details-page/PostTypeToolbar";
import PostDetailsPageDetailsCard from "@/components/post-details-page/DetailsCard";
import PostDetailsPageItineraryTableCard from "@/components/post-details-page/ItineraryTableCard";
import PostDetailsPagePersonalReviewCard from "@/components/post-details-page/personal-reviews-card/Index";
import PostDetailsPageTagsCard from "@/components/post-details-page/TagsCard";
import commonValidation from "@/common/validation";
export default {
  components: {
    PostDetailsPageTagsCard,
    PostDetailsPagePersonalReviewCard,
    PostDetailsPageItineraryTableCard,
    PostDetailsPageDetailsCard,
    PostDetailsPagePostTypeToolbar,
    GenericPleaseWaitProgressCircular,
    CustomTooltipButton,
    GenericStickyFooter,
    GenericSuggestedPeopleSideCard,
    GenericMiniEventsExplorerSideCard,
    GenericCommentReplyMedia,
    GenericCommentMedia,
    GenericTopCategoriesSideCard,
    GenericMiniProfileSideCard,
  },
  data() {
    return {
      isGetPostSoftDetailsStart: false,
      postDetails: {},
      isSendCommentStart: false,
      comment: "",
      comments: [],
    };
  },
  mixins: [commonUtilities, commonValidation],
  computed: {
    isPostItinerary() {
      return this.postDetails.type === "itinerary";
    },
    credentials() {
      return this.$store.state.authentication.credentials;
    },
    isCommentValid() {
      return this.comment;
    },
  },
  methods: {
    async getPostSoftDetails(postID, type) {
      this.isGetPostSoftDetailsStart = true;
      const payload = {
        postID,
        type,
      };
      const gotPostDetails = await this.$store.dispatch(
        GET_POST_SOFT_DETAILS,
        payload
      );
      this.postDetails = Object.assign({}, gotPostDetails);
      this.isGetPostSoftDetailsStart = false;
    },
    async sendComment() {
      this.isSendCommentStart = true;
      const { postID } = this.$route.params;
      const payload = { postID, text: this.comment };
      const sentComment = await this.$store.dispatch(
        SEND_POST_COMMENT,
        payload
      );
      this.isSendCommentStart = false;
      const isCommentValid = this.validateObject(sentComment);
      if (isCommentValid) {
        this.comments = [sentComment, ...this.comments];
        this.comment = "";
        this.$nextTick(async () => {
          await this.$vuetify.goTo(`#comment-media-${sentComment.id}`, {
            offset: 150,
          });
        });
      }
    },
  },
  async created() {
    this.scrollToTop();
    const { postID, type } = this.$route.params;
    const parametersNotValid = !postID || !type;
    if (parametersNotValid) return this.goBack();
    await this.getPostSoftDetails(postID, type);
  },
};
</script>
