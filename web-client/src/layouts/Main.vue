<template>
  <v-app class="grey--background">
    <v-app-bar app color="dark" fixed width="100%" style="z-index: 3" dark>
      <v-app-bar-nav-icon>
        <v-icon large color="white" @click="$router.push({ name: 'feed' })">
          mdi-map-marker
        </v-icon>
      </v-app-bar-nav-icon>
      <v-spacer> </v-spacer>
      <v-btn color="transparent" depressed>
        <span class="mr-1 text-capitalize">Feed</span>
        <v-icon>mdi-home-modern</v-icon>
      </v-btn>
      <v-btn color="transparent" depressed>
        <span class="mr-1 text-capitalize">Tour Guides</span>
        <v-icon>mdi-account-cowboy-hat</v-icon>
      </v-btn>
      <v-btn color="transparent" depressed>
        <span class="mr-1 text-capitalize">Discover</span>
        <v-icon>mdi-map-search</v-icon>
      </v-btn>
      <v-spacer> </v-spacer>
      <main-toolbar-create-post-menu-button></main-toolbar-create-post-menu-button>
      <custom-tooltip-button icon="mdi-magnify" text="Search">
      </custom-tooltip-button>
      <custom-tooltip-button
        icon="mdi-bell"
        text="Notifications"
      ></custom-tooltip-button>
      <main-toolbar-profile-menu-button></main-toolbar-profile-menu-button>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MainToolbarProfileMenuButton from "@/components/main/ToolbarProfileMenuButton";
import MainToolbarCreatePostMenuButton from "@/components/main/ToolbarCreatePostMenuButton";
import CustomTooltipButton from "@/components/custom/TooltipButton";
export default {
  name: "main-layout",
  components: {
    CustomTooltipButton,
    MainToolbarCreatePostMenuButton,
    MainToolbarProfileMenuButton,
  },
};
</script>
