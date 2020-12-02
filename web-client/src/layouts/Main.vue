<template>
  <v-app class="grey-background">
    <v-app-bar app color="dark" fixed width="100%" style="z-index: 5" dark>
      <v-app-bar-nav-icon>
        <v-icon
          large
          color="white"
          @click="$router.push({ name: 'feed-page' })"
        >
          mdi-map-marker
        </v-icon>
      </v-app-bar-nav-icon>
      <v-spacer> </v-spacer>
      <v-btn
        color="transparent"
        depressed
        :to="{ name: 'feed-page' }"
        active-class="primary"
      >
        <span class="mr-1 text-capitalize">Feed</span>
        <v-icon>mdi-home-modern</v-icon>
      </v-btn>
      <!--      <v-btn-->
      <!--        color="transparent"-->
      <!--        depressed-->
      <!--        :to="{ name: 'tour-guides-page' }"-->
      <!--        exact-->
      <!--        exact-active-class="primary"-->
      <!--      >-->
      <!--        <span class="mr-1 text-capitalize">Tour Guides</span>-->
      <!--        <v-icon>mdi-account-cowboy-hat</v-icon>-->
      <!--      </v-btn>-->
      <!--      -->
      <v-btn
        color="transparent"
        depressed
        :to="{ name: 'discover-dashboard-page' }"
        active-class="primary"
      >
        <span class="mr-1 text-capitalize">Discover</span>
        <v-icon>mdi-map-search</v-icon>
      </v-btn>
      <v-spacer> </v-spacer>
      <main-layout-toolbar-create-post-menu-button></main-layout-toolbar-create-post-menu-button>
      <custom-tooltip-button
        icon="mdi-magnify"
        text="Search"
        :to="{ name: 'search-page' }"
        exact-active-class="primary"
      >
      </custom-tooltip-button>
      <main-layout-toolbar-notification-menu-button></main-layout-toolbar-notification-menu-button>
      <main-layout-toolbar-profile-menu-button></main-layout-toolbar-profile-menu-button>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
      <custom-global-snackbar></custom-global-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import CustomTooltipButton from "@/components/custom/TooltipButton";
import MainLayoutToolbarCreatePostMenuButton from "@/components/main-layout/ToolbarCreatePostMenuButton";
import MainLayoutToolbarProfileMenuButton from "@/components/main-layout/ToolbarProfileMenuButton";
import MainLayoutToolbarNotificationMenuButton from "@/components/main-layout/ToolbarNotificationMenuButton";
import CustomGlobalSnackbar from "@/components/custom/GlobalSnackbar";
export default {
  name: "main-layout",
  components: {
    CustomGlobalSnackbar,
    MainLayoutToolbarNotificationMenuButton,
    MainLayoutToolbarProfileMenuButton,
    MainLayoutToolbarCreatePostMenuButton,
    CustomTooltipButton,
  },
};
</script>
