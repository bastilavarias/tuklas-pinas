<template>
  <section>
    <v-row>
      <v-col cols="12" md="3">
        <v-row>
          <v-col cols="12">
            <feed-profile-preview-card></feed-profile-preview-card>
          </v-col>
          <v-col cols="12">
            <feed-category-list-card></feed-category-list-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <v-card outlined tile class="mb-5">
              <div class="px-4 pt-3">
                <div class="d-flex align-start justify-space-between mb-2">
                  <div class="mr-2">
                    <div>
                      <span class="caption"
                        >Sebastian Curtis T. Lavarias - 6 hrs ago</span
                      >
                    </div>
                    <div class="mb-1">
                      <span class="title font-weight-bold secondary--text"
                        >Lorem ipsum dolor sit amet.</span
                      >
                    </div>
                    <div class="mb-3">
                      <span class="subtitle-2"
                        >Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolorem, eaque, veritatis! Ab accusantium aliquam
                        beatae corporis culpa cupiditate deserunt ducimus esse
                        fugit impedit inventore, maiores nesciunt numquam, odio
                        optio quas ratione rem repellendus saepe sequi tempore
                        temporibus tenetur velit? Debitis necessitatibus nobis
                        officiis quam tenetur voluptate. Adipisci, consequuntur
                        cupiditate deserunt eaque error et excepturi fugiat
                        harum itaque iure magnam minus nesciunt nisi nulla
                        perferendis perspiciatis placeat quasi quod ratione rem
                        repudiandae sequi sunt tenetur veniam voluptate.
                        Aliquam, blanditiis cupiditate debitis illum inventore
                        ipsum magnam maxime minus nesciunt non placeat possimus
                        qui reprehenderit repudiandae sapiente, similique sunt
                        vitae voluptatum. Consequatur, voluptatum!</span
                      >
                    </div>
                    <div class="mb-1">
                      <template v-for="n in 4">
                        <v-chip
                          label
                          color="primary"
                          small
                          :class="`${
                            n === 1 ? 'mr-1 mb-1' : 'ma-1'
                          } font-weight-bold`"
                          :key="n"
                          >FOOD</v-chip
                        >
                      </template>
                    </div>
                  </div>
                  <v-avatar :size="40">
                    <v-img
                      src="https://bastilavarias.github.io/assets/img/sebastian-lavarias.5c3a8fdd.png"
                    ></v-img>
                  </v-avatar>
                </div>
                <carousel
                  :items="1"
                  dots
                  :nav="false"
                  :autoplay="false"
                  :mouse-drag="false"
                  touch-drag
                  pull-drag
                  free-drag
                  style="position: relative"
                >
                  <template v-for="(image, index) in images">
                    <custom-router-link
                      :to="{
                        name: 'travel-story-post-images',
                        params: { imageID: 1 },
                      }"
                      :key="index"
                    >
                      <v-img
                        height="300"
                        :src="image"
                        class="d-block mx-auto"
                        position="center"
                        cover
                      ></v-img>
                    </custom-router-link>
                  </template>
                  <template slot="prev">
                    <v-btn fab color="white" small class="next-image-button">
                      <v-icon small color="black">mdi-chevron-left</v-icon>
                    </v-btn>
                  </template>
                  <template slot="next">
                    <v-btn
                      fab
                      color="white"
                      small
                      class="previous-image-button"
                    >
                      <v-icon small color="black">mdi-chevron-right</v-icon>
                    </v-btn>
                  </template>
                </carousel>
              </div>
              <div>
                <v-divider> </v-divider>
                <div
                  class="px-4 py-1 d-flex justify-space-between align-center"
                >
                  <span class="caption">Event: Project 81</span>
                </div>
                <v-divider> </v-divider>
                <div
                  class="px-4 py-1 d-flex justify-space-between align-center"
                >
                  <span class="caption"
                    >Destination:
                    <span class="font-italic"> Destination Name </span></span
                  >
                  <v-icon small color="primary">mdi-map-marker</v-icon>
                </div>
              </div>
              <div>
                <v-divider> </v-divider>
                <v-row no-gutters>
                  <v-col cols="4">
                    <v-btn block large text tile color="secondary">
                      <v-icon class="mr-1">mdi-heart-outline</v-icon>
                      <span class="caption font-weight-bold">1k+</span>
                    </v-btn>
                  </v-col>
                  <v-col cols="4">
                    <v-btn block large text tile color="secondary">
                      <v-icon class="mr-1">mdi-comment-outline</v-icon>
                      <span class="caption font-weight-bold">1k+</span>
                    </v-btn>
                  </v-col>
                  <v-col cols="4">
                    <v-btn block large text tile color="secondary">
                      <v-icon class="mr-1">mdi-share-outline</v-icon>
                      <span class="caption font-weight-bold">1k+</span>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-card>
            <v-card outlined tile class="mb-5">
              <div class="px-4 pt-3">
                <span class="caption"
                  >Type your comment as Sebastian Curtis T. Lavarias</span
                >
              </div>
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-textarea
                      label="Type your comment here"
                      single-line
                      outlined
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <div class="d-flex align-center justify-space-between">
                      <div class="flex-grow-1"></div>
                      <v-btn color="secondary">Comment</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
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
              <template v-for="n in 5">
                <generic-comment-media :key="n" class-name="pb-1">
                  <template v-for="n2 in 5">
                    <generic-comment-reply-media
                      :key="n2"
                    ></generic-comment-reply-media>
                    <v-divider v-if="n2 !== 5"></v-divider>
                  </template>
                </generic-comment-media>
                <v-divider v-if="n !== 5"></v-divider>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <v-row>
          <v-col cols="12">
            <feed-events-preview-card></feed-events-preview-card>
          </v-col>
          <v-col cols="12">
            <feed-people-card></feed-people-card>
          </v-col>
          <v-col cols="12">
            <generic-sticky-footer-card></generic-sticky-footer-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <router-view></router-view>
  </section>
</template>

<script>
import FeedProfilePreviewCard from "@/components/feed/ProfilePreviewCard";
import FeedCategoryListCard from "@/components/feed/CategoryListCard";
import FeedEventsPreviewCard from "@/components/feed/EventsPreviewCard";
import FeedPeopleCard from "@/components/feed/PeopleCard";
import GenericStickyFooterCard from "@/components/generic/StickyFooterCard";
import Carousel from "vue-owl-carousel";
import CustomRouterLink from "@/components/custom/RouterLink";
import GenericCommentMedia from "@/components/generic/CommentMedia";
import GenericCommentReplyMedia from "@/components/generic/CommentReplyMedia";

export default {
  components: {
    GenericCommentReplyMedia,
    GenericCommentMedia,
    CustomRouterLink,
    GenericStickyFooterCard,
    FeedPeopleCard,
    FeedEventsPreviewCard,
    FeedCategoryListCard,
    FeedProfilePreviewCard,
    Carousel,
  },

  data() {
    return {
      images: [
        "https://images.pexels.com/photos/902288/pexels-photo-902288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2604843/pexels-photo-2604843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/1076240/pexels-photo-1076240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/210367/pexels-photo-210367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2475386/pexels-photo-2475386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1364554/pexels-photo-1364554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ],
      rating: 4,
      isGalleryDialogOpen: false,
    };
  },
};
</script>

<style scoped>
.next-image-button,
.previous-image-button {
  position: absolute;
  z-index: 2;
}

.next-image-button {
  top: 40%;
  left: 1%;
}

.previous-image-button {
  top: 40%;
  right: 1%;
}
</style>
