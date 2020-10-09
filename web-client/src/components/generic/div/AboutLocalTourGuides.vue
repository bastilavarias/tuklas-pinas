<template>
  <section class="py-10 white" style="max-height: 50rem">
    <v-container class="fill-height">
      <v-row align-content="center">
        <v-col cols="12">
          <v-row>
            <v-col cols="12" md="6">
              <h1 class="display-1 font-weight-bold mb-10">
                About Local Tour Guide
              </h1>
              <p class="subtitle-1 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                consequatur culpa doloribus hic ipsa, libero molestiae natus
                officiis omnis, totam ut velit vero voluptate? Accusamus,
                adipisci facere magni minima officia officiis optio quidem
                repellat, repellendus sint veniam vero! Animi architecto ducimus
                est incidunt laborum natus perferendis quasi qui tenetur
                voluptatem.
              </p>
              <v-btn rounded outlined color="secondary">
                <span class="text-capitalize mr-1">Click to view more</span>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-center">
                <v-avatar size="75%">
                  <v-img
                    :src="require('@/assets/home/about-local-tour-guides.jpg')"
                  ></v-img>
                </v-avatar>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "generic-about-local-tour-guides-div",
};
</script>
