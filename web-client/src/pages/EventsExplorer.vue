<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-row>
          <v-col cols="12">
            <generic-profile-preview-card></generic-profile-preview-card>
          </v-col>
          <v-col cols="12">
            <generic-top-categories-side-card></generic-top-categories-side-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <h1 class="display-1 font-weight-bold mb-10">Explore Events</h1>
            <v-row>
              <template v-for="(event, index) in events">
                <v-col cols="12" md="6" :key="index">
                  <v-card
                    flat
                    min-height="15rem"
                    dark
                    :style="{ position: 'relative' }"
                    color="primary"
                  >
                    <div
                      class="event-content d-flex align-center justify-center"
                    >
                      <div class="text-center">
                        <span class="overline">{{ event.name }}</span>
                      </div>
                    </div>
                    <div
                      class="event-background-image"
                      :style="{
                        backgroundImage: `url(${event.backgroundImage})`,
                      }"
                    ></div>
                    <div class="dark-overlay"></div>
                  </v-card>
                </v-col>
              </template>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <v-row>
          <v-col cols="12">
            <generic-suggested-people-side-card></generic-suggested-people-side-card>
          </v-col>
          <v-col cols="12">
            <feed-footer-card></feed-footer-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FeedFooterCard from "@/components/generic/StickyFooterCard";
import GenericProfilePreviewCard from "@/components/generic/ProfilePreviewCard";
import GenericTopCategoriesSideCard from "@/components/generic/TopCategoriesSideCard";
import GenericSuggestedPeopleSideCard from "@/components/generic/SuggestedPeopleSideCard";
export default {
  components: {
    GenericSuggestedPeopleSideCard,
    GenericTopCategoriesSideCard,
    GenericProfilePreviewCard,
    FeedFooterCard,
  },

  data() {
    return {
      events: [
        {
          backgroundImage: require("@/assets/generic/event-background-images/project-81.jpeg"),
          name: "Project 81",
        },
        {
          backgroundImage: require("@/assets/generic/event-background-images/chasing-waterfalls.jpeg"),
          name: "Chasing Waterfalls",
        },
        {
          backgroundImage: require("@/assets/generic/event-background-images/food-trippers.jpg"),
          name: "Food Trippers",
        },
        {
          backgroundImage: require("@/assets/generic/event-background-images/backpackers.jpg"),
          name: "Backpackers",
        },
        {
          backgroundImage: require("@/assets/generic/event-background-images/mountaineers.jpeg"),
          name: "Mountaineers",
        },
        {
          backgroundImage: require("@/assets/generic/event-background-images/solo-trip.jpeg"),
          name: "Solo Trip",
        },
        {
          backgroundImage: require("@/assets/generic/event-background-images/couple-adventure.jpeg"),
          name: "Couple Adventure",
        },
        {
          backgroundImage: require("@/assets/generic/event-background-images/barkada-adventure.jpg"),
          name: "Barkada Adventure",
        },
      ],
    };
  },
};
</script>

<style scoped>
.event-background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  z-index: 1;
}

.event-content {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
}
</style>
