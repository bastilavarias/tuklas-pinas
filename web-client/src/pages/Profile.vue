<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <v-card outlined>
                <profile-page-display-images-input
                  :height="200"
                  class-name="mb-15"
                ></profile-page-display-images-input>
                <div>
                  <div class="text-center mb-5">
                    <h1 class="title font-weight-bold secondary--text">
                      Sebastian Lavarias
                    </h1>
                    <span>
                      <v-icon color="primary" class="mr-1" small>
                        mdi-map-marker-outline
                      </v-icon>
                      <span class="subtitle-2">Manila, Philippines</span></span
                    >
                  </div>
                  <div class="mb-5 d-flex justify-space-around align-center">
                    <div class="text-center">
                      <h2 class="subtitle-2 secondary--text">Followers</h2>
                      <span class="caption">99</span>
                    </div>
                    <v-divider vertical></v-divider>
                    <div class="text-center">
                      <h2 class="subtitle-2 secondary--text">Following</h2>
                      <span class="caption">99</span>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import ProfilePageDisplayImagesInput from "@/components/profile-page/DisplayImagesInput";
export default {
  components: { ProfilePageDisplayImagesInput },
};
</script>
