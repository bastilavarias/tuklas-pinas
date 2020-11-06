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
import {
  FETCH_GENERIC_NATIONALITIES,
  FETCH_GENERIC_SEXES,
} from "@/store/types/generic";
export default {
  components: {
    ProfilePageHeader,
  },
  async created() {
    await this.$store.dispatch(FETCH_GENERIC_NATIONALITIES);
    await this.$store.dispatch(FETCH_GENERIC_SEXES);
  },
};
</script>
