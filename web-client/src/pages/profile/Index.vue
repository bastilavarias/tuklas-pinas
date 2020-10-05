<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <profile-page-header></profile-page-header>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <router-view></router-view>
    </v-container>
  </section>
</template>
<script>
import ProfilePageHeader from "@/components/profile-page/Header";
export default {
  components: {
    ProfilePageHeader,
  },
};
</script>
